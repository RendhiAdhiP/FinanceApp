<template>
    <FormLayout>
        <form @submit.prevent="onSubmit"
            class="mt-10 flex h-auto w-full flex-col items-center gap-4 self-center rounded-2xl border border-solid border-[#DFE1E7] shadow-md drop-shadow-sm sm:w-[390px] md:mt-0 md:w-[450px] md:gap-6">
            <div class="flex w-full items-start justify-start gap-4 border-b py-6 pl-6 pr-3 md:pr-0">
                <div class="`flex user__custom ` h-12 w-12 items-center rounded-[100%] md:h-[64px] md:w-[64px]">
                    <div
                        class="ml-[50%] mt-[50%] flex h-10 w-10 translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-[100%] bg-slate-100 px-1 drop-shadow-sm md:h-12 md:w-12 md:px-2 md:py-4">
                        <Icon
                            Icon="M22.0049 9.99979V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V9.99979H22.0049ZM22.0049 7.99979H2.00488V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V7.99979ZM15.0049 15.9998V17.9998H19.0049V15.9998H15.0049Z" />
                    </div>
                </div>
                <div class="">
                    <h1 class="text-base font-medium md:text-xl">
                        Get Your Card
                    </h1>
                    <p class="text-xs font-normal text-custom-greyscale-500 md:text-sm">
                        Things left for you to do
                    </p>
                </div>
            </div>
            <div class="relative flex w-full flex-col justify-start">
                <div class="-mt-4 flex w-full items-center justify-start gap-4 py-6 pl-6 pr-3 md:pr-0">
                    <div
                        class="`flex user__custom ` relative h-12 w-12 items-center rounded-[100%] p-2 md:h-[64px] md:w-[64px]">
                        <div
                            class="ml-[50%] mt-[50%] flex h-10 w-10 translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-[100%] bg-slate-100 px-1 drop-shadow-sm md:h-12 md:w-12 md:px-2 md:py-4">
                            <Icon
                                Icon="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z" />
                        </div>
                    </div>
                    <div class="">
                        <h3 class="text-sm font-medium md:text-base">
                            Enter your card delivery address
                        </h3>
                    </div>
                </div>
                <div class="-mt-4 flex w-full items-center justify-start gap-4 py-6 pl-6 pr-3 md:pr-0">
                    <div
                        class="`flex user__custom ` relative h-12 w-12 items-center rounded-[100%] p-2 md:h-[64px] md:w-[64px]">
                        <div
                            class="absolute left-[50%] h-6 w-[1px] translate-x-[-50%] translate-y-[-135%] bg-[#D9D9D9]">
                        </div>
                        <div
                            class="ml-[50%] mt-[50%] flex h-10 w-10 translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-[100%] bg-slate-100 px-1 drop-shadow-sm md:h-12 md:w-12 md:px-2 md:py-4">
                            <Icon
                                Icon="M3.00488 4.00293H21.0049C21.5572 4.00293 22.0049 4.45064 22.0049 5.00293V19.0029C22.0049 19.5552 21.5572 20.0029 21.0049 20.0029H3.00488C2.4526 20.0029 2.00488 19.5552 2.00488 19.0029V5.00293C2.00488 4.45064 2.4526 4.00293 3.00488 4.00293ZM6.50037 6H4.00037V8.5C5.38108 8.5 6.50037 7.38071 6.50037 6ZM17.5004 6C17.5004 7.38071 18.6197 8.5 20.0004 8.5V6H17.5004ZM4.00037 15.5V18H6.50037C6.50037 16.6193 5.38108 15.5 4.00037 15.5ZM17.5004 18H20.0004V15.5C18.6197 15.5 17.5004 16.6193 17.5004 18ZM12.0004 16C14.2095 16 16.0004 14.2091 16.0004 12C16.0004 9.79086 14.2095 8 12.0004 8C9.79123 8 8.00037 9.79086 8.00037 12C8.00037 14.2091 9.79123 16 12.0004 16Z" />
                        </div>
                    </div>
                    <div class="">
                        <h3 class="text-sm font-medium md:text-base">
                            Pay for your card
                        </h3>
                    </div>
                </div>

                <div class="-mt-4 flex w-full items-center justify-start gap-4 py-6 pl-6 pr-3 md:pr-0">
                    <div
                        class="` user__custom ` relative h-12 w-12 items-center rounded-[100%] p-2 md:h-[64px] md:w-[64px]">
                        <div
                            class="absolute left-[50%] h-6 w-[1px] translate-x-[-50%] translate-y-[-135%] bg-[#D9D9D9]">
                        </div>
                        <div
                            class="ml-[50%] mt-[50%] flex h-10 w-10 translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-[100%] bg-slate-100 px-1 drop-shadow-sm md:h-12 md:w-12 md:px-2 md:py-4">
                            <Icon
                                Icon="M11.0049 2L18.3032 4.28071C18.7206 4.41117 19.0049 4.79781 19.0049 5.23519V7H21.0049C21.5572 7 22.0049 7.44772 22.0049 8V10H9.00488V8C9.00488 7.44772 9.4526 7 10.0049 7H17.0049V5.97L11.0049 4.094L5.00488 5.97V13.3744C5.00488 14.6193 5.58406 15.7884 6.56329 16.5428L6.75154 16.6793L11.0049 19.579L14.7869 17H10.0049C9.4526 17 9.00488 16.5523 9.00488 16V12H22.0049V16C22.0049 16.5523 21.5572 17 21.0049 17L17.7848 17.0011C17.3982 17.5108 16.9276 17.9618 16.3849 18.3318L11.0049 22L5.62486 18.3318C3.98563 17.2141 3.00488 15.3584 3.00488 13.3744V5.23519C3.00488 4.79781 3.28913 4.41117 3.70661 4.28071L11.0049 2Z" />
                        </div>
                    </div>
                    <div class="">
                        <h3 class="text-sm font-medium md:text-base">
                            Verify your identity
                        </h3>
                        <p class="text-xs font-normal text-custom-greyscale-500 md:text-sm">
                            You still need upload some documents
                        </p>
                    </div>
                </div>
            </div>
            <div class="w-full border-t p-6">
                <RouterLink to="/cards/add-card/address">
                    <Button class="w-full">Continue</Button>
                </RouterLink>
            </div>
        </form>
    </FormLayout>
</template>

<script setup>
import Icon from '@/components/icon/Icon.vue'
import Button from '@/components/ui/button/Button.vue'
import FormLayout from '@/Layouts/FormLayout.vue'
import { provide } from 'vue'
import { RouterLink } from 'vue-router'

const progress = {
    title: 'GETTING YOUR CARD',
    step1: 'Card',
    step2: 'Addresss',
    step3: 'Payment',
    step4: 'Verification',
    step5: 'Success',
}

const headerProgress = {
    title: 'Card',
    description: 'Things left for you to do',
    Icon: 'M22.0049 9.99979V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V9.99979H22.0049ZM22.0049 7.99979H2.00488V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V7.99979ZM15.0049 15.9998V17.9998H19.0049V15.9998H15.0049Z',
}

provide('progress', progress)
provide('headerProgress', headerProgress)
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
