<template>
    <FormLayout>
        <div
            class="mt-16 flex h-auto w-full flex-col items-center gap-4 self-center overflow-hidden rounded-2xl border border-solid border-[#DFE1E7] shadow-md drop-shadow-sm sm:w-[390px] md:mt-0 md:w-[420px] md:gap-6 lg:w-[440px]">
            <div class="relative w-full pt-11 md:pt-20 lg:pt-11">
                <div
                    class="user__custom relative z-10 ml-[50%] flex h-[117px] w-[117px] translate-x-[-50%] items-center justify-center rounded-[100%] lg:h-[157px] lg:w-[157px]">
                    <button
                        class="flex h-[77px] w-[77px] justify-center rounded-[100%] bg-slate-100 drop-shadow-sm lg:h-[117px] lg:w-[117px] lg:px-2 lg:py-4">
                        <img class="relative w-full" src="@/assets/images/success.svg" alt="" />
                    </button>
                </div>
                <img class="absolute left-[50%] top-[50%] mt-5 w-[410px] translate-x-[-50%] translate-y-[-50%]"
                    src="@/assets/images/Confetti.png" alt="" />
            </div>
            <div class="flex flex-col items-center gap-2 p-6">
                <h2 class="text-center text-2xl font-medium text-custom-greyscale-600 md:text-[32px]">
                    Your card is on its way!
                </h2>
                <p class="text-center text-sm text-custom-greyscale-500 md:text-base">
                    Your LOGO debit card should be with oyu by
                    <span class="font-medium text-custom-greyscale-700">
                        6 May 2024.</span>
                </p>
            </div>

            <div class="flex w-full flex-col justify-between gap-4 p-6 md:flex-row">
                <RouterLink to="/cards" class="w-full">
                    <Button :variant="variantBtn" size="lg" class="w-full">
                        Done
                    </Button>
                </RouterLink>
            </div>
        </div>
    </FormLayout>
</template>

<script setup>
import Button from '@/components/ui/button/Button.vue'
import FormLayout from '@/Layouts/FormLayout.vue'
import { provide } from 'vue'

const progress = {
    title: 'GETTING YOUR CARD',
    step1: 'Card',
    step2: 'Addresss',
    step3: 'Payment',
    step4: 'Verification',
    step5: 'Success',
}

const headerProgress = {
    title: 'Success',
    description: 'Horay your transaction is complete',
    Icon: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z',
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
