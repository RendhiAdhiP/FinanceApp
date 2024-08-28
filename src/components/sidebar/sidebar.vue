<template>
    <div class="fixed z-30 flex w-full items-center justify-between gap-2 bg-white px-5 py-6 shadow-sm lg:hidden">
        <div class="flex w-full gap-2">
            <button @click="sidebarExpanded = !sidebarExpanded">
                <svg :width="sizeLogo" :height="sizeLogo" viewBox="0 0 36 36" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15.5885 0L25.9313 5.97142L6.14934 17.5152C5.2012 15.8737 5.76333 13.7743 7.40489 12.8261L19.1695 6.03101L15.5885 3.96349L3.43248 10.9817V22.9849L30.216 7.51508L29.0323 5.70013H36.1833L33.3229 12.2791L32.0934 10.3938L31.1769 10.9229V27L15.5885 36L5.00494 30.0136L8.48211 27.9493L8.49469 27.9565L13.5235 24.9922L25.1886 18.2546C26.1368 19.8962 25.5746 21.9956 23.9331 22.9437L11.8816 29.9045L15.5885 32.0365L27.7444 25.0183V12.9042L1.57245 28.0113L0 27V9L15.5885 0Z"
                        fill="black" />
                </svg>
            </button>
            <div class="">
                <h3 class="text-sm font-medium">Logo</h3>
                <p class="text-xs text-custom-greyscale-500">Finance App</p>
            </div>
        </div>
        <div id="hamburger-menu" class="relative h-4 w-6 cursor-pointer" @click="toggleSidebar">
            <span
                class="absolute top-0 block h-[2px] w-full rounded-full bg-black transition-transform duration-300 ease-in-out"></span>
            <span
                class="absolute top-2 block h-[2px] w-full rounded-full bg-black transition-opacity duration-300 ease-in-out"></span>
            <span
                class="absolute top-4 block h-[2px] w-full rounded-full bg-black transition-transform duration-300 ease-in-out"></span>
        </div>
    </div>
    <aside id="sidebar" :class="[
        'custom-scrollbar fixed z-20 flex h-svh flex-col justify-start overflow-y-scroll border border-solid border-[#DFE1E7] md:gap-10 lg:justify-between transition-all duration-500 ease-in-out',
        sidebarExpanded
            ? 'flex md:w-full lg:w-64 w-'
            : 'hidden lg:w-max lg:items-center ',
        'mt-[60px] w-full justify-start gap-10 bg-slate-50 py-2 md:justify-start lg:mt-0 lg:flex ',
    ]">
        <header class="">
            <div :class="`flex flex-col gap-4`">
                <div class="hidden items-center justify-between gap-2 px-5 py-6 lg:flex">
                    <div class="flex gap-2">
                        <button @click="sidebarExpanded = !sidebarExpanded">
                            <svg :width="sizeLogo" :height="sizeLogo" viewBox="0 0 36 36" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.5885 0L25.9313 5.97142L6.14934 17.5152C5.2012 15.8737 5.76333 13.7743 7.40489 12.8261L19.1695 6.03101L15.5885 3.96349L3.43248 10.9817V22.9849L30.216 7.51508L29.0323 5.70013H36.1833L33.3229 12.2791L32.0934 10.3938L31.1769 10.9229V27L15.5885 36L5.00494 30.0136L8.48211 27.9493L8.49469 27.9565L13.5235 24.9922L25.1886 18.2546C26.1368 19.8962 25.5746 21.9956 23.9331 22.9437L11.8816 29.9045L15.5885 32.0365L27.7444 25.0183V12.9042L1.57245 28.0113L0 27V9L15.5885 0Z"
                                    fill="black" />
                            </svg>
                        </button>
                        <div v-show="sidebarExpanded" class="">
                            <h3 class="text-sm font-medium">Logo</h3>
                            <p class="text-xs text-custom-greyscale-500">
                                Finance App
                            </p>
                        </div>
                    </div>
                    <button v-show="sidebarExpanded" @click="toggleSidebar"
                        class="rounded-full border border-solid border-custom-greyscale-100 px-3 py-3">
                        <Icon sidebarButton="true"
                            Icon="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z   " />
                    </button>
                </div>
                <nav class="flex flex-col gap-3 px-3">
                    <h5 class="text-xs text-custom-greyscale-400">MAIN</h5>
                    <ul class="gap-2 text-sm">
                        <RouterLink to="/dashboard">
                            <li
                                :class="['flex cursor-pointer items-center gap-3 py-[9px]', sidebarExpanded ? 'pl-3 pr-2 justify-start' : 'justify-center', route.path == '/dashboard' ? 'border border-custom-greyscale-100 rounded-[6px]' : '']">
                                <HomeActive v-show="route.path == '/dashboard'" />
                                <HomeUnactive v-show="route.path != '/dashboard'" />
                                <span v-show="sidebarExpanded" :class="[route.path == '/dashboard' ? 'text-custom-greyscale-900 font-semibold' : 'text-custom-greyscale-500 font-medium']" >Dashboard</span>
                            </li>
                        </RouterLink>
                        <RouterLink to="/balance">
                            <li
                                :class="['flex cursor-pointer items-center gap-3 py-[9px]', sidebarExpanded ? 'pl-3 pr-2 justify-start' : 'justify-center', route.path == '/balance' ? 'border border-custom-greyscale-100 rounded-[6px]' : '']">
                                <BalanceActive v-show="route.path == '/balance'" />
                                <BalanceUnactive v-show="route.path != '/balance'" />
                                <span v-show="sidebarExpanded" :class="[route.path == '/balance' ? 'text-custom-greyscale-900 font-semibold' : 'text-custom-greyscale-500 font-medium']" >Balance</span>
                            </li>
                        </RouterLink>
                        <RouterLink to="/cards">
                            <li
                                :class="['flex cursor-pointer items-center gap-3 py-[9px]', sidebarExpanded ? 'pl-3 pr-2 justify-start' : 'justify-center', route.path == '/cards' ? 'border border-custom-greyscale-100 rounded-[6px]' : '']">
                                <CardsActive v-show="route.path == '/cards'" />
                                <CardsUnactive v-show="route.path != '/cards'" />
                                <span v-show="sidebarExpanded" :class="[route.path == '/cards' ? 'text-custom-greyscale-900 font-semibold' : 'text-custom-greyscale-500 font-medium']" >Cards</span>
                            </li>
                        </RouterLink>
                        <RouterLink to="/transactions">
                            <li
                                :class="['flex cursor-pointer items-center gap-3 py-[9px]', sidebarExpanded ? 'pl-3 pr-2 justify-start' : 'justify-center', route.path == '/transactions' ? 'border border-custom-greyscale-100 rounded-[6px]' : '']">
                                <TransactionActive v-show="route.path == '/transactions'" />
                                <TransactionUnactive v-show="route.path != '/transactions'" />
                                <span v-show="sidebarExpanded" :class="[route.path == '/transactions' ? 'text-custom-greyscale-900 font-semibold' : 'text-custom-greyscale-500 font-medium']" >Transactions</span>
                            </li>
                        </RouterLink>
                        <RouterLink to="/recepients">
                            <li
                                :class="['flex cursor-pointer items-center gap-3 py-[9px]', sidebarExpanded ? 'pl-3 pr-2 justify-start' : 'justify-center', route.path == '/recepients' ? 'border border-custom-greyscale-100 rounded-[6px]' : '']">
                                <RecepientsActive v-show="route.path == '/recepients'" />
                                <RecepientsUnactive v-show="route.path != '/recepients'" />
                                <span v-show="sidebarExpanded" :class="[route.path == '/recepients' ? 'text-custom-greyscale-900 font-semibold' : 'text-custom-greyscale-500 font-medium']" >Recepients</span>
                            </li>
                        </RouterLink>
                    </ul>
                </nav>
                <nav class="flex flex-col gap-3 px-3">
                    <h5 class="text-xs text-custom-greyscale-400">OTHER</h5>
                    <ul class="gap-2 text-sm">
                        <RouterLink to="/integrations">
                            <li
                                :class="['flex cursor-pointer items-center gap-3 py-[9px]', sidebarExpanded ? 'pl-3 pr-2 justify-start' : 'justify-center', route.path == '/integrations' ? 'border border-custom-greyscale-100 rounded-[6px]' : '']">
                                <IntegrationsActive v-show="route.path == '/integrations'" />
                                <IntegrationsUnactive v-show="route.path != '/integrations'" />
                                <span v-show="sidebarExpanded" :class="[route.path == '/integrations' ? 'text-custom-greyscale-900 font-semibold' : 'text-custom-greyscale-500 font-medium']" >Integrations</span>
                            </li>
                        </RouterLink>

                        <RouterLink to="/settings">
                            <li
                                :class="['flex cursor-pointer items-center gap-3 py-[9px]', sidebarExpanded ? 'pl-3 pr-2 justify-start' : 'justify-center', route.path == '/settings' ? 'border border-custom-greyscale-100 rounded-[6px]' : '']">
                                <SettingsActive v-show="route.path == '/settings'" />
                                <SettingsUnactive v-show="route.path != '/settings'" />
                                <span v-show="sidebarExpanded" :class="[route.path == '/settings' ? 'text-custom-greyscale-900 font-semibold' : 'text-custom-greyscale-500 font-medium']" >Settings</span>
                            </li>
                        </RouterLink>
                        <RouterLink to="#">
                            <li
                                :class="['flex cursor-pointer items-center gap-3 py-[9px]', sidebarExpanded ? 'pl-3 pr-2 justify-start' : 'justify-center', route.path == '/#' ? 'border border-custom-greyscale-100 rounded-[6px]' : '']">
                                <GetHelpUnactive />
                                <span v-show="sidebarExpanded" :class="[route.path == '/#' ? 'text-custom-greyscale-900 font-semibold' : 'text-custom-greyscale-500 font-medium']" >Get Help</span>
                            </li>
                        </RouterLink>
                    </ul>
                </nav>
            </div>
        </header>
        <footer :class="`flex flex-col gap-2 px-4 md:mt-[45%] lg:mt-0`">
            <div v-show="sidebarExpanded" class="flex flex-col gap-[9px] px-3 py-3 lg:px-0 lg:py-0">
                <div class="flex justify-between">
                    <div class="flex gap-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                </div>
                <p class="text-xs text-custom-greyscale-500">
                    contact with one of our experts to get supports
                </p>
                <Button v-show="device.isMobile == true || device.isTablet == true" class="max-w-36 px-4 py-2 text-sm"
                    variant="outline" size="xs">Contact Us</Button>
                <Button v-show="device.isDesktop" class="w-full px-4 py-2 text-sm" variant="outline"
                    size="custom">Contact Us</Button>
            </div>
            <div class="flex px-3 py-3 lg:gap-2 lg:p-0">
                <div class="flex w-full items-center gap-3">
                    <div :class="{
                        'h-10 w-10 lg:h-8 lg:w-8': sidebarExpanded,
                        'relative right-2 h-8 w-8 lg:right-0':
                            !sidebarExpanded,
                    }">
                        <img src="../../assets/Icon/Avatar/24.png" class="w-full" alt="" />
                    </div>
                    <RouterLink to="/settings" v-show="sidebarExpanded" class="flex flex-col">
                        <h5 class="text-sm font-semibold">Alexander</h5>
                        <p class="text-xs text-custom-greyscale-400">
                            John@mail.com
                        </p>
                    </RouterLink>
                </div>
                <button v-show="sidebarExpanded"
                    class="rounded-full border border-solid border-custom-greyscale-100 p-3">
                    <Icon sidebarButton="true"
                        Icon="M13.1715 12.0007L8.22168 7.05093L9.6359 5.63672L15.9999 12.0007L9.6359 18.3646L8.22168 16.9504L13.1715 12.0007Z" />
                </button>
            </div>
        </footer>
    </aside>
</template>

<script setup>
import {
    inject,
    onMounted,
    onUnmounted,
    provide,
    ref,
    watch,
    defineEmits,
} from 'vue'
import Icon from '../icon/Icon.vue'
import { RouterLink } from 'vue-router'
import Button from '../ui/button/Button.vue'
import { sidebarExpand } from '@/lib/data'
import { useRoute } from 'vue-router'

import HomeActive from '@/assets/Icon/DashboardIcon/active/HomeActive.vue'
import HomeUnactive from '@/assets/Icon/DashboardIcon/unactive/HomeUnactive.vue'
import BalanceActive from '@/assets/Icon/DashboardIcon/active/BalanceActive.vue'
import BalanceUnactive from '@/assets/Icon/DashboardIcon/unactive/BalanceUnactive.vue'
import CardsActive from '@/assets/Icon/DashboardIcon/active/CardsActive.vue'
import CardsUnactive from '@/assets/Icon/DashboardIcon/unactive/CardsUnactive.vue'
import TransactionActive from '@/assets/Icon/DashboardIcon/active/TransactionActive.vue'
import TransactionUnactive from '@/assets/Icon/DashboardIcon/unactive/TransactionUnactive.vue'
import RecepientsActive from '@/assets/Icon/DashboardIcon/active/RecepientsActive.vue'
import RecepientsUnactive from '@/assets/Icon/DashboardIcon/unactive/RecepientsUnactive.vue'
import IntegrationsActive from '@/assets/Icon/DashboardIcon/active/IntegrationsActive.vue'
import IntegrationsUnactive from '@/assets/Icon/DashboardIcon/unactive/IntegrationsUnactive.vue'
import SettingsActive from '@/assets/Icon/DashboardIcon/active/SettingsActive.vue'
import SettingsUnactive from '@/assets/Icon/DashboardIcon/unactive/SettingsUnactive.vue'
import GetHelpUnactive from '@/assets/Icon/DashboardIcon/unactive/GetHelpUnactive.vue'

const route = useRoute()
const sizeLogo = ref()
const widthScreen = ref(window.innerWidth)
const sidebarExpanded = ref('false')
const sidebarSize = ref('')
const header = ref('')
const device = ref({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
})
const hamburgerMenu = ref(null)
const emit = defineEmits(['sidebarExpanded'])

const toggleSidebar = () => {
    sidebarExpanded.value = !sidebarExpanded.value
    emit('sidebarExpanded', sidebarExpanded.value)
}

const updateWidth = () => {
    widthScreen.value = window.innerWidth

    if (widthScreen.value < 768) {
        sizeLogo.value = 32
        device.value.isMobile = true
        device.value.isDesktop = false
        sidebarExpanded.value = false
        if (sidebarExpanded.value == false) {
            hamburgerMenu.value.classList.remove('active')
        }
    } else {
        sizeLogo.value = 36
        device.value.isMobile = false
        device.value.isTablet = true
        sidebarExpanded.value = false

        if (widthScreen.value >= 1024) {
            device.value.isTablet = false
            device.value.isDesktop = true
            sidebarExpanded.value = 'true'
        }
    }

    emit('sidebarExpanded', sidebarExpanded.value)
}

watch(sidebarExpanded, (newVal, oldVal) => {
    emit('sidebarExpanded', newVal)
    sidebarExpand.isSidebarExpanded = newVal
    if (newVal == !oldVal) {
        if (device.value.isMobile == true || device.value.isTablet == true) {
            sidebarSize.value = 'w-ful'
            if (newVal == true) {
                hamburgerMenu.value.classList.add('active')
            } else {
                hamburgerMenu.value.classList.remove('active')
            }
        } else {
            sidebarSize.value = 'w-64'
        }
    } else {
        if (device.value.isMobile == true || device.value.isTablet == true) {
            sidebarSize.value = 'hidden'
            header.value = 'flex'
        } else {
            sidebarSize.value = 'flex'
        }
    }
})

onMounted(() => {
    hamburgerMenu.value = document.getElementById('hamburger-menu')
    updateWidth()

    window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
    updateWidth()

    window.removeEventListener('resize', updateWidth)
})

provide('sidebar', sidebarExpanded.value)
</script>

<style lang="scss" scoped>
.active span:nth-child(1) {
    transform: translateY(0.5rem) rotate(45deg);
}

.active span:nth-child(2) {
    opacity: 0;
}

.active span:nth-child(3) {
    transform: translateY(-0.5rem) rotate(-45deg);
}
</style>
