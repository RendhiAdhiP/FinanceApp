<template>
    <FormLayout>
        <form @submit.prevent="onSubmit"
            class="mt-10 flex h-auto w-full flex-col items-center self-center rounded-2xl border border-solid border-[#DFE1E7] shadow-md drop-shadow-sm md:mt-0 md:w-[450px]">
            <div class="flex w-full items-center justify-start gap-4 border-b py-6 pl-6 pr-0">
                <div class="`flex user__custom ` h-12 w-12 items-center rounded-[100%] p-2 md:h-[64px] md:w-[64px]">
                    <div
                        class="ml-[50%] mt-[50%] flex h-10 w-10 translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-[100%] bg-slate-100 py-2 drop-shadow-sm md:h-12 md:w-12 md:px-2 md:py-4">
                        <Icon
                            Icon="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z" />
                    </div>
                </div>
                <div class="">
                    <h3 class="text-base font-medium md:text-xl">
                        What’s your delivery address?
                    </h3>
                </div>
            </div>
            <div class="flex w-full flex-col gap-4 p-6">
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
                <FormField name="address">
                    <FormItem class="w-full">
                        <FormLabel class="text-sm font-medium">Address line 2 (optional)</FormLabel>
                        <FormControl class="w-full">
                            <Input type="text" placeholder="Enter your address"
                                class="-pl-10 relative -left-2 rounded-[10px] border" v-model="data.address" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>
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
                                        <SelectItem v-for="state in data.states" :value="state.state" inForm="true ">
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
                <Button type="submit" class="w-full">Continue</Button>
            </div>
        </form>
    </FormLayout>
</template>

<script setup>
import Icon from '@/components/icon/Icon.vue'
import FormLayout from '@/Layouts/FormLayout.vue'
import { provide, ref, watch } from 'vue'
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
import router from '@/router'

const progress = {
    title: 'GETTING YOUR CARD',
    step1: 'Card',
    step2: 'Addresss',
    step3: 'Payment',
    step4: 'Verification',
    step5: 'Success',
}

const headerProgress = {
    title: 'Address',
    description: 'Kindly fill your address for send your card to you',
    Icon: 'M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z',
}

provide('progress', progress)
provide('headerProgress', headerProgress)

const formSchema = toTypedSchema(
    z.object({
    })
)

const { handleSubmit } = useForm({
    validationSchema: formSchema,
})

const data = ref({
    fullName: '',
    date: '',
    year: '',
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

const onSubmit = () => {
    router.push('/cards/add-card/verification')
}
</script>

<style lang="scss" scoped></style>
