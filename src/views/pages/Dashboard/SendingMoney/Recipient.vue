<template>
    <FormLayout>
        <form @submit.prevent="setRecipientType" id="set-recepient-type"
            class="mt-10 flex h-auto w-full flex-col self-center rounded-2xl border border-solid border-[#DFE1E7] shadow-md drop-shadow-sm md:w-[450px] lg:mt-0">
            <div class="flex flex-col gap-4 p-6">
                <FormField v-slot="{ value, handleChange }" type="checkbox" name="Myself">
                    <FormItem
                        :class="`{{ formValues.Myself == true ? 'bg-custom-greyscale-700' : 'bg-custom-greyscale-100' }}`"
                        class="relative flex flex-row items-start gap-x-3 space-y-0 rounded-[16px] border p-4">
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
                                <FormLabel class="text-sm md:text-base">Myself</FormLabel>
                                <FormDescription class="text-xs">
                                    Send, spend, and receive around the world
                                    for less
                                </FormDescription>
                                <FormMessage />
                            </div>
                        </div>
                    </FormItem>
                </FormField>
                <FormField v-slot="{ value, handleChange }" type="checkbox" name="Someone Else">
                    <FormItem class="relative flex flex-row items-start gap-x-3 space-y-0 rounded-[16px] border p-4">
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
                                <FormLabel class="text-sm md:text-base">Someone Else</FormLabel>
                                <FormDescription class="text-xs">
                                    Do business or freelance work
                                    internationally
                                </FormDescription>
                                <FormMessage />
                            </div>
                        </div>
                    </FormItem>
                </FormField>
                <FormField v-slot="{ value, handleChange }" type="checkbox" name="Business or Charity">
                    <FormItem class="relative flex flex-row items-start gap-x-3 space-y-0 rounded-[16px] border p-4">
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
                                <FormLabel class="text-sm md:text-base">Business or Charity</FormLabel>
                                <FormDescription class="text-xs">
                                    Do business or freelance work
                                    internationally
                                </FormDescription>
                                <FormMessage />
                            </div>
                        </div>
                    </FormItem>
                </FormField>
            </div>
            <div class="flex flex-col gap-4 border-t p-6">
                <Button type="submit" :variant="variantBtn"> Continue </Button>
            </div>
        </form>

        <form @submit.prevent="onSubmit" id="form-details"
            class="mt-5 flex hidden h-auto w-full flex-col items-center self-center rounded-2xl border border-solid border-[#DFE1E7] shadow-md drop-shadow-sm md:mt-0 md:w-[450px]">
            <div class="flex w-full items-center gap-4 border-b py-6 pl-6">
                <div
                    class="`flex user__custom ` h-12 w-12 items-center justify-center rounded-[100%] p-2 md:h-[64px] md:w-[64px]">
                    <div
                        class="ml-[50%] mt-[50%] flex h-10 w-10 translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-[100%] bg-slate-100 px-2 py-4 drop-shadow-sm md:h-12 md:w-12">
                        <Icon
                            Icon="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10ZM5.5 13C6.88071 13 8 11.8807 8 10.5C8 9.11929 6.88071 8 5.5 8C4.11929 8 3 9.11929 3 10.5C3 11.8807 4.11929 13 5.5 13ZM21 10.5C21 11.8807 19.8807 13 18.5 13C17.1193 13 16 11.8807 16 10.5C16 9.11929 17.1193 8 18.5 8C19.8807 8 21 9.11929 21 10.5ZM12 11C14.7614 11 17 13.2386 17 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5 15.9999C5 15.307 5.10067 14.6376 5.28818 14.0056L5.11864 14.0204C3.36503 14.2104 2 15.6958 2 17.4999V21.9999H5V15.9999ZM22 21.9999V17.4999C22 15.6378 20.5459 14.1153 18.7118 14.0056C18.8993 14.6376 19 15.307 19 15.9999V21.9999H22Z" />
                    </div>
                </div>
                <div class="">
                    <h3 class="text-base font-medium md:text-xl">
                        Send to Someone else
                    </h3>
                </div>
            </div>
            <div class="flex flex-col gap-4 border-t p-6">
                <div class="flex flex-col gap-4 md:gap-6">
                    <FormField name="Their Email">
                        <FormItem>
                            <FormLabel class="text-xs font-medium">Their Email</FormLabel>
                            <FormControl>
                                <Input v-model="data.thierEmail" type="email" placeholder="Ex: John@example.ex"
                                    class="-pl-10" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                    <div class="text-sm font-medium text-custom-greyscale-400 md:text-base">
                        Bank Details
                    </div>
                    <div class="flex flex-col gap-4">
                        <div class="flex justify-center rounded-[8px] bg-custom-greyscale-50 p-[2px] shadow-none">
                            <div @click="changeSendingType('international')"
                                class="flex flex-1 cursor-pointer items-center justify-center py-1 text-center text-xs font-medium md:px-[3px] md:text-sm"
                                :class="'rounded-[8px] bg-custom-greyscale-25 text-custom-greyscale-800 shadow-sm'">
                                Local Bank Account
                            </div>
                            <div @click="changeSendingType('local')"
                                class="flex flex-1 cursor-pointer items-center justify-center py-1 text-center text-xs font-medium md:px-[3px] md:text-sm"
                                :class="{
                                    'rounded-[8px] bg-custom-greyscale-25 text-custom-greyscale-800 shadow-sm':
                                        sendingType === 'local',
                                    'text-custom-greyscale-500':
                                        sendingType !== 'local',
                                }">
                                Pay Now
                            </div>
                        </div>

                        <FormField name="full name account holder">
                            <FormItem>
                                <FormLabel class="text-xs font-medium">Full name of account holder</FormLabel>
                                <FormControl>
                                    <Input v-model="data.acountHolder" type="email" placeholder="Ex: John@example.ex"
                                        class="-pl-10" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </FormField>
                        <FormField name="Bank Name">
                            <FormItem class="w-full">
                                <FormLabel class="text-xs font-medium">Bank Name</FormLabel>
                                <FormControl class="">
                                    <Select v-model="data.bankName">
                                        <SelectTrigger inForm="true" class="w-full rounded-[10px] border">
                                            <SelectValue :placeholder="data.bankName
                                                ? data.bankName
                                                : 'Please choose recipent bank'
                                                " class="text-xs text-custom-greyscale-400 md:text-sm" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel class="text-sm">Banks</SelectLabel>
                                                <SelectItem v-for="bank in banks" :value="bank.bank_name"
                                                    inForm="true ">
                                                    <li class="list-none" :key="bank.id">
                                                        {{ bank.bank_name }}
                                                    </li>
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </FormField>
                        <FormField name="Account Number">
                            <FormItem>
                                <FormLabel class="text-xs font-medium">Account Number</FormLabel>
                                <FormControl>
                                    <Input v-model="data.accountNumber" type="number" placeholder="Ex: 08838315213"
                                        class="-pl-10" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </FormField>
                    </div>
                    <div class="text-sm font-medium text-custom-greyscale-400 md:text-base">
                        RECIPENT DETAILS
                    </div>
                    <div class="flex flex-wrap items-center justify-between gap-5">
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
                                <FormControl class="">
                                    <Input type="text" placeholder="Enter your city"
                                        class="-pl-10 relative -left-2 rounded-[10px] border" v-model="data.address" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </FormField>
                    </div>
                    <div class="flex flex-wrap items-center justify-between gap-5">
                        <FormField name="ZIP Code">
                            <FormItem class="w-full">
                                <FormLabel class="text-sm font-medium">ZIP Code</FormLabel>
                                <FormControl>
                                    <Input type="number" v-model="data.ZIPCode" placeholder="Enter your ZIP Code"
                                        class="-pl-10 rounded-[10px]" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </FormField>

                        <FormField name="date of birth">
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
                </div>
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
import { Button } from '@/components/ui/button'
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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import Checkbox from '@/components/ui/checkbox/Checkbox.vue'
import { useForm } from 'vee-validate'
import * as z from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import Input from '@/components/ui/input/Input.vue'
import { onMounted, provide, ref } from 'vue'
import FormIcon from '@/components/ui/form/FormIcon.vue'
import { Countries } from '@/lib/countries.js'
import { banks } from '@/lib/data'
import { watch } from 'vue'
import router from '@/router'
import FormLayout from '@/Layouts/FormLayout.vue'

const data = ref({
    thierEmail: '',
    acountHolder: '',
    bankName: '',
    accountNumber: null,
    country: null,
    address: '',
    city: '',
    states: '',
    state: '',
    ZIPCode: '',
})

watch(
    () => data.value.country,
    (newVal, oldVal) => {
        const findState = Countries.find((c) => c.country == newVal)
        data.value.states = findState.states
    }
)

const formSchema = toTypedSchema(
    z.object({
        self: z.boolean().default(false).optional(),
        someoneElse: z.boolean().default(false).optional(),
        bussines: z.boolean().default(false).optional(),
    })
)

const { handleSubmit } = useForm({
    validationSchema: formSchema,
    initialValues: {
        self: false,
        someoneElse: false,
        bussines: false,
    },
})

const formDetails = ref(null)
const recipientType = ref(null)

onMounted(() => {
    formDetails.value = document.getElementById('form-details')
    recipientType.value = document.getElementById('set-recepient-type')
})

const setRecipientType = handleSubmit((values) => {
    console.log(values)
    console.log(recipientType)

    recipientType.value.classList.add('hidden')
    formDetails.value.classList.remove('hidden')
})

const onSubmit = () => {
    console.log('Form submitted!')
    router.push('/sending-money/review-and-pay')
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
