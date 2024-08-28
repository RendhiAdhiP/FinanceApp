<template>
    <section class="flex w-full flex-col gap-4">
        <div class="flex flex-wrap gap-8">
            <div class="w-64">
                <span class="text-sm font-medium">LOGO ID</span>
            </div>
            <div class="flex flex-col gap-3">
                <span class="text-sm font-medium">Y-12341234</span>
                <div class="flex gap-2">
                    <div
                        class="flex h-8 cursor-pointer items-center gap-2 rounded-[8px] border border-solid border-[#DFE1E7] px-4 py-[6px] md:py-2 lg:py-[6px]">
                        <svg width="24" height="24" class="w-[12px]" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"
                                fill="black" />
                        </svg>
                        <p class="text-xs font-medium text-custom-greyscale-900">
                            Copy ID
                        </p>
                    </div>
                    <div
                        class="flex h-8 cursor-pointer items-center gap-2 rounded-[8px] border border-solid border-[#DFE1E7] px-4 py-[6px] md:py-2 lg:py-[6px]">
                        <svg width="24" height="24" class="w-[12px]" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"
                                fill="black" />
                        </svg>
                        <p class="text-xs font-medium text-custom-greyscale-900">
                            Share ID
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-[1px] w-full bg-custom-greyscale-50"></div>

        <div class="flex flex-wrap gap-8">
            <div class="flex w-64 flex-col gap-1">
                <span class="text-sm font-medium">Profile Photo</span>
                <span class="text-xs font-normal text-custom-greyscale-400">
                    Min 400x400px, PNG or JPEG formats.
                </span>
            </div>
            <div class="flex items-center gap-3">
                <div class="h-12 w-12">
                    <img :src="avatars[14].avatar" alt="" />
                </div>
                <div
                    class="flex h-8 cursor-pointer items-center rounded-[8px] border border-solid border-[#DFE1E7] px-4 py-[6px] md:py-2 lg:py-[6px]">
                    <p class="text-xs font-medium text-custom-greyscale-900">
                        Change
                    </p>
                </div>
            </div>
        </div>
        <div class="h-[1px] w-full bg-custom-greyscale-50"></div>

        <div class="flex flex-wrap gap-8">
            <div class="flex w-64 flex-col gap-1">
                <span class="text-sm font-medium">Full Name</span>
                <span class="text-xs font-normal text-custom-greyscale-400">
                    The official full name for billings and contact requests.
                </span>
            </div>
            <div class="flex flex-col items-start gap-3">
                <span class="text-sm font-medium text-custom-greyscale-900">Charles</span>
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
                <span class="text-sm font-medium">Email Address</span>
                <span class="text-xs font-normal text-custom-greyscale-400">
                    The official email address for billings and contact
                    requests.
                </span>
            </div>
            <div class="flex flex-col items-start gap-3">
                <span class="text-sm font-medium text-custom-greyscale-900">John@mail.com</span>
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
                <span class="text-sm font-medium">Phone Number</span>
                <span class="text-xs font-normal text-custom-greyscale-400">
                    The official phone number for billing and contact requests.
                </span>
            </div>
            <div class="flex flex-col items-start gap-3">
                <span class="text-sm font-medium text-custom-greyscale-900">(301) 345-8532</span>
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
                <span class="text-sm font-medium">Address</span>
                <span class="text-xs font-normal text-custom-greyscale-400">
                    The official residential address for billing details and
                    shipments.
                </span>
            </div>
            <div class="flex flex-col items-start gap-3">
                <span class="text-sm font-medium text-custom-greyscale-900">612 Shadowmar Drive, New Orleans, LA
                    70115</span>
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
import { avatars } from '@/lib/data'
import Icon from '@/components/icon/Icon.vue'
</script>

<style lang="scss" scoped></style>
