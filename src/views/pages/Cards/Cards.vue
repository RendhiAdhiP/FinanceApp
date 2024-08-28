<template>
    <div v-for="card in dataCards" :key="card.id"
        class="flex h-auto w-full flex-1 flex-col gap-4 rounded-[16px] border border-[#DFE1E7] p-4 md:min-w-[350px] md:max-w-[355px]">
        <div class="flex justify-between">
            <div class="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979ZM20.0049 10.9998H4.00488V18.9998H20.0049V10.9998ZM20.0049 8.99979V4.99979H4.00488V8.99979H20.0049ZM14.0049 14.9998H18.0049V16.9998H14.0049V14.9998Z"
                        fill="black" />
                </svg>
                <h4 class="text-xs font-medium md:text-sm">
                    {{ card.type }}
                </h4>
            </div>
            <div class="flex-3 flex items-center gap-2 rounded-[8px] border border-[#DFE1E7] px-4 py-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill="black" />
                </svg>

                <p class="text-xs font-medium">More Options</p>
            </div>
        </div>

        <div :class="[
            'rounded-[16px] border',
            {
                'bg-custom-greyscale-0': card.type == 'Virtual Card',
                'bg-custom-greyscale-700': card.type == 'Physical Card',
            },
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
                <img v-if="card.type == 'Virtual Card'" src="../../../assets/Icon/art.png" class="relative h-24 md:h-32"
                    alt="" />
                <img v-else src="../../../assets/Icon/art2.png" class="relative h-24 md:h-32" alt="" />
            </div>
            <div :class="[
                'p-4',
                {
                    'text-custom-greyscale-900':
                        card.type == 'Virtual Card',
                    'text-custom-greyscale-0': card.type == 'Physical Card',
                },
            ]">
                <div class="flex w-full gap-20">
                    <span class="text-xs font-medium md:text-sm">{{
                        card.name
                        }}</span>
                    <span class="text-xs font-normal">{{ card.exp }}</span>
                </div>
                <div class="relative flex">
                    <div class="flex gap-1">
                        <span v-for="(number, i) in formattedIdCardNumber(
                            card.idCardNumber
                        )" :key="i" class="text-base font-medium">
                            {{
                                i < formattedIdCardNumber(card.idCardNumber).length - 4 ? '•' : number }} </span>
                    </div>
                    <div class="absolute bottom-2 right-10 flex">
                        <div class="h-[17px] w-[17px] rounded-full bg-[#ED0006]/90"></div>
                        <div class="relative -ml-2 h-[17px] w-[17px] rounded-full bg-[#F9A000]/80"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex w-full flex-col gap-2">
            <div class="flex items-center justify-between">
                <span class="text-xs font-normal text-custom-greyscale-500 md:text-sm">Status</span>
                <span class="text-xs font-medium text-custom-alertsuccess-200 md:text-sm">{{ card.status }}</span>
            </div>
            <div class="flex items-center justify-between">
                <span class="text-xs font-normal text-custom-greyscale-500 md:text-sm">Card Number</span>
                <div class="flex items-center gap-2">
                    <span v-for="(number, i) in formattedIdCardNumber(
                        card.number
                    )" :key="i" class="text-base font-medium text-custom-greyscale-700">
                        {{
                            i < formattedIdCardNumber(card.number).length - 4 ? '•' : number }} </span>
                </div>
            </div>
            <div class="flex items-center justify-between">
                <span class="text-xs font-normal text-custom-greyscale-500 md:text-sm">Expiry date</span>
                <span class="text-sm font-medium text-custom-greyscale-700">{{
                    card.exp
                    }}</span>
            </div>
            <div class="flex items-center justify-between">
                <span class="text-sm font-normal text-custom-greyscale-500">CVC</span>
                <span class="text-sm font-medium text-custom-greyscale-700">{{
                    card.CVC
                    }}</span>
            </div>
            <div class="flex flex-col items-center gap-2">
                <div class="flex w-full items-center justify-between">
                    <span class="text-sm font-normal text-custom-greyscale-500">Spending Limit</span>
                    <span class="text-sm font-medium text-custom-greyscale-700">{{
                        card.amount.toLocaleString('us-US', {
                            style: 'currency',
                            currency: 'USD',
                        })
                    }}</span>
                </div>
                <div class="h-[10px] w-full overflow-hidden rounded-[5px] bg-[#f0f0f0]">
                    <div class="h-full rounded-full bg-[#333]" :style="{
                        width: `${calculatePercentage(card.amount, card.spendingLimit)}%`,
                    }"></div>
                </div>
            </div>
        </div>
        <div class="flex justify-between">
            <Button type="button" variant="outline" class="px-5 py-2">Show PIN</Button>

            <SheetLayout titleButton="Details" :titleSheet="card.type" customClassSheetContent="">
                <div class="mt-8 flex flex-col gap-8">
                    <div :class="[
                        'rounded-[16px] border',
                        {
                            'bg-custom-greyscale-0':
                                card.type == 'Virtual Card',
                            'bg-custom-greyscale-700':
                                card.type == 'Physical Card',
                        },
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
                            <img v-if="card.type == 'Virtual Card'" src="../../../assets/Icon/art.png"
                                class="relative h-20 md:h-32" alt="" />
                            <img v-else src="../../../assets/Icon/art2.png" class="relative h-20 md:h-32" alt="" />
                        </div>
                        <div :class="[
                            'p-4',
                            {
                                'text-custom-greyscale-900':
                                    card.type == 'Virtual Card',
                                'text-custom-greyscale-0':
                                    card.type == 'Physical Card',
                            },
                        ]">
                            <div class="flex w-full gap-20">
                                <span class="text-sm font-medium">{{
                                    card.name
                                    }}</span>
                                <span class="text-xs font-normal">{{
                                    card.exp
                                    }}</span>
                            </div>
                            <div class="relative flex">
                                <div class="flex gap-1">
                                    <span v-for="(
                                            number, i
                                        ) in formattedIdCardNumber(
                                                card.idCardNumber
                                            )" :key="i" class="text-sm font-medium md:text-base">
                                        {{
                                            i < formattedIdCardNumber(card.idCardNumber).length - 4 ? '•' : number }}
                                            </span>
                                </div>
                                <div class="absolute bottom-0 right-1 flex md:bottom-2 md:right-10">
                                    <div class="h-[17px] w-[17px] rounded-full bg-[#ED0006]/90"></div>
                                    <div class="relative -ml-2 h-[17px] w-[17px] rounded-full bg-[#F9A000]/80"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col gap-4">
                        <h4 class="text-sm font-medium text-custom-greyscale-500">
                            DETAILS
                        </h4>
                        <div class="flex flex-col gap-4">
                            <span class="text-2xl font-medium md:text-3xl lg:text-4xl">{{
                                card.amount.toLocaleString('us-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                })
                            }}
                            </span>
                            <div class="py2 flex items-center justify-between px-4">
                                <p class="text-sm font-normal text-custom-alertsuccess-200">
                                    15.43% Than last month
                                </p>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path class="fill-custom-alertsuccess-200"
                                        d="M4.41085 14.5258L7.81249 11.1241L10.6409 13.9526L13.7978 10.7957L12.0049 9.00281H17.0049V14.0028L15.212 12.2099L10.6409 16.781L7.81249 13.9526L5.33834 16.4267C6.77158 18.5822 9.22233 20.0028 12.0049 20.0028C16.4232 20.0028 20.0049 16.4211 20.0049 12.0028C20.0049 7.58453 16.4232 4.00281 12.0049 4.00281C7.5866 4.00281 4.00488 7.58453 4.00488 12.0028C4.00488 12.8844 4.14747 13.7326 4.41085 14.5258ZM2.87288 16.084L2.86275 16.0739L2.86662 16.07C2.31276 14.8274 2.00488 13.4511 2.00488 12.0028C2.00488 6.47996 6.48204 2.00281 12.0049 2.00281C17.5277 2.00281 22.0049 6.47996 22.0049 12.0028C22.0049 17.5257 17.5277 22.0028 12.0049 22.0028C7.93574 22.0028 4.43426 19.5724 2.87288 16.084Z"
                                        fill="black" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="flex w-full flex-col gap-4">
                        <div class="w-full px-4">
                            <div
                                class="flex w-full justify-center rounded-[8px] bg-custom-greyscale-50 p-[2px] transition-all">
                                <div @click="toggle('Details')" :class="[
                                    {
                                        'rounded-[8px] bg-custom-greyscale-25 text-custom-greyscale-800 shadow-sm':
                                            typeToggle === 'Details',
                                    },
                                    'flex-1 cursor-pointer py-1 text-center text-sm font-medium text-custom-greyscale-500',
                                ]">
                                    Details
                                </div>
                                <div @click="toggle('History')" :class="[
                                    {
                                        'rounded-[8px] bg-custom-greyscale-25 text-custom-greyscale-800 shadow-sm':
                                            typeToggle === 'History',
                                    },
                                    'flex-1 cursor-pointer py-1 text-center text-sm font-medium text-custom-greyscale-500',
                                ]">
                                    History
                                </div>
                            </div>
                        </div>

                        <!-- Details -->
                        <div id="Details" :class="[
                            {
                                hidden: typeToggle !== 'Details',
                            },
                            'flex flex-col gap-4',
                        ]">
                            <div class="flex w-full flex-col gap-2">
                                <div class="flex items-center justify-between">
                                    <span class="text-xs font-normal text-custom-greyscale-500 md:text-sm">Holder
                                        Name</span>
                                    <span class="text-xs font-medium text-custom-greyscale-700 md:text-sm">{{ card.name
                                        }}</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-xs font-normal text-custom-greyscale-500 md:text-sm">Status</span>
                                    <span class="text-xs font-medium text-custom-alertsuccess-200 md:text-sm">{{
                                        card.status }}</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-xs font-normal text-custom-greyscale-500 md:text-sm">
                                        Card Number
                                    </span>
                                    <div class="flex items-center gap-2">
                                        <span v-for="(
                                                number, i
                                            ) in formattedIdCardNumber(
                                                    card.number
                                                )" :key="i"
                                            class="text-xs font-medium text-custom-greyscale-700 md:text-sm">
                                            {{
                                                i < formattedIdCardNumber(card.number).length - 4 ? '•' : number }}
                                                </span>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-xs font-normal text-custom-greyscale-500 md:text-sm">Expiry
                                        date</span>
                                    <span class="text-xs font-medium text-custom-greyscale-700 md:text-sm">{{ card.exp
                                        }}</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-xs font-normal text-custom-greyscale-500 md:text-sm">CVC</span>
                                    <span class="text-xs font-medium text-custom-greyscale-700 md:text-sm">{{ card.CVC
                                        }}</span>
                                </div>
                                <div class="flex flex-col items-center gap-2">
                                    <div class="flex w-full items-center justify-between">
                                        <span class="text-xs font-normal text-custom-greyscale-500 md:text-sm">Spending
                                            Limit</span>
                                        <span class="text-xs font-medium text-custom-greyscale-700 md:text-sm">{{
                                            card.amount.toLocaleString(
                                                'us-US',
                                                {
                                                    style: 'currency',
                                                    currency: 'USD',
                                                }
                                            )
                                        }}</span>
                                    </div>
                                    <div class="h-[10px] w-full overflow-hidden rounded-[5px] bg-[#f0f0f0]">
                                        <div class="h-full rounded-full bg-[#333]" :style="{
                                            width: `${calculatePercentage(card.amount, card.spendingLimit)}%`,
                                        }"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex gap-4">
                                <Button type="button" variant="outline" class="w-full">Hide</Button>
                                <Button type="button" variant="outline" class="w-full">Adjust</Button>
                            </div>
                        </div>

                        <!-- History -->

                        <div id="History" :class="[
                            {
                                hidden: typeToggle !== 'History',
                            },
                            'flex flex-col',
                        ]">
                            <div v-for="platform in Platform"
                                class="flex flex-wrap items-center justify-between gap-2 border-b border-[#DFE1E7] py-3 md:flex-nowrap">
                                <div class="flex w-full gap-2">
                                    <div class="flex h-10 w-10 items-center justify-center rounded-full border border-[#DFE1E7]"
                                        key="platform.id">
                                        <img :src="platform.logo" class="" alt="" />
                                    </div>
                                    <div class="flex flex-col">
                                        <h4 class="text-sm font-medium">
                                            {{ platform.title }}
                                        </h4>
                                        <p class="text-xs font-normal text-custom-greyscale-400">
                                            Montly
                                            {{ platform.app }}
                                            subscription
                                        </p>
                                    </div>
                                </div>

                                <div class="flex w-full">
                                    <div
                                        class="flex w-full items-center justify-around md:flex-col md:items-end md:justify-normal">
                                        <p class="text-sm font-medium">
                                            {{ platform.payment }}
                                        </p>
                                        <p class="text-xs font-normal text-custom-greyscale-400">
                                            {{ platform.date }}
                                        </p>
                                    </div>

                                    <div class="flex h-8 w-8 cursor-pointer items-center justify-center">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13.1715 12.0007L8.22168 7.05093L9.6359 5.63672L15.9999 12.0007L9.6359 18.3646L8.22168 16.9504L13.1715 12.0007Z"
                                                fill="black" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-show="typeToggle === 'Details'" class="flex w-full flex-wrap justify-between gap-2">
                        <Button type="button" variant="outline" class="flex-1">Show PIN</Button>
                        <Button type="button" variant="outline" class="flex-1">Freeze</Button>
                        <Button type="button" variant="outline" class="flex-1">More</Button>
                    </div>
                    <Button v-show="typeToggle === 'History'" variant="outline"
                        class="mt-24 w-full gap-2 rounded-[8px] shadow-sm">
                        See All
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
                                fill="black" />
                        </svg>
                    </Button>
                </div>
            </SheetLayout>
            <Button type="button" variant="outline" class="px-5 py-2">Freeze</Button>
        </div>
    </div>
</template>

<script setup>
import Button from '@/components/ui/button/Button.vue'
import SheetLayout from '@/Layouts/SheetLayout.vue'
import { defineProps, ref } from 'vue'
import { Platform } from '@/lib/data'

const props = defineProps({
    dataCards: {
        type: Object,
    },
})

const { dataCards } = props
const typeToggle = ref('Details')
const toggle = (type) => {
    typeToggle.value = type
}
const formattedIdCardNumber = (idCardNumber) => {
    return idCardNumber.toString().split('')
}

const calculatePercentage = (amount, spendingLimit) => {
    return (amount / spendingLimit) * 100
}
</script>

<style lang="scss" scoped></style>
