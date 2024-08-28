<template>
    <div :class="['flex flex-col items-center gap-1 text-center', customClass]">
        <h2 class="font-semiBold text-xl xl:text-2xl">{{ title }}</h2>
        <div class="flex gap-1">
            <h4 class="text-xs font-[300] text-custom-greyscale-500 md:text-sm">
                <slot name="desc"></slot>
            </h4>
            <RouterLink
                v-show="linkTo == 'true'"
                :href="to"
                class="cursor-pointer text-xs font-semibold underline md:text-sm"
            >
                <slot></slot>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

let props = defineProps({
    customClass: { type: String },
    title: { type: String },
    linkTo: { type: Boolean, default: false },
    to: { type: String, default: null },
})
</script>

<style lang="scss" scoped>
.user__custom {
    background: linear-gradient(
        to bottom,
        #eceff3 0%,
        rgba(236, 239, 243, 0) 100%
    );
    border: 1px solid #dfe1e7;
}

.user__custom > button {
    border: 1px solid #dfe1e7;
}
</style>
