<template>
    <DashboardLayout>
        <HeaderDashboard title-dashboard="My Balance"
            sub-title="Effortlessly manage and monitor your financial resources with ease" title-button="Add Balance"
            title-sheet="Add New Balance" custom-class-sheet="bg-custom-greyscale-900 text-custom-greyscale-0">
            <form @submit.prevent="setAccountType" id="set-account-type"
                class="mt-4 flex h-auto w-full flex-col gap-4 self-center overflow-x-hidden rounded-2xl px-2 md:gap-6">
                <div class="flex flex-col gap-4">
                    <div class="text-sm font-medium text-custom-greyscale-400">
                        Select Type
                    </div>
                    <FormField v-slot="{ value, handleChange }" type="checkbox" name="personal">
                        <FormItem
                            :class="`{{ formValues.personal == true ? 'bg-custom-greyscale-700' : 'bg-custom-greyscale-100' }}`"
                            class="relative flex flex-row items-start gap-x-3 space-y-0 rounded-[16px] border p-4">
                            <FormControl>
                                <Checkbox :checked="value" @update:checked="handleChange" class="absolute right-3" />
                            </FormControl>
                            <div class="flex items-center gap-3">
                                <div
                                    class="flex h-6 w-6 items-center justify-center rounded-full border border-solid border-custom-greyscale-100 md:h-12 md:w-12">
                                    <Icon width="20" height="20"
                                        Icon="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM8.50488 14.0027V16.0027H11.0049V18.0027H13.0049V16.0027H14.0049C15.3856 16.0027 16.5049 14.8835 16.5049 13.5027C16.5049 12.122 15.3856 11.0027 14.0049 11.0027H10.0049C9.72874 11.0027 9.50488 10.7789 9.50488 10.5027C9.50488 10.2266 9.72874 10.0027 10.0049 10.0027H15.5049V8.00275H13.0049V6.00275H11.0049V8.00275H10.0049C8.62417 8.00275 7.50488 9.12203 7.50488 10.5027C7.50488 11.8835 8.62417 13.0027 10.0049 13.0027H14.0049C14.281 13.0027 14.5049 13.2266 14.5049 13.5027C14.5049 13.7789 14.281 14.0027 14.0049 14.0027H8.50488Z" />
                                </div>
                                <div class="flex w-[320px] flex-col gap-1">
                                    <FormLabel class="text-sm md:text-base">Pocket</FormLabel>
                                    <FormDescription class="w-[50%] text-xs md:w-[100%]">
                                        Set aside money for whenever you need
                                        it.
                                    </FormDescription>
                                    <FormMessage />
                                </div>
                            </div>
                        </FormItem>
                    </FormField>
                    <FormField v-slot="{ value, handleChange }" type="checkbox" name="bussines">
                        <FormItem
                            class="relative flex flex-row items-start gap-x-3 space-y-0 rounded-[16px] border p-4">
                            <FormControl>
                                <Checkbox :checked="value" @update:checked="handleChange" class="absolute right-3" />
                            </FormControl>
                            <div class="flex items-center gap-3">
                                <div
                                    class="flex h-6 w-6 items-center justify-center rounded-full border border-solid md:h-12 md:w-12">
                                    <Icon width="20" height="20"
                                        Icon="M22.0049 5.99979H15.0049C11.6912 5.99979 9.00488 8.68608 9.00488 11.9998C9.00488 15.3135 11.6912 17.9998 15.0049 17.9998H22.0049V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V5.99979ZM15.0049 7.99979H23.0049V15.9998H15.0049C12.7957 15.9998 11.0049 14.2089 11.0049 11.9998C11.0049 9.79065 12.7957 7.99979 15.0049 7.99979ZM15.0049 10.9998V12.9998H18.0049V10.9998H15.0049Z" />
                                </div>
                                <div class="flex w-[320px] flex-col gap-1">
                                    <FormLabel class="text-sm md:text-base">Bussines</FormLabel>
                                    <FormDescription class="w-[50%] text-xs md:w-[100%]">
                                        Do business or freelance work
                                        internationally
                                    </FormDescription>
                                    <FormMessage />
                                </div>
                            </div>
                        </FormItem>
                    </FormField>
                </div>
                <div class="flex flex-col gap-4">
                    <div class="py2 px-4 text-sm font-medium text-custom-greyscale-400">
                        Select Type
                    </div>
                    <Select v-model="CountriesCurrency.currency">
                        <SelectTrigger inForm="true" class="py2 w-full border px-4">
                            <SelectValue :placeholder="CountriesCurrency.currency
                                    ? CountriesCurrency.currency
                                    : placeholder
                                " defaultFlag="true" showFlag="true" :flag="CountriesCurrency.flag"
                                class="text-xs lg:text-sm" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel class="text-xs lg:text-sm">Countries</SelectLabel>
                                <SelectItem v-for="c in CountriesCurrency.country" :value="c.currency" inForm="true"
                                    :flag="c.flag_icon">
                                    <li class="list-none" :key="c.id">
                                        {{ c.currency }}
                                    </li>
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <Button type="submit" :variant="variantBtn" class="lg:mt-48">
                    Confrim
                </Button>
            </form>
        </HeaderDashboard>

        <section class="w-full">
            <div class="flex flex-col items-center md:mt-12 md:flex-row md:justify-between lg:mt-0">
                <ul class="mb-2 flex w-[200px] px-[2px] py-[2px] text-sm font-medium text-custom-greyscale-500">
                    <li class="flex-1 rounded-[8px] py-1 text-center">12 M</li>
                    <li class="flex-1 rounded-[8px] py-1 text-center text-custom-greyscale-900">
                        1 M
                    </li>
                    <li class="flex-1 rounded-[8px] py-1 text-center">7 D</li>
                    <li class="flex-1 rounded-[8px] py-1 text-center">24 H</li>
                </ul>
                <div class="flex items-center gap-2">
                    <div
                        class="flex cursor-pointer items-center gap-2 rounded-[8px] border border-solid border-[#DFE1E7] px-4 py-2">
                        <svg width="20" height="20" class="w-[16px]" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"
                                fill="black" />
                        </svg>
                        <p class="text-xs font-medium text-custom-greyscale-900 md:text-sm">
                            8 Feb - 15 Feb 2024
                        </p>
                    </div>
                    <div
                        class="flex cursor-pointer items-center gap-2 rounded-[8px] border border-solid border-[#DFE1E7] px-4 py-[6px] md:py-2">
                        <svg width="24" height="24" class="w-[16px]" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z" fill="black" />
                        </svg>
                        <p class="text-xs font-medium text-custom-greyscale-900 md:text-sm">
                            Filter
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="w-ful grid place-content-start grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <BalanceCard :data="Balance"/>
        </section>
    </DashboardLayout>
</template>

<script setup>
import HeaderDashboard from '@/components/dashboard/HeaderDashboard.vue'
import Button from '@/components/ui/button/Button.vue'
import DashboardLayout from '@/Layouts/DashboardLayout.vue'
import { RouterLink } from 'vue-router'
import { Countries } from '@/lib/countries'
import Icon from '@/components/icon/Icon.vue'
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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { ref, watch } from 'vue'
import { Balance } from '@/lib/data'
import BalanceCard from '@/components/balance-card/BalanceCard.vue'

const CountriesCurrency = ref({
    country: Countries,
    defaultCurrency: 'United States',
    currency: 'US Dolar',
    flag: {
        type: String,
        default: Countries[24].flag_icon,
    },
})

watch(
    () => CountriesCurrency.value.currency,
    (newVal, oldVal) => {
        if (newVal !== oldVal) {
            const findFlag = Countries.find((c) => c.currency === newVal)
            if (findFlag) {
                CountriesCurrency.value.flag = findFlag.flag_icon
            }
        }
    }
)
</script>

<style lang="scss" scoped></style>
