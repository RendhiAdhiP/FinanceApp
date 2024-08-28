<template>
    <div class="flex">
        <Sidebar @sidebarExpanded="handleSidebarExpand" />
        <main :class="[
            'flex w-full flex-col items-center lg:items-start gap-6 overflow-x-hidden px-4 py-10 md:px-8 md:py-6',
            isSidebarExpand ? 'lg:ml-60' : 'lg:ml-16',
        ]">
            <slot></slot>
        </main>
    </div>
</template>

<script setup>
import Sidebar from '@/components/sidebar/sidebar.vue'
import { sidebarExpand } from '@/lib/data'
import { ref, onMounted, onBeforeUnmount, watch, inject } from 'vue'

const isSidebarExpand = ref(null)

const handleSidebarExpand = (newVal) => {
    isSidebarExpand.value = newVal
}
</script>

<style lang="scss" scoped></style>
