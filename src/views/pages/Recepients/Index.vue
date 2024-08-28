<template>
    <DashboardLayout>
        <HeaderDashboard title-dashboard="Recepients"
            sub-title="Efficiently organize and keep track of your incoming receipts for hassle-free financial management"
            title-button="Add Your Bank Account" title-sheet="Add Your Bank Account"
            custom-class-sheet="bg-custom-greyscale-700 text-custom-greyscale-0">
            <!-- Sheet Content "Add Your Bank Account" -->

            <form @submit.prevent="onSubmit" class="mt-8">
                <div class="flex w-full flex-col gap-4">
                    <div class="flex flex-col items-center justify-between gap-4">
                        <div class="flex w-full flex-col gap-4">
                            <div class="flex flex-col">
                                <div class="py-2 text-sm font-medium text-custom-greyscale-700">
                                    Currency
                                </div>
                                <Select v-model="CountriesCurrency.currency">
                                    <SelectTrigger inForm="true" class="w-full border px-4">
                                        <SelectValue :placeholder="CountriesCurrency.currency
                                                ? CountriesCurrency.currency
                                                : placeholder
                                            " defaultFlag="true" showFlag="true" :flag="CountriesCurrency.flag"
                                            class="text-xs lg:text-sm" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel class="text-xs lg:text-sm">Countries</SelectLabel>
                                            <SelectItem v-for="c in CountriesCurrency.country" :value="c.currency"
                                                inForm="true" :flag="c.flag_icon">
                                                <li class="list-none" :key="c.id">
                                                    {{ c.currency }}
                                                </li>
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div class="text-sm font-medium text-custom-greyscale-400">
                                Bank Details
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="flex w-full justify-center rounded-[8px] bg-custom-greyscale-50 p-[2px]">
                                <div
                                    class="flex-1 cursor-pointer rounded-[8px] bg-custom-greyscale-25 py-1 text-center text-sm font-medium text-custom-greyscale-800 shadow-sm">
                                    SWIFT
                                </div>
                                <div
                                    class="flex-1 cursor-pointer py-1 text-center text-sm font-medium text-custom-greyscale-500">
                                    Wire
                                </div>
                                <div
                                    class="flex-1 cursor-pointer py-1 text-center text-sm font-medium text-custom-greyscale-500">
                                    ACH
                                </div>
                            </div>
                        </div>
                        <div class="flex w-full flex-col gap-4">
                            <div class="flex justify-between px-4 py-2 text-[#116B97]">
                                <p class="max-w-72 text-xs">
                                    Your recipent maybe charged on additional
                                    fee by their bank for incoming wire
                                    transfers. The fee may very from $12 to $20.
                                </p>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path class="fill-[#116B97]"
                                        d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"
                                        fill="black" />
                                </svg>
                            </div>

                            <FormField name="fullName">
                                <FormItem class="w-full">
                                    <FormLabel class="text-sm font-medium">Full name of the account
                                        holder</FormLabel>
                                    <FormControl class="w-full">
                                        <Input type="text" placeholder="Ex: Sergio Perez"
                                            class="-pl-10 relative -left-2 rounded-[10px] border"
                                            v-model="data.fullName" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            </FormField>
                            <FormField name="FedwireRoutingNumber">
                                <FormItem>
                                    <FormLabel class="text-sm font-medium">Fedwire routing number</FormLabel>
                                    <FormControl>
                                        <Input type="number" v-model="data.fedwireRoutingNumber"
                                            placeholder="Ex: 020123454" class="-pl-10" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            </FormField>
                            <FormField name="AccountNumber">
                                <FormItem>
                                    <FormLabel class="text-sm font-medium">Account number</FormLabel>
                                    <FormControl>
                                        <Input type="number" v-model="data.accountNumber" placeholder="Ex: 12345278"
                                            class="-pl-10" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            </FormField>

                            <FormField name="AccountType">
                                <FormItem class="w-full">
                                    <FormLabel class="w-full text-sm font-medium">Account type</FormLabel>
                                    <FormControl class="">
                                        <Select v-model="data.accountType">
                                            <SelectTrigger inForm="true" class="w-full rounded-[10px] border">
                                                <SelectValue :placeholder="data.accountType
                                                        ? data.accountType
                                                        : 'Cheking'
                                                    " class="text-xs text-custom-greyscale-400 md:text-sm" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel class="text-sm">Account
                                                        type</SelectLabel>
                                                    <SelectItem v-for="c in Countries" :value="c.country"
                                                        inForm="true ">
                                                        <li class="list-none" :key="c.id">
                                                            {{ c.country }}
                                                        </li>
                                                    </SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            </FormField>
                        </div>
                    </div>
                    <div class="mt-10 w-full">
                        <Button type="submit" class="w-full">Continue</Button>
                    </div>
                </div>
            </form>

            <!-- End Sheet Content -->
        </HeaderDashboard>
        <section class="w-full">
            <div class="flex items-center justify-start gap-4">
                <div class="w-full md:min-w-[300px] md:max-w-[350px]">
                    <Input class="rounded-[8px]" placeholder="Search"
                        icon="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
                        v-model="searchTerm" @input="applyFilters" />
                </div>
                <div
                    class="flex-3 flex items-center gap-2 rounded-[8px] border border-[#DFE1E7] px-2 py-1 md:px-4 md:py-[10px]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill="black" />
                    </svg>

                    <p class="text-xs font-medium md:text-sm">Add a Recipent</p>
                </div>
            </div>

            <div class="mt-8 flex flex-col gap-6">
                <div class="flex flex-col gap-4 rounded-[16px] border border-[#DFE1E7] p-4">
                    <div class="flex items-center justify-between">
                        <h3 class="text-sm font-medium md:text-lg">
                            Add one of your bank account
                        </h3>
                        <div
                            class="flex h-max items-center gap-2 rounded-[8px] border border-[#DFE1E7] px-2 py-2 md:px-4 md:py-[10px]">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill="black" />
                            </svg>

                            <p class="text-xs font-medium md:text-sm">
                                Add
                            </p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex w-max items-center justify-start gap-4">
                            <div
                                class="`flex user__custom ` h-12 w-12 items-center rounded-[100%] p-2 md:h-[52px] md:w-[52px]">
                                <div
                                    class="ml-[50%] mt-[50%] flex h-10 w-10 translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-[100%] border border-[#DFE1E7] bg-slate-100 px-1 drop-shadow-sm md:px-2 md:py-4">
                                    <Icon
                                        Icon="M2 20H22V22H2V20ZM4 12H6V19H4V12ZM9 12H11V19H9V12ZM13 12H15V19H13V12ZM18 12H20V19H18V12ZM2 7L12 2L22 7V11H2V7ZM12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" />
                                </div>
                            </div>
                            <div class="flex items-center">
                                <h3 class="text-sm font-medium md:text-base">
                                    Add one of your bank account
                                </h3>
                            </div>
                        </div>

                        <div class="flex h-8 w-8 items-center justify-center md:h-10 md:w-10">
                            <div class="flex h-4 w-4 items-center md:h-5 md:w-5">
                                <Icon
                                    -icon="M13.1715 12.0007L8.22168 7.05093L9.6359 5.63672L15.9999 12.0007L9.6359 18.3646L8.22168 16.9504L13.1715 12.0007Z" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-4 rounded-[16px] border border-[#DFE1E7] p-4">
                    <div class="flex items-center justify-between">
                        <h3 class="text-lg font-medium">Your Recipients</h3>
                        <div
                            class="flex h-max items-center gap-2 rounded-[8px] border border-[#DFE1E7] px-2 py-2 md:px-4 md:py-[10px]">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill="black" />
                            </svg>

                            <p class="text-xs font-medium md:text-sm">Add</p>
                        </div>
                    </div>

                    <div class="flex flex-col gap-4">
                        <RecipientsPeople :data="Recepients" />
                    </div>
                </div>
            </div>
        </section>
    </DashboardLayout>
</template>

<script setup>
import HeaderDashboard from '@/components/dashboard/HeaderDashboard.vue'
import Icon from '@/components/icon/Icon.vue'
import Input from '@/components/ui/input/Input.vue'
import DashboardLayout from '@/Layouts/DashboardLayout.vue'
import RecipientsPeople from './RecipientsPeople.vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { Recepients } from '@/lib/data'

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

const data = ref({
    fullName: '',
    fedwireRoutingNumber: null,
    accountNumber: null,
    accountType: '',
})

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
