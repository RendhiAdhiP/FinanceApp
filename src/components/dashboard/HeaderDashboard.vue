<template>
    <header class="flex w-full flex-col items-center justify-between gap-3 xs:mt-16 md:mt-20 lg:mt-0 lg:flex-row">
        <div class="mb-2 flex flex-col items-center lg:items-start">
            <h2 class="text-xl font-medium md:text-2xl">
                {{ props.titleDashboard }}
            </h2>
            <p class="max-w-2xl text-center text-xs font-normal text-custom-greyscale-500 md:text-start md:text-sm">
                {{ props.subTitle }}
            </p>
        </div>
        <div
            class="flex w-full items-center justify-center gap-5 md:relative md:-right-1 lg:static lg:-right-0 lg:flex-1 lg:justify-end">
            <svg width="20" height="20" class="w-[16px]" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
                    fill="black" />
            </svg>
            <svg width="20" height="20" class="w-[16px]" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M22 20H2V18H3V11.0314C3 6.04348 7.02944 2 12 2C16.9706 2 21 6.04348 21 11.0314V18H22V20ZM5 18H19V11.0314C19 7.14806 15.866 4 12 4C8.13401 4 5 7.14806 5 11.0314V18ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z"
                    fill="black" />
            </svg>
            <SheetLayout :titleButton="titleButton" :titleSheet="titleSheet" :custom-class="customClassSheet" :icon="icon">
                <slot></slot>
            </SheetLayout>
            <slot name="content"></slot>
        </div>
    </header>
</template>

<script setup>
import SheetLayout from '@/Layouts/SheetLayout.vue'
import { defineProps } from 'vue'

const props = defineProps({
    titleDashboard: {
        type: String,
    },

    subTitle: {
        type: String,
    },
    titleButton: {
        type: String,
    },
    titleSheet: {
        type: String,
    },
    icon: {
        type: String,
    },
    customClassSheet: {
        type: String,
    },
})
</script>

<style lang="scss" scoped></style>
