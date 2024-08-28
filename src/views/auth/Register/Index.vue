<template>
    <div class="container-content">
        <Nav />
        <main class="flex justify-center">
            <form @submit.prevent="onSubmit" class="form-style">
                <FormIcon
                    pathIcon="M14 14.252V22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM18 17V14H20V17H23V19H20V22H18V19H15V17H18Z" />
                <FormHeader title="Create New Account">
                    <template v-slot:desc>
                        Enter your details to register.
                    </template>
                </FormHeader>
                <div class="wrapper">
                    <FormField v-slot="{ componentField }" name="fullname">
                        <FormItem>
                            <FormLabel>Fullname</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Ex:John doe" v-bind="componentField"
                                    icon="M11.9999 17C15.6623 17 18.8649 18.5751 20.607 20.9247L18.765 21.796C17.3473 20.1157 14.8473 19 11.9999 19C9.15248 19 6.65252 20.1157 5.23479 21.796L3.39355 20.9238C5.13576 18.5747 8.33796 17 11.9999 17ZM11.9999 2C14.7613 2 16.9999 4.23858 16.9999 7V10C16.9999 12.6888 14.8776 14.8818 12.2168 14.9954L11.9999 15C9.23847 15 6.9999 12.7614 6.9999 10V7C6.9999 4.31125 9.1222 2.11818 11.783 2.00462L11.9999 2ZM11.9999 4C10.4022 4 9.09623 5.24892 9.00499 6.82373L8.9999 7V10C8.9999 11.6569 10.343 13 11.9999 13C13.5976 13 14.9036 11.7511 14.9948 10.1763L14.9999 10V7C14.9999 5.34315 13.6567 4 11.9999 4Z" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                    <FormField v-slot="{ componentField }" name="email">
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Ex:Johndoe@financial.com" v-bind="componentField"
                                    icon="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                    <FormField v-slot="{ componentField }" name="password">
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="Enter your password" v-bind="componentField" @input="
                                    updatePasswordStrength(
                                        componentField.modelValue
                                    )
                                    "
                                    icon="M18 8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8ZM5 10V20H19V10H5ZM11 14H13V16H11V14ZM7 14H9V16H7V14ZM15 14H17V16H15V14ZM16 8V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8H16Z" />
                            </FormControl>
                            <FormDescription class="w-full text-xs">
                                Must contain 1 uppercase letter, 1 number, min.
                                8 characters.
                            </FormDescription>
                            <PasswordSterngthBar :strengthLevel="passwordStrength" />
                            <FormMessage />
                        </FormItem>
                    </FormField>
                </div>
                <Button type="submit" :variant="variantBtn"> Submit </Button>
                <FormFooter>
                    <template v-slot:text>
                        By clicking Register, you agree to accept LOGO
                        Financial's
                    </template>
                    Terms and Condition
                </FormFooter>
            </form>
        </main>
        <Footer />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import PasswordSterngthBar from '@/components/ui/passwordSterngthBar/PasswordSterngthBar.vue'
import Nav from '@/components/navbar-auth/Nav.vue'
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
import Footer from '@/components/footer-auth/Footer.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

let variantBtn = ref('disabled')
const passwordStrength = ref(0)

const updatePasswordStrength = (password) => {
    let strength = 0
    if (password.length >= 8) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/[0-9]/.test(password)) strength++
    if (password.length >= 12) strength++
    passwordStrength.value = strength
    if (strength == 4) {
        variantBtn.value = 'default'
    } else {
        variantBtn.value = 'disabled'
    }
}

const formSchema = toTypedSchema(
    z.object({
        fullname: z
            .string()
            .min(2, 'Fullname must be at least 2 characters long')
            .max(50, 'Fullname must be less than 50 characters'),
        email: z.string().email('Invalid email address'),
        password: z
            .string()
            .min(8, 'Password must be at least 8 characters long')
            .regex(
                /[A-Z]/,
                'Password must contain at least one uppercase letter'
            )
            .regex(/[0-9]/, 'Password must contain at least one number'),
    })
)

const form = useForm({
    validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
    console.log('Form submitted!', values)
    router.push('/register/onboarding')
})
</script>

<style lang="scss" scoped></style>
