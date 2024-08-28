<template>
    <div class="flex flex-col gap-4 rounded-[16px] border border-[#DFE1E7] p-4" 
        v-for="app in props.data" :key="app.id">
        <div class="flex flex-col gap-4">
            <div class="flex w-full items-start justify-between gap-4">
                <div class="`flex user__custom ` h-12 w-12 items-center rounded-[100%] p-2 md:h-[52px] md:w-[52px]">
                    <div
                        class="ml-[50%] mt-[50%] flex h-10 w-10 translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-[100%] border border-[#DFE1E7] bg-slate-100 px-1 drop-shadow-sm md:px-2 md:py-4">
                        <img :src="app.app_icon" alt="" />
                    </div>
                </div>
                <div class="user__custom flex items-center rounded-full p-2">
                    <div class="flex h-4 w-4 items-center justify-center">
                        <Icon
                            Icon="M10 3V5H5V19H19V14H21V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H10ZM17.5858 5H13V3H21V11H19V6.41421L12 13.4142L10.5858 12L17.5858 5Z" />
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-1">
                <h5 class="text-base font-medium md:text-lg">{{ app.name }}</h5>
                <p class="text-xs font-normal text-custom-greyscale-500 md:text-sm">
                    {{ app.description }}
                </p>
            </div>
        </div>
        <div class="flex items-center justify-between">
            <div
                class="flex cursor-pointer items-center gap-2 rounded-[8px] border border-solid border-[#DFE1E7] px-4 py-[6px] md:py-2 lg:py-[6px]">
                <svg width="24" height="24" class="w-[16px]" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 16V12L21 17L16 22V18H4V16H16ZM8 2V5.999L20 6V8H8V12L3 7L8 2Z" fill="black" />
                </svg>
                <p class="text-xs font-medium text-custom-greyscale-900 md:text-sm">
                    Connect
                </p>
            </div>
            <Switch v-if="app.toggle_checked == 'checked'" id="airplane-mode" default-checked=true />
            <Switch v-if="app.toggle_checked == 'unchecked'" id="airplane-mode" />
        </div>
    </div>
</template>

<script setup>
import { Apps } from '@/lib/data'
import { Switch } from '@/components/ui/switch'
import Icon from '@/components/icon/Icon.vue'

const props = defineProps({
    data: Array,
})
</script>

<style lang="scss" scoped></style>
