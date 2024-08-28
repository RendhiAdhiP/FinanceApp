<template>
    <section class="flex w-full flex-col gap-4">
        <div class="flex flex-wrap gap-8">
            <div class="flex w-64 flex-col gap-1">
                <span class="text-sm font-medium">Currency</span>
                <span class="text-xs font-normal text-custom-greyscale-400">
                    Choose your timezone and preferred format.
                </span>
            </div>
            <div class="flex flex-col items-start gap-3">
                <span class="text-sm font-medium text-custom-greyscale-900">United States Dollar (USD)</span>
                <div class="flex gap-2">
                    <span class="text-xs font-medium text-custom-greyscale-900">Edit</span>
                    <Icon custom-class-icon="w-4 h-4"
                        -icon="M13.1715 12.0007L8.22168 7.05093L9.6359 5.63672L15.9999 12.0007L9.6359 18.3646L8.22168 16.9504L13.1715 12.0007Z" />
                </div>
            </div>
        </div>
        <div class="h-[1px] w-full bg-custom-greyscale-50"></div>

        <div class="flex flex-wrap gap-8">
            <div class="flex w-64 flex-col gap-1">
                <span class="text-sm font-medium">Timezone</span>
                <span class="text-xs font-normal text-custom-greyscale-400">
                    Choose your timezone and preferred format.
                </span>
            </div>
            <div class="flex flex-col items-start gap-3">
                <span class="text-sm font-medium text-custom-greyscale-900">GMT - 4:00, 12-hours format</span>
                <div class="flex gap-2">
                    <span class="text-xs font-medium text-custom-greyscale-900">Edit</span>
                    <Icon custom-class-icon="w-4 h-4"
                        -icon="M13.1715 12.0007L8.22168 7.05093L9.6359 5.63672L15.9999 12.0007L9.6359 18.3646L8.22168 16.9504L13.1715 12.0007Z" />
                </div>
            </div>
        </div>
        <div class="h-[1px] w-full bg-custom-greyscale-50"></div>

        <div class="flex flex-wrap gap-8">
            <div class="flex w-64 flex-col gap-1">
                <span class="text-sm font-medium">Date Format</span>
                <span class="text-xs font-normal text-custom-greyscale-400">
                    Update your company logo.
                </span>
            </div>
            <div class="flex flex-col items-start gap-3">
                <span class="text-sm font-medium text-custom-greyscale-900">DD/MM/YYYY</span>
                <div class="flex gap-2">
                    <span class="text-xs font-medium text-custom-greyscale-900">Edit</span>
                    <Icon custom-class-icon="w-4 h-4"
                        -icon="M13.1715 12.0007L8.22168 7.05093L9.6359 5.63672L15.9999 12.0007L9.6359 18.3646L8.22168 16.9504L13.1715 12.0007Z" />
                </div>
            </div>
        </div>
        <div class="h-[1px] w-full bg-custom-greyscale-50"></div>
    </section>
</template>

<script setup>
import Icon from '@/components/icon/Icon.vue'
</script>

<style lang="scss" scoped></style>
