<template>
    <FormLayout>
        <form @submit.prevent="onSubmit"
            class="mt-10 flex w-full flex-col items-center self-center overflow-x-hidden md:mt-0">
            <div class="flex w-full flex-wrap items-center gap-12 lg:items-start lg:justify-center">
                <div class="h-max w-full rounded-2xl border border-[#DFE1E7] shadow-md drop-shadow-sm md:w-[450px]">
                    <div class="flex w-full items-center justify-start gap-4 border-b py-6 pl-6 pr-0">
                        <div
                            class="`flex user__custom ` h-12 w-12 items-center rounded-[100%] p-2 md:h-[64px] md:w-[64px]">
                            <div
                                class="ml-[50%] mt-[50%] flex h-10 w-10 translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-[100%] bg-slate-100 px-2 py-4 drop-shadow-sm md:h-12 md:w-12">
                                <Icon
                                    Icon="M3.00488 4.00293H21.0049C21.5572 4.00293 22.0049 4.45064 22.0049 5.00293V19.0029C22.0049 19.5552 21.5572 20.0029 21.0049 20.0029H3.00488C2.4526 20.0029 2.00488 19.5552 2.00488 19.0029V5.00293C2.00488 4.45064 2.4526 4.00293 3.00488 4.00293ZM6.50037 6H4.00037V8.5C5.38108 8.5 6.50037 7.38071 6.50037 6ZM17.5004 6C17.5004 7.38071 18.6197 8.5 20.0004 8.5V6H17.5004ZM4.00037 15.5V18H6.50037C6.50037 16.6193 5.38108 15.5 4.00037 15.5ZM17.5004 18H20.0004V15.5C18.6197 15.5 17.5004 16.6193 17.5004 18ZM12.0004 16C14.2095 16 16.0004 14.2091 16.0004 12C16.0004 9.79086 14.2095 8 12.0004 8C9.79123 8 8.00037 9.79086 8.00037 12C8.00037 14.2091 9.79123 16 12.0004 16Z" />
                            </div>
                        </div>
                        <div class="">
                            <h3 class="text-lg font-medium md:text-xl">
                                How would you like to pay?
                            </h3>
                            <!-- <p class="text-sm font-normal text-custom-greyscale-500">Things left for you to do</p> -->
                        </div>
                    </div>
                    <div class="flex flex-col gap-4 p-6">
                        <FormField v-slot="{ value, handleChange }" type="checkbox" name="DebitCard">
                            <FormItem
                                :class="`{{ formValues.personal == true ? 'bg-custom-greyscale-700' : 'bg-custom-greyscale-100' }}`"
                                class="relative flex flex-row items-start gap-x-3 space-y-0 rounded-md border p-4">
                                <FormControl>
                                    <Checkbox :checked="value" @update:checked="handleChange"
                                        class="absolute right-3" />
                                </FormControl>
                                <div class="flex items-center gap-3">
                                    <div
                                        class="flex h-6 w-6 items-center justify-center rounded-full border border-solid border-custom-greyscale-100 md:h-12 md:w-12">
                                        <Icon width="20" height="20"
                                            Icon="M3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979ZM20.0049 10.9998H4.00488V18.9998H20.0049V10.9998ZM20.0049 8.99979V4.99979H4.00488V8.99979H20.0049ZM14.0049 14.9998H18.0049V16.9998H14.0049V14.9998Z" />
                                    </div>
                                    <div class="flex w-[320px] flex-col gap-1">
                                        <FormLabel class="text-base font-medium">Debit Card</FormLabel>
                                        <FormDescription class="text-xs">
                                            0 USD in total fees. Send from your
                                            Visa or Mastercard.
                                        </FormDescription>
                                        <FormMessage />
                                    </div>
                                </div>
                            </FormItem>
                        </FormField>
                        <FormField v-slot="{ value, handleChange }" type="checkbox" name="CreditCard">
                            <FormItem
                                class="relative flex flex-row items-start gap-x-3 space-y-0 rounded-md border p-4">
                                <FormControl>
                                    <Checkbox :checked="value" @update:checked="handleChange"
                                        class="absolute right-3" />
                                </FormControl>
                                <div class="flex items-center gap-3">
                                    <div
                                        class="flex h-6 w-6 items-center justify-center rounded-full border border-solid md:h-12 md:w-12">
                                        <Icon width="20" height="20"
                                            Icon="M3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979ZM20.0049 10.9998H4.00488V18.9998H20.0049V10.9998ZM20.0049 8.99979V4.99979H4.00488V8.99979H20.0049ZM14.0049 14.9998H18.0049V16.9998H14.0049V14.9998Z" />
                                    </div>
                                    <div class="flex w-[320px] flex-col gap-1">
                                        <FormLabel class="text-base font-medium">Credit Card</FormLabel>
                                        <FormDescription class="text-xs">
                                            0 USD in total fees. Send from your
                                            Visa or Mastercard. Your bank may
                                            charge you extra fee.
                                        </FormDescription>
                                        <FormMessage />
                                    </div>
                                </div>
                            </FormItem>
                        </FormField>
                    </div>
                </div>

                <div class="h-max w-full rounded-2xl border border-[#DFE1E7] shadow-md drop-shadow-sm md:w-[450px]">
                    <div class="flex w-full items-center justify-start gap-4 border-b py-6 pl-6 pr-0">
                        <div class="`flex user__custom ` h-12 w-12 items-center rounded-[100%] md:h-[64px] md:w-[64px]">
                            <div
                                class="ml-[50%] mt-[50%] flex h-10 w-10 translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-[100%] bg-slate-100 px-2 py-4 drop-shadow-sm md:h-12 md:w-12">
                                <Icon
                                    Icon="M22.0049 9.99979V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V9.99979H22.0049ZM22.0049 7.99979H2.00488V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V7.99979ZM15.0049 15.9998V17.9998H19.0049V15.9998H15.0049Z" />
                            </div>
                        </div>
                        <div class="">
                            <h3 class="text-lg font-medium md:text-xl">
                                Your card order
                            </h3>
                            <!-- <p class="text-sm font-normal text-custom-greyscale-500">Things left for you to do</p> -->
                        </div>
                    </div>
                    <h6 class="px-5 py-2 text-base font-medium text-custom-greyscale-500">
                        CARD
                    </h6>

                    <div class="flex flex-col justify-center gap-4 p-6">
                        <div :class="[
                            'w-[270px] self-center rounded-[16px] border bg-custom-greyscale-700 sm:min-w-[320px] sm:max-w-[350px]',
                        ]">
                            <div class="flex w-full justify-between">
                                <svg width="21" height="23" class="ml-5 mt-5" viewBox="0 0 21 23" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_470_4826)">
                                        <path
                                            d="M14.9333 1C16.8687 4.1924 18.1333 8.31373 18.1333 12C18.1333 15.6863 16.8687 18.8076 14.9333 22M10.6666 3C12.1762 5.49007 12.8 9.12471 12.8 12C12.8 14.8753 12.1762 17.5099 10.6666 20M5.33332 5C6.42485 6.81967 7.46665 8.89883 7.46665 11C7.46665 13.1012 6.42485 15.1803 5.33332 17M1.06665 8C1.85331 9.13384 2.13332 10.6635 2.13332 12C2.13332 13.3365 1.85331 13.8662 1.06665 15"
                                            stroke="#666D80" stroke-width="2.44123" stroke-linecap="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_470_4826">
                                            <rect width="20.2667" height="23" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <img src="../../../../assets/Icon/art2.png" class="relative h-20 sm:h-32" alt="" />
                            </div>
                            <div :class="['p-4 text-custom-greyscale-0']">
                                <div class="flex w-full gap-20">
                                    <span class="text-sm font-medium">Yamamoto Yuki</span>
                                    <span class="text-xs font-normal">09/30</span>
                                </div>
                                <div class="relative flex">
                                    <div class="flex gap-1">
                                        <span v-for="(
                                                number, i
                                            ) in formattedIdCardNumber(
                                                    32454435324235
                                                )" :key="i" class="text-base font-medium">
                                            {{
                                                i < formattedIdCardNumber(32454435324235).length - 4 ? '•' : number }}
                                                </span>
                                    </div>
                                    <div class="absolute bottom-2 right-2 flex sm:right-10">
                                        <div class="h-[17px] w-[17px] rounded-full bg-[#ED0006]/90"></div>
                                        <div class="relative -ml-2 h-[17px] w-[17px] rounded-full bg-[#F9A000]/80">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex w-full items-center py-2">
                            <div class="flex w-full flex-1 items-center gap-3">
                                <div
                                    class="flex h-10 w-10 items-center justify-center rounded-[100%] bg-slate-100 px-2 py-4 drop-shadow-sm md:h-12 md:w-12">
                                    <Icon
                                        Icon="M3.00488 4.00293H21.0049C21.5572 4.00293 22.0049 4.45064 22.0049 5.00293V19.0029C22.0049 19.5552 21.5572 20.0029 21.0049 20.0029H3.00488C2.4526 20.0029 2.00488 19.5552 2.00488 19.0029V5.00293C2.00488 4.45064 2.4526 4.00293 3.00488 4.00293ZM6.50037 6H4.00037V8.5C5.38108 8.5 6.50037 7.38071 6.50037 6ZM17.5004 6C17.5004 7.38071 18.6197 8.5 20.0004 8.5V6H17.5004ZM4.00037 15.5V18H6.50037C6.50037 16.6193 5.38108 15.5 4.00037 15.5ZM17.5004 18H20.0004V15.5C18.6197 15.5 17.5004 16.6193 17.5004 18ZM12.0004 16C14.2095 16 16.0004 14.2091 16.0004 12C16.0004 9.79086 14.2095 8 12.0004 8C9.79123 8 8.00037 9.79086 8.00037 12C8.00037 14.2091 9.79123 16 12.0004 16Z" />
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-base font-medium">Card Free</span>
                                    <span class="text-xs font-normal text-custom-greyscale-500">Physical card</span>
                                </div>
                            </div>
                            <span class="text-base font-medium">9 USD</span>
                        </div>

                        <div class="flex w-full items-center py-2">
                            <div class="flex w-full flex-1 items-center gap-3">
                                <div
                                    class="flex h-10 w-10 items-center justify-center rounded-[100%] bg-slate-100 px-2 py-4 drop-shadow-sm md:h-12 md:w-12">
                                    <img :src="Countries[24].flag_icon" alt="" />
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-base font-medium">Add Money</span>
                                    <span class="text-xs font-normal text-custom-greyscale-500">Top your USD
                                        Balance</span>
                                </div>
                            </div>
                            <span class="text-base font-medium">0 USD</span>
                        </div>

                        <div
                            class="custom-scrollbar flex w-full items-center gap-4 overflow-x-scroll py-[2px] pr-[2px]">
                            <div
                                class="min-w-[93px] rounded-full border border-custom-greyscale-200 px-3 py-1 text-center text-custom-greyscale-400">
                                10 USD
                            </div>
                            <div
                                class="min-w-[93px] rounded-full border border-custom-greyscale-200 px-3 py-1 text-center text-custom-greyscale-400">
                                50 USD
                            </div>
                            <div
                                class="min-w-[93px] rounded-full border border-custom-greyscale-200 px-3 py-1 text-center text-custom-greyscale-400">
                                100 USD
                            </div>
                            <div
                                class="min-w-[93px] rounded-full border border-custom-greyscale-200 px-3 py-1 text-center text-custom-greyscale-400">
                                200 USD
                            </div>
                            <div
                                class="min-w-[93px] rounded-full border border-custom-greyscale-200 px-3 py-1 text-center text-custom-greyscale-400">
                                300 USD
                            </div>
                            <div
                                class="min-w-[93px] rounded-full border border-custom-greyscale-200 px-3 py-1 text-center text-custom-greyscale-400">
                                Custom
                            </div>
                        </div>
                    </div>
                    <h6 class="px-5 py-2 text-base font-medium text-custom-greyscale-500">
                        PRICE BREAKDOWN
                    </h6>

                    <div class="flex flex-col gap-4 p-6">
                        <div class="flex">
                            <span class="flex-1 text-base font-medium text-custom-greyscale-500">Card Production</span>
                            <span class="text-base font-medium text-custom-greyscale-700">9 USD</span>
                        </div>
                        <div class="flex">
                            <span class="flex-1 text-base font-medium text-custom-greyscale-700">You Pay</span>
                            <span class="text-base font-medium text-custom-greyscale-700">9 USD</span>
                        </div>
                        <Button variant="outline">Pay with a diffrent currency</Button>
                    </div>
                    <div class="w-full border-t p-6">
                        <Button type="submit" class="w-full">Confirm and Pay</Button>
                    </div>
                </div>
            </div>
        </form>
    </FormLayout>
</template>

<script setup>
import Icon from '@/components/icon/Icon.vue'
import FormLayout from '@/Layouts/FormLayout.vue'
import { provide, ref } from 'vue'
import { Button } from '@/components/ui/button'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormHeader,
} from '@/components/ui/form'
import Checkbox from '@/components/ui/checkbox/Checkbox.vue'
import { useForm } from 'vee-validate'
import * as z from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import Input from '@/components/ui/input/Input.vue'
import { Countries } from '@/lib/countries'
import { RouterLink } from 'vue-router'
import router from '@/router'

const data = ref({
    fullName: '',
    date: '',
    country: null,
    address: '',
    city: '',
    states: '',
    state: '',
    ZIPCode: '',
})

const progress = {
    title: 'GETTING YOUR CARD',
    step1: 'Card',
    step2: 'Addresss',
    step3: 'Payment',
    step4: 'Verification',
    step5: 'Success',
}

const headerProgress = {
    title: 'Payment',
    description: 'Choose your payment and customize your order',
    Icon: 'M3.00488 4.00293H21.0049C21.5572 4.00293 22.0049 4.45064 22.0049 5.00293V19.0029C22.0049 19.5552 21.5572 20.0029 21.0049 20.0029H3.00488C2.4526 20.0029 2.00488 19.5552 2.00488 19.0029V5.00293C2.00488 4.45064 2.4526 4.00293 3.00488 4.00293ZM6.50037 6H4.00037V8.5C5.38108 8.5 6.50037 7.38071 6.50037 6ZM17.5004 6C17.5004 7.38071 18.6197 8.5 20.0004 8.5V6H17.5004ZM4.00037 15.5V18H6.50037C6.50037 16.6193 5.38108 15.5 4.00037 15.5ZM17.5004 18H20.0004V15.5C18.6197 15.5 17.5004 16.6193 17.5004 18ZM12.0004 16C14.2095 16 16.0004 14.2091 16.0004 12C16.0004 9.79086 14.2095 8 12.0004 8C9.79123 8 8.00037 9.79086 8.00037 12C8.00037 14.2091 9.79123 16 12.0004 16Z',
}

provide('progress', progress)
provide('headerProgress', headerProgress)

const formSchema = toTypedSchema(
    z.object({
        personal: z.boolean().default(false).optional(),
        bussines: z.boolean().default(false).optional(),
        other: z.boolean().default(false).optional(),
    })
)

const { handleSubmit } = useForm({
    validationSchema: formSchema,
    initialValues: {
        personal: false,
        bussines: false,
        other: false,
    },
})

const formattedIdCardNumber = (idCardNumber) => {
    return idCardNumber.toString().split('')
}

const onSubmit = () => {
    console.log(data.value)
    router.push('/cards/add-card/payment')
}
</script>

<style lang="scss" scoped></style>
