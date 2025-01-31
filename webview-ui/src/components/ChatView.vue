<script setup lang="ts">
import { ref } from 'vue'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import { vscode } from "../vscode"

const prompt = ref('What time is it?')
const response = ref('...')

const ask = () => {
  const text = prompt.value;
  response.value = 'Loading...';
  vscode.postMessage({ command: 'chat', text })
}

const sanitizeString = async (text: string): Promise<string> => DOMPurify.sanitize(await marked.parse(text))

const onChatResponse = async (text: string) => {
  response.value = await sanitizeString(text)
}

window.addEventListener('message', event => {
  const { command, text } = event.data;
  if (command === 'chatResponse') onChatResponse(text)
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
    />

    <vscode-button @click="ask()">Ask question</vscode-button>

    <div v-html="response" class="border py-1 px-2 rounded min-h-3 bg-gray-800/50"></div>
  </div>
</template>
