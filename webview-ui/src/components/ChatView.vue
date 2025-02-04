<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import { v4 as uuidv4 } from 'uuid'
import { vscode } from "../vscode"
import ChatMessage from './ChatMessage.vue'
import { useKeyModifier } from '@vueuse/core'

const isCtrlDown = useKeyModifier('Control')

export interface IChatMessage {
  id: string
  isAi: boolean
  content: string
  date: string
}

const prompt = ref('Write an example text in markdown.')
const messages = ref<IChatMessage[]>([])

const createUserMessage = async (text: string): Promise<IChatMessage> => ({
  id: uuidv4(),
  isAi: false,
  content: await sanitizeString(text),
  date: (new Date()).toISOString(),
})

const createBotMessage = async (text: string, id?: string): Promise<IChatMessage> => ({
  id: id ?? uuidv4(),
  isAi: true,
  content: await sanitizeString(text),
  date: (new Date()).toISOString(),
})

const ask = async () => {
  const text = prompt.value
  if (text?.length < 2) return
  vscode.postMessage({ command: 'chat', text })
  const message = await createUserMessage(text)
  messages.value.push(message)
}

const onEnter = () => {
  if (isCtrlDown.value) ask()
}

const sanitizeString = async (text: string): Promise<string> => DOMPurify.sanitize(await marked.parse(text))

const onChatResponse = async (text: string, id: string) => {
  const existingMessage = messages.value.find(m => m.id === id)
  if (existingMessage) {
    existingMessage.content = text
  } else {
    const message = await createBotMessage(text, id)
    messages.value.push(message)
  }
}

window.addEventListener('message', event => {
  const { command, id, text } = event.data;
  if (command === 'chatResponse') onChatResponse(text, id)
});
</script>

<template>
  <div class="p-4 gap-y-2 grid grid-cols-1">
    <h2 class="text-lg font-bold">Deep Seek</h2>

    <textarea
      v-model="prompt"
      rows="3"
      placeholder="Ask something..."
      class="border p-1 rounded w-full bg-gray-800/50"
      @keydown.enter="onEnter()"
    />

    <vscode-button @click="ask()">Ask question</vscode-button>

    <div class="grid grid-cols-1 gap-2 border py-1 px-2 rounded min-h-5 bg-gray-800/50">
      <ChatMessage v-for="message in messages" :key="message.id" :message />
    </div>
  </div>
</template>
