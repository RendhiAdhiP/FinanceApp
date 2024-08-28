<template>
    <footer class="flex flex-col gap-2 text-center">
        <p class="text-xs font-normal text-custom-greyscale-500 md:text-sm">
            <slot name="text"></slot>
        </p>
        <RouterLink :href="to" class="cursor-pointer text-xs font-bold underline decoration-black md:text-sm">
            <slot></slot>
        </RouterLink>
    </footer>
</template>

<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

let props = defineProps({
    to: { type: String, default: null, required: false },
})
</script>

<style lang="scss" scoped></style>
