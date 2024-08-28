<template>
    <div v-for="recepient in data" :key="recepient?.id" class="flex items-center gap-4">
        <div class="flex w-full items-center gap-4">
            <div class="">
                <div class="user__custom relative flex items-center justify-center rounded-full p-2">
                    <div class="h-10 w-10">
                        <img :src="recepient?.avatar" class="w-full" alt="" />
                    </div>
                    <div class="absolute -bottom-0 -right-1 h-6 w-6 rounded-full border border-[#DFE1E7] bg-white p-1">
                        <img :src="recepient?.country" class="w-full" alt="" />
                    </div>
                </div>
            </div>
            <div class="flex w-full flex-col">
                <span class="text-base font-medium">{{ recepient?.recepient }}</span>
                <span class="text-xs font-normal text-custom-greyscale-500">
                    {{ recepient?.description }}</span>
            </div>
        </div>
        <div class="flex h-10 w-10 items-center justify-center">
            <div class="flex h-5 w-5 items-center">
                <Icon
                    -icon="M13.1715 12.0007L8.22168 7.05093L9.6359 5.63672L15.9999 12.0007L9.6359 18.3646L8.22168 16.9504L13.1715 12.0007Z" />
            </div>
        </div>
    </div>
</template>

<script setup>
import Icon from '@/components/icon/Icon.vue'
import { defineProps } from 'vue';

const props = defineProps({
    data:Array
})

</script>

<style lang="scss" scoped></style>
