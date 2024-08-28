<template>
    <header class="relative flex h-auto w-full flex-row items-center gap-4 md:flex-row">
        <div class="user__custom flex h-12 w-12 items-center justify-center rounded-[100%] md:h-[72px] md:w-[72px]">
            <div
                class="flex h-10 w-10 items-center justify-center rounded-[100%] bg-slate-100 px-2 py-4 drop-shadow-sm md:h-12 md:w-12">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path :d="headerProgress.Icon" fill="black" />
                </svg>
            </div>
        </div>
        <div class="flex w-full flex-1 flex-col gap-1">
            <h1 class="text-lg font-medium lg:text-xl">
                {{ headerProgress.title }}
            </h1>
            <p class="text-xs text-custom-greyscale-400 lg:text-sm">
                {{ headerProgress.description }}
            </p>
        </div>
        <RouterLink to="/dashboard"
            class="absolute -right-3 -top-2 flex h-6 w-6 items-center justify-center rounded-full border border-[#DFE1E7] px-1 md:h-8 md:w-8 md:px-2 md:py-1">
            <svg width="24" height="24" viewBox="0 0 24 24" class="" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"
                    fill="black" />
            </svg>
        </RouterLink>
    </header>
</template>

<script setup>
import Icon from '@/components/icon/Icon.vue'
import { defineProps, inject, provide } from 'vue'

const headerProgress = inject('headerProgress')
</script>

<style lang="scss" scoped>
.user__custom {
    background: linear-gradient(to bottom,
            #eceff3 0%,
            rgba(236, 239, 243, 0) 100%);
    border: 1px solid #dfe1e7;
}

.user__custom>button {
    border: 1px solid #dfe1e7;
}
</style>
