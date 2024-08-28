<template>
    <aside
        class="fixed lg:z-10 flex h-screen w-full flex-col justify-between border-[#DFE1E7] bg-transparent overflow-y-scroll md:w-[260px] md:border-r">
        <section
            class="hidden w-full items-center md:flex  md:flex-col md:items-start md:gap-3 md:px-3">
            <span class="hidden px-2 py-4 text-xs text-custom-greyscale-400 md:block">{{ step.title }}</span>
            <div
                :class="['flex items-center gap-3 px-3 py-3 md:w-full lg:py-[9px]', route.path == '/sending-money/amount' || route.path == '/cards/add-card/onboarding' ? 'rounded-full border border-[#1A1B25] text-custom-greyscale-700' : 'text-custom-greyscale-400']">
                <div
                    :class="['flex h-[28px] w-[28px] items-center justify-center rounded-[100%] border border-solid border-custom-greyscale-100 font-medium', stepPosition['step1'] == true ? 'px-1 py-1' : 'px-2 py-2']">
                    <span v-show="stepPosition['step1'] == false">1</span>
                    <Icon v-show="stepPosition['step1'] == true" customClassIcon="w-full h-full"
                        fillCollorIcon="fill-[#40C4AA]" :Icon="checklisIcon" />
                </div>
                <p class="text-xs font-medium xs:hidden md:flex lg:text-sm">
                    {{ step.step1 }}
                </p>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="md:hidden">
                <path
                    d="M13.1715 12.0007L8.22168 7.05093L9.6359 5.63672L15.9999 12.0007L9.6359 18.3646L8.22168 16.9504L13.1715 12.0007Z"
                    fill="black" />
            </svg>

            <div
                :class="['flex items-center gap-3 px-3 py-3 md:w-full lg:py-[9px]', route.path == '/sending-money/personal-details' || route.path == '/cards/add-card/address' ? 'rounded-full border border-[#1A1B25] text-custom-greyscale-700' : 'text-custom-greyscale-400']">
                <div
                    :class="['flex h-[28px] w-[28px] items-center justify-center rounded-[100%] border border-solid border-custom-greyscale-100 font-medium', stepPosition['step2'] == true ? 'px-1 py-1' : 'px-2 py-2']">
                    <span v-show="stepPosition['step2'] == false">2</span>
                    <Icon v-show="stepPosition['step2'] == true" customClassIcon="w-full h-full"
                        fillCollorIcon="fill-[#40C4AA]" :Icon="checklisIcon" />
                </div>
                <p class="text-xs font-medium xs:hidden md:flex lg:text-sm">
                    {{ step.step2 }}
                </p>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="md:hidden">
                <path
                    d="M13.1715 12.0007L8.22168 7.05093L9.6359 5.63672L15.9999 12.0007L9.6359 18.3646L8.22168 16.9504L13.1715 12.0007Z"
                    fill="black" />
            </svg>
            <div
                :class="['flex items-center gap-3 px-3 py-3 md:w-full lg:py-[9px]', route.path == '/sending-money/recipient' || route.path == '/cards/add-card/verification' ? 'rounded-full border border-[#1A1B25] text-custom-greyscale-700' : 'text-custom-greyscale-400']">
                <div
                    :class="['flex h-[28px] w-[28px] items-center justify-center rounded-[100%] border border-solid border-custom-greyscale-100 font-medium', stepPosition['step3'] == true ? 'px-1 py-1' : 'px-2 py-2']">
                    <span v-show="stepPosition['step3'] == false">3</span>
                    <Icon v-show="stepPosition['step3'] == true" customClassIcon="w-full h-full"
                        fillCollorIcon="fill-[#40C4AA]" :Icon="checklisIcon" />
                </div>
                <p class="text-xs font-medium xs:hidden md:flex lg:text-sm">
                    {{ step.step3 }}
                </p>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="md:hidden">
                <path
                    d="M13.1715 12.0007L8.22168 7.05093L9.6359 5.63672L15.9999 12.0007L9.6359 18.3646L8.22168 16.9504L13.1715 12.0007Z"
                    fill="black" />
            </svg>
            <div
                :class="['flex items-center gap-3 px-3 py-3 md:w-full lg:py-[9px]', route.path == '/sending-money/review-and-pay' || route.path == '/cards/add-card/payment' ? 'rounded-full border border-[#1A1B25] text-custom-greyscale-700' : 'text-custom-greyscale-400']">
                <div
                    :class="['flex h-[28px] w-[28px] items-center justify-center rounded-[100%] border border-solid border-custom-greyscale-100 font-medium', stepPosition['step4'] == true ? 'px-1 py-1' : 'px-2 py-2']">
                    <span v-show="stepPosition['step4'] == false">4</span>
                    <Icon v-show="stepPosition['step4'] == true" customClassIcon="w-full h-full"
                        fillCollorIcon="fill-[#40C4AA]" :Icon="checklisIcon" />
                </div>
                <p class="text-xs font-medium xs:hidden md:flex lg:text-sm">
                    {{ step.step4 }}
                </p>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="md:hidden">
                <path
                    d="M13.1715 12.0007L8.22168 7.05093L9.6359 5.63672L15.9999 12.0007L9.6359 18.3646L8.22168 16.9504L13.1715 12.0007Z"
                    fill="black" />
            </svg>
            <div
                :class="['flex items-center gap-3 px-3 py-3 md:w-full lg:py-[9px]', route.path == '/sending-money/success' || route.path == '/cards/add-card/success' ? 'rounded-full border border-[#1A1B25] text-custom-greyscale-700' : 'text-custom-greyscale-400']">
                <div
                    class="flex h-[28px] w-[28px] items-center justify-center rounded-[100%] border border-solid border-custom-greyscale-100 px-2 py-2 font-medium">
                    5
                </div>
                <p class="text-xs font-medium xs:hidden md:flex lg:text-sm">
                    {{ step.step5 }}
                </p>
            </div>
        </section>
        <section class="hidden flex-col gap-[9px] px-3 py-3 md:flex">
            <header class="flex justify-between">
                <div class="flex gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="md:hidden">
                        <path
                            d="M19.9381 8H21C22.1046 8 23 8.89543 23 10V14C23 15.1046 22.1046 16 21 16H19.9381C19.446 19.9463 16.0796 23 12 23V21C15.3137 21 18 18.3137 18 15V9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9V16H3C1.89543 16 1 15.1046 1 14V10C1 8.89543 1.89543 8 3 8H4.06189C4.55399 4.05369 7.92038 1 12 1C16.0796 1 19.446 4.05369 19.9381 8ZM3 10V14H4V10H3ZM20 10V14H21V10H20ZM7.75944 15.7849L8.81958 14.0887C9.74161 14.6662 10.8318 15 12 15C13.1682 15 14.2584 14.6662 15.1804 14.0887L16.2406 15.7849C15.0112 16.5549 13.5576 17 12 17C10.4424 17 8.98882 16.5549 7.75944 15.7849Z"
                            fill="black" />
                    </svg>
                    <h5 class="text-sm font-medium">Need Support?</h5>
                </div>
                <svg width="20" height="20" class="cursor-pointer" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"
                        fill="black" />
                </svg>
            </header>
            <p class="text-xs text-custom-greyscale-500">
                contact with one of our experts to get supports
            </p>
            <Button class="w-full text-sm " variant="outline" size="lg">
                Contact Us
            </Button>
        </section>
    </aside>
</template>

<script setup>
import { inject, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Icon from '../icon/Icon.vue';
import Button from '../ui/button/Button.vue';

const route = useRoute()
const step = inject('progress')
const stepPosition = ref({
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    step5: false
})
const checklisIcon = 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z'


if (route.path == '/sending-money/amount' || route.path == '/cards/add-card/onboarding') {
    stepPosition.value['step1'] = false
    stepPosition.value['step2'] = false
    stepPosition.value['step3'] = false
    stepPosition.value['step4'] = false
    stepPosition.value['step5'] = false

} else if (route.path == '/sending-money/personal-details' || route.path == '/cards/add-card/address') {
    stepPosition.value['step1'] = true
    stepPosition.value['step2'] = false
    stepPosition.value['step3'] = false
    stepPosition.value['step4'] = false
    stepPosition.value['step5'] = false

} else if (route.path == '/sending-money/recipient' || route.path == '/cards/add-card/verification') {
    stepPosition.value['step1'] = true
    stepPosition.value['step2'] = true
    stepPosition.value['step3'] = false
    stepPosition.value['step4'] = false
    stepPosition.value['step5'] = false

} else if (route.path == '/sending-money/review-and-pay' || route.path == '/cards/add-card/payment') {
    stepPosition.value['step1'] = true
    stepPosition.value['step2'] = true
    stepPosition.value['step3'] = true
    stepPosition.value['step4'] = false
    stepPosition.value['step5'] = false

} else if (route.path == '/sending-money/success' || route.path == '/cards/add-card/success') {
    stepPosition.value['step1'] = true
    stepPosition.value['step2'] = true
    stepPosition.value['step3'] = true
    stepPosition.value['step4'] = true
    stepPosition.value['step5'] = false
}

</script>

<style lang="scss" scoped></style>
