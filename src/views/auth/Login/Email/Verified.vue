<template>
    <div class="container-content">
        <Nav link="false"></Nav>
        <main class="flex justify-center">
            <form @submit="onSubmit" class="form-style">
                <FormIcon
                    pathIcon="M22 13.3414C21.3744 13.1203 20.7013 13 20 13C16.6863 13 14 15.6863 14 19C14 19.7013 14.1203 20.3744 14.3414 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V13.3414ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829ZM19 22L15.4645 18.4645L16.8787 17.0503L19 19.1716L22.5355 15.636L23.9497 17.0503L19 22Z" />
                <FormHeader title="Email Verified">
                    <template v-slot:desc>
                        Your email address John doe@gmail.com S has been
                        verified. In the future, you need to use this email
                        address when logging in to ketro
                    </template>
                </FormHeader>
                <Button>Continue</Button>
            </form>
        </main>
        <Footer not-language-selection="true"></Footer>
    </div>
</template>

<script setup>
import Footer from '@/components/footer-auth/Footer.vue'
import Nav from '@/components/navbar-auth/Nav.vue'
import Button from '@/components/ui/button/Button.vue'
import FormFooter from '@/components/ui/form/FormFooter.vue'
import FormHeader from '@/components/ui/form/FormHeader.vue'
import FormIcon from '@/components/ui/form/FormIcon.vue'
</script>

<style lang="scss" scoped></style>
