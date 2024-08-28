<template>
    <FormLayout>
        <form @submit="onSubmit"
            class="mt-6 flex h-auto w-full flex-col self-center rounded-2xl border border-solid border-[#DFE1E7] shadow-md drop-shadow-sm md:mt-0 lg:w-[450px]">
            <div class="flex flex-col items-center gap-4 p-6">
                <div class="flex w-full justify-center rounded-[8px] bg-custom-greyscale-50 p-[2px] shadow-none">
                    <div @click="changeSendingType('international')"
                        class="flex flex-1 cursor-pointer items-center justify-center py-1 text-center text-sm font-medium md:px-[3px]"
                        :class="{
                            'rounded-[4px] bg-custom-greyscale-25 text-custom-greyscale-800 shadow-sm':
                                sendingType === 'international',
                            'text-custom-greyscale-500':
                                sendingType !== 'international',
                        }">
                        International
                    </div>
                    <div @click="changeSendingType('local')"
                        class="flex flex-1 cursor-pointer items-center justify-center py-1 text-center text-sm font-medium md:px-[3px]"
                        :class="{
                            'rounded-[4px] bg-custom-greyscale-25 text-custom-greyscale-800 shadow-sm':
                                sendingType === 'local',
                            'text-custom-greyscale-500':
                                sendingType !== 'local',
                        }">
                        Same Currency
                    </div>
                </div>

                <div id="international" :class="`${visible.international} flex-col gap-4`">
                    <div class="flex items-center justify-between">
                        <FormField v-slot="{ componentField }" name="email">
                            <FormItem>
                                <FormLabel>You send exactly</FormLabel>
                                <FormControl>
                                    <div class="flex gap-2">
                                        <Input type="Number" placeholder="0.00" v-bind="componentField"
                                            class="flex-1 pl-2 lg:w-[210px]" />
                                        <Select v-model="data1.currency_code">
                                            <SelectTrigger inForm="true" class="w-[170px] rounded-[8px] border">
                                                <SelectValue :placeholder="data1.currency_code
                                                        ? data1.currency_code
                                                        : placeholder
                                                    " defaultFlag="true" showFlag="true" :flag="data1.flag
                                                            ? data1.flag
                                                            : data1.flag.default
                                                        " class="text-sm" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel class="text-sm">Countries</SelectLabel>
                                                    <SelectItem v-for="c in data1.country" :value="c.currency_code"
                                                        inForm="true" :flag="c.flag_icon">
                                                        <li class="list-none" :key="c.id">
                                                            {{
                                                                c.currency_code
                                                            }}
                                                        </li>
                                                    </SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </FormField>
                    </div>
                    <div class="flex flex-col gap-2">
                        <div class="flex w-full items-center justify-between">
                            <div class="flex w-[150px] items-center lg:gap-2">
                                <p class="w-auto text-xs font-medium underline lg:text-sm">
                                    Connected bank account (ACH) fee
                                </p>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"
                                        fill="black" />
                                </svg>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="text-sm font-medium lg:text-base">2 USD</span>
                                <div class="h-8 w-8"></div>
                            </div>
                        </div>
                        <div class="flex w-full items-center justify-between">
                            <p class="text-xs font-medium text-custom-greyscale-400 md:text-sm">
                                Our Fee
                            </p>

                            <div class="flex items-center gap-2">
                                <span class="text-sm font-medium lg:text-base">9.30 USD</span>
                                <div class="h-8 w-8"></div>
                            </div>
                        </div>
                        <div class="flex w-full items-center justify-between">
                            <p class="text-xs font-medium text-custom-greyscale-400 md:text-sm">
                                Total Fees
                            </p>
                            <div class="flex items-center gap-2">
                                <span class="text-sm font-medium lg:text-base">7.80 USD</span>
                                <div class="flex h-8 w-8 items-center">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 11H5V13H19V11Z" fill="black" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="h-[1px] w-full rounded-full bg-[#DFE1E7]"></div>
                        <div class="flex w-full items-center justify-between">
                            <p class="text-xs font-medium text-custom-greyscale-400 md:text-sm">
                                Total amount we’ll convert
                            </p>
                            <div class="flex items-center gap-2">
                                <span class="text-sm font-medium lg:text-base">692.70 USD</span>
                                <div class="flex h-8 w-8 items-center">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"
                                            fill="black" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="flex w-full items-center justify-between">
                            <p class="text-xs font-medium text-custom-greyscale-400 md:text-sm">
                                Our Fee
                            </p>
                            <div class="flex items-center gap-2">
                                <span class="text-sm font-medium lg:text-base">6.30 USD</span>
                                <div class="flex h-8 w-8 items-center">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 8H5V10H19V8ZM19 14H5V16H19V14Z" fill="black" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <FormField v-slot="{ componentField }" name="email">
                            <FormItem>
                                <FormLabel>Recipents gets</FormLabel>
                                <FormControl>
                                    <div class="flex gap-2">
                                        <Input type="Number" placeholder="0.00" v-bind="componentField"
                                            class="flex-1 pl-2 lg:w-[210px]" />
                                        <Select v-model="data2.currency_code">
                                            <SelectTrigger inForm="true" class="w-[170px] rounded-[8px] border">
                                                <SelectValue :placeholder="data2.currency_code
                                                        ? data2.currency_code
                                                        : placeholder
                                                    " defaultFlag="true" showFlag="true" :flag="data2.flag
                                                            ? data2.flag
                                                            : data2.flag.default
                                                        " class="text-sm" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel class="text-sm">Countries</SelectLabel>
                                                    <SelectItem v-for="c in data2.country" :value="c.currency_code"
                                                        inForm="true" :flag="c.flag_icon">
                                                        <li class="list-none" :key="c.id">
                                                            {{
                                                                c.currency_code
                                                            }}
                                                        </li>
                                                    </SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </FormField>
                    </div>
                    <div class="flex flex-col">
                        <div class="flex justify-between px-4 py-2 text-[#116B97]">
                            <p class="text-xs">
                                You could save up to
                                <span class="font-medium">6.72 USD</span>
                                vs average bank
                            </p>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path class="fill-[#116B97]"
                                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"
                                    fill="black" />
                            </svg>
                        </div>
                        <div class="] flex px-4 py-2">
                            <p class="text-xs lg:text-sm">
                                Should arrive in
                                <span class="font-medium">5</span>
                                days
                            </p>
                        </div>
                    </div>
                </div>

                <div id="local" :class="`${visible.local} flex-col gap-4`">
                    <div class="flex items-center justify-between">
                        <FormField v-slot="{ componentField }" name="Send">
                            <FormItem>
                                <FormLabel>You send exactly</FormLabel>
                                <FormControl>
                                    <div class="flex gap-2">
                                        <Input type="Number" placeholder="0.00" v-bind="componentField"
                                            class="flex-1 pl-2 lg:w-[210px]" />
                                        <Select v-model="data1.currency_code">
                                            <SelectTrigger inForm="true" class="w-[170px] rounded-[8px] border">
                                                <SelectValue :placeholder="data1.currency_code
                                                        ? data1.currency_code
                                                        : placeholder
                                                    " defaultFlag="true" showFlag="true" :flag="data1.flag
                                                            ? data1.flag
                                                            : data1.flag.default
                                                        " class="text-sm" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel class="text-sm">Countries</SelectLabel>
                                                    <SelectItem v-for="c in data1.country" :value="c.currency_code"
                                                        inForm="true" :flag="c.flag_icon">
                                                        <li class="list-none" :key="c.id">
                                                            {{
                                                                c.currency_code
                                                            }}
                                                        </li>
                                                    </SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </FormField>
                    </div>
                    <div class="flex flex-col gap-2">
                        <div class="flex w-full items-center justify-between">
                            <div class="flex w-[150px] items-center gap-2 lg:flex-1">
                                <p class="text-xs font-medium underline lg:text-sm">
                                    Connected bank account (ACH) fee
                                </p>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"
                                        fill="black" />
                                </svg>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="text-sm font-medium lg:text-base">2 USD</span>
                                <div class="h-8 w-8"></div>
                            </div>
                        </div>
                        <div class="flex w-full items-center justify-between">
                            <p class="text-sm font-medium text-custom-greyscale-400">
                                Our Fee
                            </p>

                            <div class="flex items-center gap-2">
                                <span class="text-sm font-medium lg:text-base">9.30 USD</span>
                                <div class="h-8 w-8"></div>
                            </div>
                        </div>
                        <div class="flex w-full items-center justify-between">
                            <p class="text-sm font-medium text-custom-greyscale-400">
                                Total Fees
                            </p>
                            <div class="flex items-center gap-2">
                                <span class="text-sm font-medium lg:text-base">7.80 USD</span>
                                <div class="flex h-8 w-8 items-center">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill="black" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="h-[1px] w-full rounded-full bg-[#DFE1E7]"></div>
                    <div class="flex gap-4">
                        <div class="h-12 w-12">
                            <img :src="avatars[4].avatar" class="w-full" alt="" />
                        </div>
                        <div class="flex w-full flex-col">
                            <span class="text-sm font-normal">You Send</span>
                            <span class="text-md font-medium">120,006.64 USD</span>
                        </div>
                    </div>
                    <p class="text-sm font-normal text-custom-greyscale-500">
                        Should arrive by
                        <span class="font-medium text-custom-greyscale-900">Friday</span>
                    </p>
                </div>
            </div>
            <div class="flex w-full flex-col border-t">
                <div v-show="sendingType == 'international'" class="flex w-full flex-col gap-4 p-6 md:flex-row">
                    <Button variant="Outline" size="lg" class="flex-1 rounded-[8px] border border-[#DFE1E7] py-2">
                        Compare
                    </Button>
                    <Button :variant="variant" size="lg" class="flex-1 py-2">
                        Submit
                    </Button>
                </div>

                <div v-show="sendingType == 'local'" class="flex w-full items-center gap-3 p-6">
                    <Button type="submit" :variant="variant" size="lg" class="flex-1">
                        Continue
                    </Button>
                    <div
                        class="flex h-10 w-10 items-center justify-center rounded-full border border-[#DFE1E7] px-2 py-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"
                                fill="black" />
                        </svg>
                    </div>
                </div>
            </div>
        </form>
    </FormLayout>
</template>

<script setup>
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { avatars } from '@/lib/data'
import { Button } from '@/components/ui/button'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormIcon,
    FormHeader,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

import { Countries } from '@/lib/countries.js'
import { onMounted, provide, ref, watch } from 'vue'
import FormLayout from '@/Layouts/FormLayout.vue'
import router from '@/router'

const data1 = ref({
    country: Countries,
    defaultCurrency: 'United States',
    currency_code: 'USD',
    flag: {
        type: String,
        default: Countries[24].flag_icon,
    },
})
const data2 = ref({
    country: Countries,
    defaultCurrency: 'United States',
    currency_code: 'KRW',
    flag: {
        type: String,
        default: Countries[18].flag_icon,
    },
})

watch(
    () => data1.value.currency_code,
    (newVal, oldVal) => {
        if (newVal !== oldVal) {
            const findFlag = Countries.find((c) => c.currency_code === newVal)
            if (findFlag) {
                data1.value.flag = findFlag.flag_icon
            }
        }
    }
)
watch(
    () => data2.value.currency_code,
    (newVal, oldVal) => {
        if (newVal !== oldVal) {
            const findFlag = Countries.find((c) => c.currency_code === newVal)
            if (findFlag) {
                data2.value.flag = findFlag.flag_icon
            }
        }
    }
)

const onSubmit = () => {
    router.push('/sending-money/personal-details')
}

provide('dflag', data1.value.flag)
provide('dflag2', data2.value.flag)

const sendingType = ref('international')
const international = ref()
const local = ref()
const visible = ref({
    international: 'flex',
    local: 'hidden',
})

onMounted(() => {
    international.value = document.getElementById('international')
    local.value = document.getElementById('local')
})
const changeSendingType = (value) => {
    sendingType.value = value
    if (sendingType.value === 'international') {
        visible.value.international = 'flex'
        visible.value.local = 'hidden'
    } else if (sendingType.value === 'local') {
        visible.value.international = 'hidden'
        visible.value.local = 'flex'
    }
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
    title: 'Amount',
    description: 'Enter the desired amount to proceed with your transaction.',
    Icon: 'M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM8.50488 14.0027V16.0027H11.0049V18.0027H13.0049V16.0027H14.0049C15.3856 16.0027 16.5049 14.8835 16.5049 13.5027C16.5049 12.122 15.3856 11.0027 14.0049 11.0027H10.0049C9.72874 11.0027 9.50488 10.7789 9.50488 10.5027C9.50488 10.2266 9.72874 10.0027 10.0049 10.0027H15.5049V8.00275H13.0049V6.00275H11.0049V8.00275H10.0049C8.62417 8.00275 7.50488 9.12203 7.50488 10.5027C7.50488 11.8835 8.62417 13.0027 10.0049 13.0027H14.0049C14.281 13.0027 14.5049 13.2266 14.5049 13.5027C14.5049 13.7789 14.281 14.0027 14.0049 14.0027H8.50488Z',
}

provide('progress', progress)
provide('headerProgress', headerProgress)
</script>

<style lang="scss" scoped></style>
