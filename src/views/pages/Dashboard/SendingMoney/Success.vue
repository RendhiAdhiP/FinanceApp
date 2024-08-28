<template>
    <FormLayout>
        <div
            class="mt-10 flex h-auto w-full flex-col items-center gap-4 self-center rounded-2xl border border-solid border-[#DFE1E7] shadow-md drop-shadow-sm md:mt-0 md:w-[470px] md:gap-6 lg:w-[490px]">
            <div class="relative w-full pt-11 md:pt-20 lg:pt-11">
                <div
                    class="user__custom relative z-10 ml-[50%] flex h-[117px] w-[117px] translate-x-[-50%] items-center justify-center rounded-[100%] lg:h-[157px] lg:w-[157px]">
                    <button
                        class="flex h-[77px] w-[77px] justify-center rounded-[100%] bg-slate-100 drop-shadow-sm lg:h-[117px] lg:w-[117px] lg:px-2 lg:py-4">
                        <img class="relative w-full" src="@/assets/images/success.svg" alt="" />
                    </button>
                </div>
                <img class="absolute left-[50%] top-[50%] mt-5 w-[420px] translate-x-[-50%] translate-y-[-50%]"
                    src="@/assets/images/Confetti.png" alt="" />
            </div>
            <div class="flex flex-col items-center p-6">
                <h2 class="text-center text-xl font-medium text-custom-greyscale-600 sm:text-2xl md:text-[32px]">
                    Transaction successful
                </h2>
                <p class="text-center text-sm text-custom-greyscale-500 md:text-base">
                    Horay, your transaction is successful.
                </p>
            </div>
            <div class="flex w-full justify-start px-5 py-2 font-medium text-custom-greyscale-400">
                RECIPENT DETAILS
            </div>
            <div class="flex w-full items-center gap-4 px-5 py-2 font-medium text-custom-greyscale-400">
                <div class="w-14">
                    <img src="@/assets/Icon/Avatar/12.png" alt="" />
                </div>
                <div class="flex flex-col text-custom-greyscale-900">
                    <span class="text-base font-medium">John Doe</span>
                    <span class="text-sm font-normal">
                        •••••••2392
                        <span class="text-custom-greyscale-500">•</span>
                        ABC Bank</span>
                </div>
            </div>
            <div class="flex w-full flex-col gap-4 p-6">
                <div class="flex justify-between text-base">
                    <div class="text-custom-greyscale-400">
                        You send exactly
                    </div>
                    <div class="font-medium text-custom-alertsuccess-100">
                        1 USD
                    </div>
                </div>
                <div class="flex justify-between text-base">
                    <div class="text-custom-greyscale-400">Recipent Gets</div>
                    <div class="font-medium text-custom-alertsuccess-100">
                        0.30 USD
                    </div>
                </div>
            </div>
            <div class="flex w-full flex-col justify-between gap-4 border-t p-6 md:flex-row">
                <Button type="submit" variant="outline" size="lg" class="w-full">
                    View Transaction
                </Button>
                <RouterLink to="/dashboard" class="w-full">
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
import { RouterLink } from 'vue-router'

const progress = {
    title: 'SENDING MONEY PROCESS',
    step1: 'Amount',
    step2: 'Personal Details',
    step3: 'Recipient',
    step4: 'Review and Pay',
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
