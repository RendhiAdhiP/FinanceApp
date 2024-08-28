<script setup>
import Nav from '@/components/navbar-auth/Nav.vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

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
import Footer from '@/components/footer-auth/Footer.vue'
import { Checkbox } from '@/components/ui/checkbox'
import { computed, ref, watch } from 'vue'
import router from '@/router'
import { RouterLink } from 'vue-router'

const formSchema = toTypedSchema(
    z.object({
        email: z.string().email('Invalid email address'),
        password: z.string().min(2),
    })
)

let email = ref(null)
let password = ref(null)
let variant = ref('disabled')

const setEmail = (name) => {
    email.value = name
}
const setPassword = (name) => {
    password.value = name
}

watch(() => {
    if (email.value && password.value) {
        variant.value = 'default'
    } else {
        variant.value = 'disabled'
    }
})

const form = useForm({
    validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
    console.log('Form submitted!', values)
    router.push('/dashboard')
})
</script>

<template>
    <div class="container-content">
        <Nav />
        <main class="flex justify-center">
            <form @submit="onSubmit" class="form-style">
                <FormIcon
                    pathIcon="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z" />
                <FormHeader title="Login to your account">
                    <template v-slot:desc>
                        Enter your details to login.
                    </template>
                </FormHeader>
                <div class="">
                    <FormField v-slot="{ componentField }" name="email">
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Ex:z@financial.com"
                                    @input="setEmail(componentField.modelValue)" v-bind="componentField"
                                    icon="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z" />
                            </FormControl>
                            <FormDescription> </FormDescription>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                    <FormField v-slot="{ componentField }" name="password">
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="Enter your password" @input="
                                    setPassword(componentField.modelValue)
                                    " v-bind="componentField"
                                    icon="M18 8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8ZM5 10V20H19V10H5ZM11 14H13V16H11V14ZM7 14H9V16H7V14ZM15 14H17V16H15V14ZM16 8V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8H16Z" />
                            </FormControl>
                            <FormDescription> </FormDescription>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                </div>
                <div class="flex justify-between">
                    <div class="flex items-center gap-1">
                        <Checkbox id="terms1" class="peer border-custom-greyscale-100" />
                        <label for="terms1"
                            class="text-xs font-medium leading-none text-custom-greyscale-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 md:text-sm">
                            Remember me
                        </label>
                    </div>
                    <RouterLink to="/reset-password"
                        class="flex items-center text-xs font-medium text-custom-greyscale-700 underline md:text-sm">
                        Forgot
                        Password</RouterLink>
                </div>
                <Button type="submit" :variant="variant" size="sm">
                    Submit
                </Button>
            </form>
        </main>
        <Footer />
    </div>
</template>

<style lang="scss" scoped></style>
