<template>
    <FormLayout>
        <form @submit.prevent="onSubmit" id="form-details"
            class="mt-5 flex h-auto w-full flex-col items-center self-center rounded-2xl border border-solid border-[#DFE1E7] shadow-md drop-shadow-sm md:mt-0 md:w-[450px]">
            <div class="flex w-full items-center justify-start gap-4 border-b py-6 pl-6">
                <div
                    class="`flex user__custom ` h-12 w-12 items-center justify-center rounded-[100%] md:h-[64px] md:w-[64px]">
                    <img :src="avatars[0].avatar" alt="" />
                </div>
                <div class="">
                    <h1 class="text-base font-medium md:text-xl">
                        Send to John Doe
                    </h1>
                </div>
            </div>
            <div class="flex flex-col gap-4 p-6">
                <div class="flex w-full justify-between text-base font-medium">
                    <div class="text-text-md font-medium text-custom-greyscale-400 md:text-base">
                        RECIPENT DETAILS
                    </div>
                    <RouterLink class="text-sm underline" to="#">Edit</RouterLink>
                </div>
                <div class="flex w-full flex-col gap-3">
                    <div class="flex justify-between text-base">
                        <div class="text-xs text-custom-greyscale-400 md:text-sm">
                            You send exactly
                        </div>
                        <div class="text-xs font-medium text-custom-alertsuccess-100 md:text-sm">
                            1 USD
                        </div>
                    </div>
                    <div class="flex justify-between text-base">
                        <div class="text-xs text-custom-greyscale-400 md:text-sm">
                            Total fees (included)
                        </div>
                        <div class="text-xs font-medium text-custom-greyscale-900 md:text-sm">
                            0.68 USD
                        </div>
                    </div>
                    <div class="flex justify-between text-base">
                        <div class="text-xs text-custom-greyscale-400 md:text-sm">
                            Total amount we’ll convert
                        </div>
                        <div class="text-xs font-medium text-custom-greyscale-900 md:text-sm">
                            0.10 USD
                        </div>
                    </div>
                    <div class="flex justify-between text-base">
                        <div class="text-xs font-medium text-custom-greyscale-900 underline md:text-sm">
                            Guarantedd rate (7 hours)
                        </div>
                        <div class="text-xs font-medium text-custom-greyscale-900 md:text-sm">
                            7 USD
                        </div>
                    </div>
                    <div class="flex justify-between text-base">
                        <div class="text-xs text-custom-greyscale-400 md:text-sm">
                            Recipent Gets
                        </div>
                        <div class="text-xs font-medium text-custom-alertsuccess-100 md:text-sm">
                            0.30 USD
                        </div>
                    </div>
                </div>
                <div class="flex w-full justify-between text-base font-medium">
                    <div class="text-sm font-medium text-custom-greyscale-400 md:text-base">
                        RECIPENT DETAILS
                    </div>
                    <RouterLink class="text-sm underline" to="#">Change</RouterLink>
                </div>
                <div class="flex w-full flex-col gap-3">
                    <div class="flex justify-between">
                        <div class="text-xs text-custom-greyscale-400 md:text-base">
                            Name
                        </div>
                        <div class="text-xs text-custom-greyscale-900 md:text-base">
                            John Doe
                        </div>
                    </div>
                    <div class="flex justify-between text-base">
                        <div class="text-xs text-custom-greyscale-400 md:text-base">
                            Email
                        </div>
                        <div class="text-xs text-custom-greyscale-900 md:text-base">
                            Johndoe@gmail.com
                        </div>
                    </div>
                    <div class="flex justify-between text-base">
                        <div class="text-xs text-custom-greyscale-400 md:text-base">
                            Bank Name
                        </div>
                        <div class="text-xs text-custom-greyscale-900 md:text-base">
                            ABC Bank
                        </div>
                    </div>
                    <div class="flex justify-between text-base">
                        <div class="text-xs text-custom-greyscale-400 md:text-base">
                            Account Number
                        </div>
                        <div class="text-xs text-custom-greyscale-900 md:text-base">
                            3682628
                        </div>
                    </div>
                </div>
                <div class="flex w-full justify-between text-base font-medium">
                    <div class="text-sm text-custom-greyscale-400 md:text-base">
                        REFERENCE TO RECIPENTS (OPTIONAL)
                    </div>
                    <RouterLink class="text-sm underline" to="#">Add</RouterLink>
                </div>
                <div class="flex flex-col gap-4">
                    <p class="text-xs font-normal text-custom-greyscale-400 md:text-sm ">
                        You can cancel your purchase within 30 minutes of
                        payment for a full refund. Your satisfaction is our
                        priority, and we aim to make the process hassle-free.
                        Just let us know within the timeframe, and we'll handle
                        the rest.
                    </p>
                    <div class="jus flex items-center gap-3">
                        <Checkbox id="terms1" class="h-4 w-4 border-custom-greyscale-100" />
                        <div class="grid gap-1.5 leading-none">
                            <label for="terms1"
                                class="text-xs font-normal leading-none text-[#616161] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 md:text-sm">
                                I accept the
                                <span class="font-semibold text-custom-greyscale-900 underline">Terms of Use</span>
                                and
                                <span class="font-semibold text-custom-greyscale-900 underline">Privacy Policy</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full border-t p-6">
                <Button type="submit" class="w-full" :variant="variant" size="lg">
                    Submit
                </Button>
            </div>
        </form>
    </FormLayout>
</template>

<script setup>
import Button from '@/components/ui/button/Button.vue'
import Checkbox from '@/components/ui/checkbox/Checkbox.vue'
import FormHeader from '@/components/ui/form/FormHeader.vue'
import FormLayout from '@/Layouts/FormLayout.vue'
import { avatars } from '@/lib/data'
import router from '@/router'
import { provide } from 'vue'

const onSubmit = () => {
    console.log('submit')
    router.push('/sending-money/success')
}

const progress = {
    title: 'SENDING MONEY PROCESS',
    step1: 'Amount',
    step2: 'Personal Details',
    step3: 'Recipient',
    step4: 'Review and Pay',
    step5: 'Success',
}

const headerProgress = {
    title: 'Recipient',
    description: 'Choose your recipient you want for',
    Icon: 'M14 14.252V22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM18 17V13.5L23 18L18 22.5V19H15V17H18Z',
}

provide('progress', progress)
provide('headerProgress', headerProgress)
</script>

<style lang="scss" scoped></style>
