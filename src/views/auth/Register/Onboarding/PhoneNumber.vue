<script setup>
import { ref, watch, computed } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import Nav from '@/components/navbar-auth/Nav.vue'
import Footer from '@/components/footer-auth/Footer.vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import FormIcon from '@/components/ui/form/FormIcon.vue'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import FormHeader from '@/components/ui/form/FormHeader.vue'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Countries, Language } from '@/lib/countries.js'
// import {  selectedCountry } from './ChoiceCountry.vue'

const props = defineProps({
    codePhoneNumber: { type: String, required: false },
    flag: { type: String, required: false },
})

const data = ref({
    number: null,
    phoneNumber: null,
})

watch(
    () => data.value.number,
    (newVal, oldVal) => {
        data.value.phoneNumber = newVal
        console.log(data.value.phoneNumber)
    }
)

console.log(props.codePhoneNumber)
console.log(props.flag)

const country = Countries

const selectedPhoneNumberCountry = ref(props.codePhoneNumber)
let flagIcon = ref(props.flag)

watch(
    () => selectedPhoneNumberCountry.value,
    (newVal, oldVal) => {
        const findFlag = country.find((c) => c.phone_code == newVal)
        flagIcon.value = findFlag.flag_icon
        console.log(flagIcon.value)
    }
)

const emit = defineEmits(['setPhoneNumber'])

const formSchema = toTypedSchema(z.object({}))

const form = useForm({
    validationSchema: formSchema,
})

const handleSetPhoneNumber = () => {
    data.value.phoneNumber =
        selectedPhoneNumberCountry.value + data.value.number

    console.log('Form submitted!', data.value.phoneNumber)

    emit('setPhoneNumber', data.value.phoneNumber)
}
</script>

<template>
    <main class="flex justify-center">
        <form @submit.prevent="handleSetPhoneNumber" class="form-style">
            <FormIcon
                pathIcon="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z" />
            <FormHeader title="Verify your phone number with a code">
                <template v-slot:desc>
                    It helps your account to keep secure
                </template>
            </FormHeader>
            <div class="flex flex-col gap-1">
                <label for="" class="text-sm font-medium">Phone Number</label>
                <div class="">
                    <Select v-model="selectedPhoneNumberCountry">
                        <div class="flex rounded-md border">
                            <SelectTrigger inForm="true" class="w-[140px] border-none">
                                <SelectValue :placeholder="selectedPhoneNumberCountry" showFlag="true"
                                    defaultFlag="false" :flag="flagIcon"
                                    class="justify-start text-sm text-custom-greyscale-400" />
                            </SelectTrigger>
                            <Input type="number" placeholder="Enter phone number"
                                class="-pl-10 relative -left-2 border-none" v-model="data.number" />
                        </div>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel class="text-sm">Countries</SelectLabel>
                                <SelectItem v-for="c in country" :value="c.phone_code" inForm="true"
                                    :flag="c.flag_icon">
                                    <li class="list-none" :key="c.id">
                                        {{ c.phone_code }}
                                    </li>
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <Button type="submit" variant="default"> Submit </Button>
        </form>
    </main>
</template>

<style lang="scss" scoped></style>
