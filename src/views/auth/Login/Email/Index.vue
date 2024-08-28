<template>
    <div class="container-content">
        <Nav link="false" />
        <main class="flex justify-center">
            <form @submit="onSubmit" class="form-style">
                <FormIcon
                    pathIcon="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z" />
                <FormHeader title="To login, check your email">
                    <template v-slot:desc>
                        For security, we’ve sent you an email to
                        <span class="font-bold text-custom-greyscale-600">nunezserigala@gmail.com</span>. Simply click
                        the link in the email and you’ll be set.
                    </template>
                </FormHeader>
                <FormFooter>
                    <template v-slot:text> Didn’t get an email? </template>
                    Send it again
                </FormFooter>
            </form>
        </main>
        <Footer not-language-selection="true" copyright="false"/>
    </div>
</template>

<script setup>
import Footer from '@/components/footer-auth/Footer.vue'
import Nav from '@/components/navbar-auth/Nav.vue'
import FormFooter from '@/components/ui/form/FormFooter.vue'
import FormHeader from '@/components/ui/form/FormHeader.vue'
import FormIcon from '@/components/ui/form/FormIcon.vue'
</script>

<style lang="scss" scoped></style>
