<template>
    <FormLayout>
        <form @submit.prevent="setAccountType" id="set-account-type"
            class="mt-10 flex h-max w-full flex-col self-center rounded-2xl border border-solid border-[#DFE1E7] shadow-md drop-shadow-sm md:mt-0 md:w-[450px]">
            <div class="flex flex-col gap-4 p-6">
                <FormField v-slot="{ value, handleChange }" type="checkbox" name="personal">
                    <FormItem
                        :class="`{{ formValues.personal == true ? 'bg-custom-greyscale-700' : 'bg-custom-greyscale-100' }}`"
                        class="relative flex flex-row items-start gap-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                            <Checkbox :checked="value" @update:checked="handleChange" class="absolute right-3" />
                        </FormControl>
                        <div class="flex items-center gap-3">
                            <div
                                class="flex h-6 w-6 items-center justify-center rounded-full border border-solid border-custom-greyscale-100 md:h-12 md:w-12">
                                <Icon width="20" height="20"
                                    Icon="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
                            </div>
                            <div class="flex w-[320px] flex-col gap-1">
                                <FormLabel class="text-sm md:text-base">Personal</FormLabel>
                                <FormDescription class="text-xs">
                                    Send, spend, and receive around the world
                                    for less
                                </FormDescription>
                                <FormMessage />
                            </div>
                        </div>
                    </FormItem>
                </FormField>
                <FormField v-slot="{ value, handleChange }" type="checkbox" name="bussines">
                    <FormItem class="relative flex flex-row items-start gap-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                            <Checkbox :checked="value" @update:checked="handleChange" class="absolute right-3" />
                        </FormControl>
                        <div class="flex items-center gap-3">
                            <div
                                class="flex h-6 w-6 items-center justify-center rounded-full border border-solid md:h-12 md:w-12">
                                <Icon width="20" height="20"
                                    Icon="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
                            </div>
                            <div class="flex w-[320px] flex-col gap-1">
                                <FormLabel class="text-sm md:text-base">Bussines</FormLabel>
                                <FormDescription class="text-xs">
                                    Do business or freelance work
                                    internationally
                                </FormDescription>
                                <FormMessage />
                            </div>
                        </div>
                    </FormItem>
                </FormField>
                <FormField v-slot="{ value, handleChange }" type="checkbox" name="other">
                    <FormItem class="relative flex flex-row items-start gap-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                            <Checkbox :checked="value" @update:checked="handleChange" class="absolute right-3" />
                        </FormControl>
                        <div class="flex items-center gap-3">
                            <div
                                class="flex h-6 w-6 items-center justify-center rounded-full border border-solid md:h-12 md:w-12">
                                <Icon width="20" height="20"
                                    Icon="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
                            </div>
                            <div class="flex w-[320px] flex-col gap-1">
                                <FormLabel class="text-sm md:text-base">On behalf of someone else</FormLabel>
                                <FormDescription class="text-xs">
                                    Sorry, still not availabel
                                </FormDescription>
                                <FormMessage />
                            </div>
                        </div>
                    </FormItem>
                </FormField>
            </div>
            <div class="w-full border-t p-6">
                <Button type="submit" class="w-full" :variant="variantBtn">
                    Continue
                </Button>
            </div>
        </form>

        <!-- details -->

        <form @submit.prevent="onSubmit" id="form-details"
            class="mt-10 flex hidden h-auto w-full flex-col self-center rounded-2xl border border-solid border-[#DFE1E7] shadow-md drop-shadow-sm md:mt-0 md:w-[450px]">
            <div class="flex flex-col gap-4 p-6">
                <FormField name="Full Name">
                    <FormItem>
                        <FormLabel class="text-sm font-medium">Full Name</FormLabel>
                        <FormControl>
                            <Input v-model="data.fullName" type="text" placeholder="Ex:Darwin Nunez Riberio"
                                class="-pl-10" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>

                <FormField name="date of birth">
                    <FormItem>
                        <FormLabel class="text-sm font-medium">Date of Birth</FormLabel>
                        <FormControl class="">
                            <div class="flex gap-5">
                                <Input type="number" v-model="data.date" placeholder="01" class="-pl-10" />
                                <Select v-model="data.month">
                                    <SelectTrigger inForm="true" class="w-full rounded-[10px] border">
                                        <SelectValue :placeholder="data.month" class="text-xs md:text-sm" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel class="text-sm">Months</SelectLabel>
                                            <SelectItem v-for="month in months" :value="month.month" inForm="true ">
                                                <li class="list-none" :key="month.id">
                                                    {{ month.month }}
                                                </li>
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <Input type="number" v-model="data.year" placeholder="1993" class="-pl-10" />
                            </div>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>

                <FormField name="phone number">
                    <FormItem>
                        <FormLabel class="text-sm font-medium">Phone Number</FormLabel>
                        <FormControl class="">
                            <Select v-model="data.numberPhoneCountry.phoneCode">
                                <div class="flex rounded-md border">
                                    <SelectTrigger inForm="true" class="w-[140px] border-none">
                                        <SelectValue :placeholder="data.numberPhoneCountry
                                                .phoneCode
                                            " showFlag="true" defaultFlag="false" :flag="data.numberPhoneCountry.flag"
                                            class="justify-start text-sm text-custom-greyscale-400" />
                                    </SelectTrigger>
                                    <Input type="number" placeholder="Enter phone number"
                                        class="-pl-10 relative -left-2 border-none" v-model="data.numberPhoneCountry.phoneNumber
                                            " />
                                </div>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel class="text-sm">Countries</SelectLabel>
                                        <SelectItem v-for="c in Countries" :value="c.phone_code" inForm="true"
                                            :flag="c.flag_icon">
                                            <li class="list-none" :key="c.id">
                                                {{ c.phone_code }}
                                            </li>
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>

                <div class="flex flex-wrap justify-between gap-5">
                    <FormField name="date of birth">
                        <FormItem class="w-full">
                            <FormLabel class="w-full text-sm font-medium">Country</FormLabel>
                            <FormControl class="">
                                <Select v-model="data.country">
                                    <SelectTrigger inForm="true" class="w-full rounded-[10px] border">
                                        <SelectValue :placeholder="data.country
                                                ? data.country
                                                : 'Please choose Country'
                                            " class="text-xs text-custom-greyscale-400 md:text-sm" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel class="text-sm">Country</SelectLabel>
                                            <SelectItem v-for="c in Countries" :value="c.country" inForm="true ">
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
                    <FormField name="address">
                        <FormItem class="w-full">
                            <FormLabel class="text-sm font-medium">Address</FormLabel>
                            <FormControl class="w-full">
                                <Input type="text" placeholder="Enter your address"
                                    class="-pl-10 relative -left-2 rounded-[10px] border" v-model="data.address" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                </div>

                <div class="flex flex-wrap items-center justify-between gap-5">
                    <FormField name="address">
                        <FormItem class="w-full">
                            <FormLabel class="text-sm font-medium">City</FormLabel>
                            <FormControl class="">
                                <Input type="text" placeholder="Enter your city"
                                    class="-pl-10 relative -left-2 rounded-[10px] border" v-model="data.city" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>

                    <FormField name="state">
                        <FormItem class="w-full">
                            <FormLabel class="text-sm font-medium">State</FormLabel>
                            <FormControl class="">
                                <Select v-model="data.state">
                                    <SelectTrigger inForm="true" class="w-full rounded-[10px] border">
                                        <SelectValue :placeholder="data.state
                                                ? data.state
                                                : 'Please choose state'
                                            " class="text-xs text-custom-greyscale-400 md:text-sm" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel class="text-sm">States</SelectLabel>
                                            <SelectItem v-for="state in data.states" :value="state.state"
                                                inForm="true ">
                                                <li class="list-none" :key="state.id">
                                                    {{ state.state }}
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
                <FormField name="ZIP Code">
                    <FormItem>
                        <FormLabel class="text-sm font-medium">ZIP Code</FormLabel>
                        <FormControl>
                            <Input type="number" v-model="data.ZIPCode" placeholder="Enter your ZIP Code"
                                class="-pl-10" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>
            </div>
            <div class="w-full border-t p-6">
                <Button type="submit" class="w-full" :variant="variantBtn">
                    Continue
                </Button>
            </div>
        </form>
    </FormLayout>
</template>

<script setup>
import Icon from '@/components/icon/Icon.vue'
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
import { months } from '@/lib/data'
import { onMounted, provide, ref } from 'vue'
import { watch } from 'vue'
import router from '@/router'
import FormLayout from '@/Layouts/FormLayout.vue'

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

const data = ref({
    fullName: '',
    date: '',
    month: months[0].month,
    year: '',
    numberPhoneCountry: {
        flag: Countries[24].flag_icon,
        phoneCode: Countries[24].phone_code,
        phoneNumber: null,
    },
    country: null,
    address: '',
    city: '',
    states: '',
    state: '',
    ZIPCode: '',
})

watch(
    () => data.value.numberPhoneCountry.phoneCode,
    (newVal, oldVal) => {
        const findFlag = Countries.find((c) => c.phone_code == newVal)
        data.value.numberPhoneCountry.flag = findFlag.flag_icon
    }
)

watch(
    () => data.value.country,
    (newVal, oldVal) => {
        const findState = Countries.find((c) => c.country == newVal)
        data.value.states = findState.states
    }
)

const setAccountType = handleSubmit((values) => {
    console.log(values)

    const formDetails = document.getElementById('form-details')
    const setAccount = document.getElementById('set-account-type')

    setAccount.classList.add('hidden')
    formDetails.classList.remove('hidden')
})

const onSubmit = () => {
    console.log(data.value)
    router.push('recipient')
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
    title: 'Personal Details',
    description:
        'Please select the type (personal or business) and fill in your details.',
    Icon: 'M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10ZM5.5 13C6.88071 13 8 11.8807 8 10.5C8 9.11929 6.88071 8 5.5 8C4.11929 8 3 9.11929 3 10.5C3 11.8807 4.11929 13 5.5 13ZM21 10.5C21 11.8807 19.8807 13 18.5 13C17.1193 13 16 11.8807 16 10.5C16 9.11929 17.1193 8 18.5 8C19.8807 8 21 9.11929 21 10.5ZM12 11C14.7614 11 17 13.2386 17 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5 15.9999C5 15.307 5.10067 14.6376 5.28818 14.0056L5.11864 14.0204C3.36503 14.2104 2 15.6958 2 17.4999V21.9999H5V15.9999ZM22 21.9999V17.4999C22 15.6378 20.5459 14.1153 18.7118 14.0056C18.8993 14.6376 19 15.307 19 15.9999V21.9999H22Z',
}

provide('progress', progress)
provide('headerProgress', headerProgress)
</script>

<style lang="scss" scoped></style>
