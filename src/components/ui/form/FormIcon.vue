<template>
    <div
        class="`flex user__custom ` relative ml-[50%] h-16 w-16 translate-x-[-50%] items-center justify-center rounded-[100%] md:h-[72px] md:w-[72px]"
    >
        <div
            class="ml-[50%] mt-[50%] flex h-10 w-10 translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-[100%] bg-slate-100 px-2 py-4 drop-shadow-sm md:h-12 md:w-12"
        >
            <Icon :Icon="pathIcon" />
        </div>
    </div>
</template>

<script setup>
import { defineProps, inject } from 'vue'
import Icon from '@/components/icon/Icon.vue'

const Props = defineProps({
    pathIcon: { type: null },
    class: { type: String, required: false },
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
