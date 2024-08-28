<template>
    <div class="container-content">
        <Nav link="false"></Nav>
        <main class="flex justify-center">
            <form @submit="onSubmit" class="form-style">
                <div
                    class="user__custom relative ml-[50%] flex h-[117px] w-[117px] translate-x-[-50%] items-center justify-center rounded-[100%] lg:h-[157px] lg:w-[157px]"
                >
                    <button
                        class="flex h-[77px] w-[77px] justify-center rounded-[100%] bg-slate-100 drop-shadow-sm lg:h-[117px] lg:w-[117px] lg:px-2 lg:py-4"
                    >
                        <img
                            class="relative w-full"
                            src="@/assets/images/success.svg"
                            alt=""
                        />
                    </button>
                </div>
                <FormHeader title="Success send a link">
                    <template v-slot:desc>
                        Open link at your email and reset your password and make
                        a new password again.
                    </template>
                </FormHeader>
            </form>
        </main>
        <Footer not-language-selection="true"></Footer>
    </div>
</template>

<script setup>
import Footer from '@/components/footer-auth/Footer.vue'
import Nav from '@/components/navbar-auth/Nav.vue'
import FormHeader from '@/components/ui/form/FormHeader.vue'
import { onMounted } from 'vue';
import router from '@/router';


onMounted(() => {
    setTimeout(() => {
        router.push('/')
    }, 2000);
})
</script>

<style lang="scss" scoped>
.user__custom {
    background: linear-gradient(
        to bottom,
        #eceff3 0%,
        rgba(236, 239, 243, 0) 100%
    );
    border: 1px solid #dfe1e7;
}

.user__custom > button {
    border: 1px solid #dfe1e7;
}

</style>
