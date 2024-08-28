<script setup>
import { ref, watch, defineProps, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

import { Language } from '@/lib/countries.js'
import Icon from '../icon/Icon.vue'

const props = defineProps({
    navProgres: {
        type: Boolean,
        required: false,
        default: false,
    },
    link: {
        type: Boolean,
        required: false,
        default: true,
    },
    successStep2: {
        type: Boolean,
        required: false,
        default: false,
    },
    successStep3: {
        type: Boolean,
        required: false,
        default: false,
    },
    
})

const selectedItem = ref('ENG')
const pathTo = ref('')
const navMessage = ref('')
const label = ref('')
const widthScreen = ref(window.innerWidth)
const sizeLogo = ref(36)

const updateWidth = () => {
    widthScreen.value = window.innerWidth
    if (widthScreen.value < 768) {
        sizeLogo.value = 36
    } else {
        sizeLogo.value = 42
    }
}

onMounted(() => {
    updateWidth()
    window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
    updateWidth()
    window.removeEventListener('resize', updateWidth)
})



const stepIcon = ref({
    stepOne:
        'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z',
    stepTwo:
        'M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12.1597 16C10.1243 16 8.29182 16.8687 7.01276 18.2556C8.38039 19.3474 10.114 20 12 20C13.9695 20 15.7727 19.2883 17.1666 18.1081C15.8956 16.8074 14.1219 16 12.1597 16ZM12 4C7.58172 4 4 7.58172 4 12C4 13.8106 4.6015 15.4807 5.61557 16.8214C7.25639 15.0841 9.58144 14 12.1597 14C14.6441 14 16.8933 15.0066 18.5218 16.6342C19.4526 15.3267 20 13.7273 20 12C20 7.58172 16.4183 4 12 4ZM12 5C14.2091 5 16 6.79086 16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5ZM12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7Z',
    stepThree:
        'M12.382 3C12.7607 3 13.107 3.214 13.2764 3.55279L14 5H20C20.5523 5 21 5.44772 21 6V17C21 17.5523 20.5523 18 20 18H13.618C13.2393 18 12.893 17.786 12.7236 17.4472L12 16H5V22H3V3H12.382ZM11.7639 5H5V14H13.2361L14.2361 16H19V7H12.7639L11.7639 5Z',
    stepFour:
        'M18 2C18.5523 2 19 2.44772 19 3V10H17V4H7V20H12V22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2H18ZM18 12C19.6569 12 21 13.3431 21 15V16H22V21C22 21.5523 21.5523 22 21 22H15C14.4477 22 14 21.5523 14 21V16H15V15C15 13.3431 16.3431 12 18 12ZM20 18H16V20H20V18ZM18 14C17.4919 14 17 14.45 17 15V16H19V15C19 14.4477 18.5523 14 18 14Z',
    stepSuccess:
        'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z',
    arrow: 'M13.1715 12.0007L8.22168 7.05093L9.6359 5.63672L15.9999 12.0007L9.6359 18.3646L8.22168 16.9504L13.1715 12.0007Z',
})

const stepColor = ref({
    stepEnabledBorder: 'border-primary',
    stepDisabledBorder: 'border-custom-greyscale-100',
    stepDisabledText: 'text-custom-greyscale-500',
    colorStep1: 'success',
    colorStep2: 'normal',
    colorStep3: 'disabled',
    colorStep4: 'disabled',
})

watch(
    () => props.successStep2,
    (newVal, oldVal) => {
        if (newVal == true) {
            stepIcon.value.stepTwo = stepIcon.value.stepSuccess
            stepColor.value.colorStep2 = 'success'
            stepColor.value.colorStep3 = 'normal'
        }
    }
)
watch(
    () => props.successStep3,
    (newVal, oldVal) => {
        if (newVal == true) {
            stepIcon.value.stepThree = stepIcon.value.stepSuccess
            stepColor.value.colorStep3 = 'success'
            stepColor.value.colorStep4 = 'normal'
        }
    }
)

const country = Language

watch(() => {
    if (route.path == '/') {
        pathTo.value = '/register'
        navMessage.value = 'Don’t have an account?'
        label.value = 'Register'
    } else {
        pathTo.value = '/'
        label.value = 'Login'
        navMessage.value = 'Have an account?'
    }
})
</script>

<template>
    <header v-if="navProgres == false" class="flex-between-center">
        <div class="">
            <svg :width="sizeLogo" :height="sizeLogo" viewBox="0 0 36 36" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.5885 0L25.9313 5.97142L6.14934 17.5152C5.2012 15.8737 5.76333 13.7743 7.40489 12.8261L19.1695 6.03101L15.5885 3.96349L3.43248 10.9817V22.9849L30.216 7.51508L29.0323 5.70013H36.1833L33.3229 12.2791L32.0934 10.3938L31.1769 10.9229V27L15.5885 36L5.00494 30.0136L8.48211 27.9493L8.49469 27.9565L13.5235 24.9922L25.1886 18.2546C26.1368 19.8962 25.5746 21.9956 23.9331 22.9437L11.8816 29.9045L15.5885 32.0365L27.7444 25.0183V12.9042L1.57245 28.0113L0 27V9L15.5885 0Z"
                    fill="black" />
            </svg>
        </div>
        <div v-if="link == true" class="flex sm:items-center">
            <h2 class="xs:hidden sm:block sm:text-sm md:text-base">
                {{ navMessage }}
            </h2>
            <RouterLink :to="`${pathTo}`" class="xs:nav-xs sm:nav-sm md:text-base">{{ label }}</RouterLink>
        </div>
        <div v-else class="flex gap-1">
            <Select v-model="selectedItem">
                <SelectTrigger inForm="false" SelectLanguage="true">
                    <SelectValue :placeholder="selectedItem" showFlag="false" class="text-xs" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Language</SelectLabel>
                        <SelectItem v-for="lang in country" :key="lang.id" :value="lang.language_code">
                            {{ lang.language }}
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    </header>
    <header v-else class="flex-between-center relative">
        <div class="">
            <svg :width="sizeLogo" :height="sizeLogo" viewBox="0 0 36 36" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.5885 0L25.9313 5.97142L6.14934 17.5152C5.2012 15.8737 5.76333 13.7743 7.40489 12.8261L19.1695 6.03101L15.5885 3.96349L3.43248 10.9817V22.9849L30.216 7.51508L29.0323 5.70013H36.1833L33.3229 12.2791L32.0934 10.3938L31.1769 10.9229V27L15.5885 36L5.00494 30.0136L8.48211 27.9493L8.49469 27.9565L13.5235 24.9922L25.1886 18.2546C26.1368 19.8962 25.5746 21.9956 23.9331 22.9437L11.8816 29.9045L15.5885 32.0365L27.7444 25.0183V12.9042L1.57245 28.0113L0 27V9L15.5885 0Z"
                    fill="black" />
            </svg>
        </div>
        <div
            class="flex items-center xs:absolute xs:left-[50%] xs:top-[150%] xs:translate-x-[-50%] xs:gap-1 lg:relative lg:left-[0%] lg:translate-x-[0%] lg:gap-2">
            <div
                class="flex items-center gap-1 rounded-[99px] border border-solid border-primary md:py-1 md:pl-1 md:pr-2">
                <div class="rounded-[100%] border border-solid border-custom-greyscale-100 px-1 py-1">
                    <Icon progresIcon="true" :iconColor="stepColor.colorStep1" :Icon="stepIcon.stepOne" />
                </div>
                <p class="text-xs xs:hidden md:flex lg:text-sm">1.Email</p>
            </div>
            <Icon progresIcon="true" iconColor="disabled" :Icon="stepIcon.arrow" />
            <div
                class="flex items-center gap-1 rounded-[99px] border border-solid border-primary md:w-36 md:py-1 md:pl-1 md:pr-1 lg:w-40">
                <div class="rounded-[100%] border border-solid border-custom-greyscale-100 px-1 py-1">
                    <Icon progresIcon="true" :iconColor="stepColor.colorStep2" :Icon="stepIcon.stepTwo" />
                </div>
                <p class="text-xs xs:hidden md:flex lg:text-sm">
                    2.Account Type
                </p>
            </div>
            <Icon progresIcon="true" iconColor="disabled" :Icon="stepIcon.arrow" />
            <div
                class="flex items-center gap-1 rounded-[99px] border border-solid border-primary md:py-1 md:pl-1 md:pr-2">
                <div class="rounded-[100%] border border-solid border-custom-greyscale-100 px-1 py-1">
                    <Icon progresIcon="true" :iconColor="stepColor.colorStep3" :Icon="stepIcon.stepThree" />
                </div>
                <p class="text-xs xs:hidden md:flex lg:text-sm">3.Country</p>
            </div>
            <Icon progresIcon="true" iconColor="disabled" :Icon="stepIcon.arrow" />
            <div
                class="flex items-center gap-1 rounded-[99px] border border-solid border-primary md:py-1 md:pl-1 md:pr-2">
                <div class="rounded-[100%] border border-solid border-custom-greyscale-100 px-1 py-1">
                    <Icon progresIcon="true" :iconColor="stepColor.colorStep4" :Icon="stepIcon.stepFour" />
                </div>
                <p class="text-xs xs:hidden md:flex lg:text-sm">4.2FA</p>
            </div>
        </div>
        <div class="flex gap-1">
            <Select v-model="selectedItem">
                <SelectTrigger inForm="false" SelectLanguage="true">
                    <SelectValue :placeholder="selectedItem" showFlag="false" class="text-xs" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Language</SelectLabel>
                        <SelectItem v-for="lang in country" :key="lang.id" :value="lang.language_code">
                            {{ lang.language }}
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    </header>
</template>

<style lang="scss" scoped></style>
