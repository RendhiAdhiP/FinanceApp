<template>
    <DashboardLayout>
        <HeaderDashboard title-dashboard="Settings" sub-title="Customize and edit essential settings details."
            custom-class-sheet="" 
            title-button="Export" title-sheet="Export"
            icon="M18.1716 6.99955H11C7.68629 6.99955 5 9.68585 5 12.9996C5 16.3133 7.68629 18.9996 11 18.9996H20V20.9996H11C6.58172 20.9996 3 17.4178 3 12.9996C3 8.58127 6.58172 4.99955 11 4.99955H18.1716L15.636 2.46402L17.0503 1.0498L22 5.99955L17.0503 10.9493L15.636 9.5351L18.1716 6.99955Z">
        </HeaderDashboard>

        <nav class="custom-scrollbar w-full justify-start overflow-x-scroll">
            <ul
                class="flex gap-4 border-b-2 border-b-custom-greyscale-50 text-sm font-medium text-custom-greyscale-800 w-max md:w-full">
                <li
                    :class="['relative top-[2px] p-3 transition-all duration-300 ease-in-out', navigation == 'account' ? 'border-b-2 border-custom-greyscale-700 translate-x-0' : 'text-custom-greyscale-500 translate-x-[7px]']">
                    <span class="cursor-pointer" @click="handleNavigationSettings('account')">Account</span>
                </li>
                <li
                    :class="['relative top-[2px] p-3 transition-all duration-300 ease-in-out', navigation == 'settings' ? 'border-b-2 border-custom-greyscale-700 translate-x-0' : 'text-custom-greyscale-500 translate-x-[7px]']">
                    <span class="cursor-pointer" @click="handleNavigationSettings('settings')">Settings</span>
                </li>
                <li
                    :class="['relative top-[2px] p-3 transition-all duration-300 ease-in-out', navigation == 'notifications' ? 'border-b-2 border-custom-greyscale-700 translate-x-0' : 'text-custom-greyscale-500 translate-x-[7px]']">
                    <span class="cursor-pointer" @click="handleNavigationSettings('notifications')">Notifications</span>
                </li>
                <li
                    :class="['relative top-[2px] p-3 transition-all duration-300 ease-in-out', navigation == 'privacy&security' ? 'border-b-2 border-custom-greyscale-700 translate-x-0' : 'text-custom-greyscale-500 translate-x-[7px]']">
                    <span class="cursor-pointer" @click="handleNavigationSettings('privacy&security')">Privacy &
                        Security</span>
                </li>
                <li
                    :class="['relative top-[2px] p-3 transition-all duration-300 ease-in-out', navigation == 'localization' ? 'border-b-2 border-custom-greyscale-700 translate-x-0' : 'text-custom-greyscale-500 translate-x-[7px]']">
                    <span class="cursor-pointer" @click="handleNavigationSettings('localization')">Localization</span>
                </li>
            </ul>
        </nav>

        <Account v-show="navigation === 'account'" />
        <Settings v-show="navigation === 'settings'" />
        <Notifications v-show="navigation === 'notifications'" />
        <PrivacySecurity v-show="navigation === 'privacy&security'" />
        <Localization v-show="navigation === 'localization'" />
    </DashboardLayout>
</template>

<script setup>
import HeaderDashboard from '@/components/dashboard/HeaderDashboard.vue'
import DashboardLayout from '@/Layouts/DashboardLayout.vue'
import Account from './Account.vue'
import Settings from './Settings.vue'
import Notifications from './Notifications.vue'
import PrivacySecurity from './Privacy&Security.vue'
import Localization from './Localization.vue'
import { ref } from 'vue'


const navigation = ref('account')

const handleNavigationSettings = (value) => {
    navigation.value = value
}




</script>

<style lang="scss" scoped></style>
