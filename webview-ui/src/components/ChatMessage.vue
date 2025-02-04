<script setup lang="ts">
import type { IChatMessage } from './ChatView.vue'

const { message } = defineProps<{
  message: IChatMessage
}>()
</script>

<template>
  <div class="flex gap-2 mb-2" :class="message.isAi ? '' : 'justify-end'">
    <div
      class="relative px-5 py-3 text-white rounded-lg ltr:rounded-bl-none rtl:rounded-br-none" :class="message.isAi ? 'bg-violet-700' : 'bg-sky-700'">
      <p class="mb-0 text-xs under opacity-80">{{ message.isAi ? 'AI' : 'You' }}</p>
      <div class="mb-0 markdown" v-html="message.content"></div>
      <p class="mt-1 mb-0 text-xs text-right text-white/50">
        <i class="align-middle ri-time-line"></i>
        <span class="align-middle">{{ new Date(message.date).toLocaleString() }}</span>
      </p>
      <div
        class="before:content-[''] before:absolute before:border-[5px] before:border-transparent ltr:before:left-0 rtl:before:right-0 before:-bottom-2"
        :class="message.isAi ? 'border-l-violet-500 border-t-violet-500' : 'border-l-sky-500 border-t-sky-500'"
        >
      </div>
    </div>
    <!-- <div class="relative self-start dropdown">
      <a class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-100" href="#" role="button"
        data-bs-toggle="dropdown" id="dropdownMenuButton14">
        <i class="ri-more-2-fill"></i>
      </a>
      <div
        class="absolute z-50 hidden w-40 py-2 my-6 text-left list-none bg-white border-none rounded shadow-lg ltr:left-auto ltr:right-0 xl:ltr:left-0 xl:ltr:right-auto rtl:left-0 rtl:right-auto xl:rtl:right-0 xl:rtl:left-auto dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:border-gray-600/50"
        aria-labelledby="dropdownMenuButton14">
        <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="#">
          Copy <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-200 ri-file-copy-line"></i>
        </a>
        <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="#">
          Save <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-200 ri-save-line"></i>
        </a>
        <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="#">
          Forward <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-200 ri-chat-forward-line"></i>
        </a>
        <a class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="#">
          Delete <i class="text-gray-500 rtl:float-left ltr:float-right dark:text-gray-200 ri-delete-bin-line"></i>
        </a>
      </div>
    </div> -->
  </div>
</template>
