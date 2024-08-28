<template>
    <DashboardLayout>
        <HeaderDashboard title-dashboard="Integrations" sub-title="Connect and sync with essential tools and platforms."
            custom-class-sheet="hidden">
        </HeaderDashboard>
        <section class="flex w-full flex-col items-center justify-between gap-2 md:flex-row">
            <div class="flex w-full justify-center rounded-[8px] bg-custom-greyscale-50 p-[2px] md:w-[450px]">
                <div
                    class="flex-1 cursor-pointer rounded-[8px] bg-custom-greyscale-25 py-1 px-2 text-center text-sm font-medium text-custom-greyscale-800 shadow-sm">
                    All apps
                </div>
                <div class="flex-1 cursor-pointer py-1 px-2 text-center text-sm font-medium text-custom-greyscale-500">
                    Connected
                </div>
                <div class="flex-1 cursor-pointer py-1 px-2 text-center text-sm font-medium text-custom-greyscale-500">
                    Disconnected
                </div>
            </div>
            <div class="flex w-full items-center justify-end gap-5 lg:gap-12">
                <div class="w-full md:min-w-[300px] md:max-w-[350px]">
                    <Input class="" placeholder="Search"
                        icon="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
                        v-model="searchTerm" @input="applyFilters" />
                </div>
                <SheetLayout id="details-transaction" custom-class="py-1"
                    icon="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z" title-button="Filter"
                    title-sheet="Filter">
                </SheetLayout>
            </div>
        </section>
        <Section class="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <IntegrationsApp :data="IntegrationApps" />

        </Section>
    </DashboardLayout>
</template>

<script setup>
import HeaderDashboard from '@/components/dashboard/HeaderDashboard.vue'
import Input from '@/components/ui/input/Input.vue'
import DashboardLayout from '@/Layouts/DashboardLayout.vue'
import SheetLayout from '@/Layouts/SheetLayout.vue'
import IntegrationsApp from './IntegrationsApp.vue'

import { IntegrationApps } from '@/lib/data'
</script>

<style lang="scss" scoped></style>
