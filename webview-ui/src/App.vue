<script setup lang="ts">
import { onMounted } from 'vue';
import { allComponents, provideVSCodeDesignSystem } from '@vscode/webview-ui-toolkit'
import ChatView from './components/ChatView.vue'
import { vscode } from "./vscode";

provideVSCodeDesignSystem().register(allComponents)

onMounted(() => {
  vscode.postMessage({
    command: "ready",
  });
});
</script>

<template>
  <main>
    <ChatView />
  </main>
</template>
