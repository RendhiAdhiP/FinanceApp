<template>
    <div class="container-content">
        <Nav link="false"></Nav>
        <main class="flex justify-center">
            <form @submit="onSubmit" class="form-style">
                <FormIcon
                    pathIcon="M18 8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8ZM16 8V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8H16ZM11 14V16H13V14H11ZM7 14V16H9V14H7ZM15 14V16H17V14H15Z" />
                <FormHeader title="Forgot Your Password">
                    <template v-slot:desc>
                        Enter your email and we will send you a link to reset
                        your password.
                    </template>
                </FormHeader>
                <div class="wrapper">
                    <FormField v-slot="{ componentField }" name="email">
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Enter your email" v-bind="componentField"
                                    icon="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                </div>
                <RouterLink to="/reset-password/success">
                    <Button class="w-full">Send Email</Button>
                </RouterLink>
            </form>
        </main>
        <Footer not-language-selection="true"></Footer>
    </div>
</template>

<script setup>
import Footer from '@/components/footer-auth/Footer.vue'
import Nav from '@/components/navbar-auth/Nav.vue'
import Button from '@/components/ui/button/Button.vue'
// import FormFooter from '@/components/ui/form/FormFooter.vue';
import FormIcon from '@/components/ui/form/FormIcon.vue'
// import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

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
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped></style>
