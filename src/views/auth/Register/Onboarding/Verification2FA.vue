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
    FormHeader,
    FormFooter,
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
import { Countries, Language } from '@/lib/countries.js'
import router from '@/router'

const props = defineProps({
    phoneNumber: { type: Number, required: false },
})

const country = Countries

const phoneNumber = ref(props.phoneNumber)
console.log(phoneNumber.value)
const CodeVerification = ref('')

const onSubmit = () => {
    console.log('Form submitted!', CodeVerification.value)
    router.push('/')
}
</script>

<template>
    <main class="flex justify-center">
        <form @submit.prevent="onSubmit" class="form-style">
            <FormIcon
                pathIcon="M18 2C18.5523 2 19 2.44772 19 3L19.0012 10.1003C18.6777 10.0345 18.3429 10 18 10C15.5811 10 13.5634 11.7177 13.1001 13.9998L12 14V22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2H18ZM18 12C19.6569 12 21 13.3431 21 15V16H22V21C22 21.5523 21.5523 22 21 22H15C14.4477 22 14 21.5523 14 21V16H15V15C15 13.3431 16.3431 12 18 12ZM18 14C17.4872 14 17 14.45 17 15V16H19V15C19 14.4477 18.5523 14 18 14Z" />
            <FormHeader title="Enter 6 digit code" link-to="true">
                <template v-slot:desc>
                    {{ `We send it to ${phoneNumber}.` }}
                </template>
                Change
            </FormHeader>
            <div class="flex flex-col gap-1">
                <div class="wrapper">
                    <FormField name="codeVerification">
                        <FormItem>
                            <FormLabel class="text-sm font-medium">Your digit 6 code</FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="1-0-1-0-1-0 " v-model="CodeVerification"
                                    class="-pl-10" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                </div>
            </div>
            <Button type="submit" variant="default"> Submit </Button>
            <FormFooter link-to="true" to="/account-setting">
                Didn't receive code?
            </FormFooter>
        </form>
    </main>
</template>

<style lang="scss" scoped></style>
