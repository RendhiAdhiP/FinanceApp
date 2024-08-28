<template>
    <DashboardLayout>
        <HeaderDashboard title-dashboard="My Cards" sub-title="Organize and access your payment cards."
            title-button="Add Cards" title-sheet="Add Cards" custom-class-sheet="hidden">
            <template #content>
                <RouterLink to="/cards/add-card/onboarding">
                    <Button type="button" class="h-9 w-full text-xs md:text-sm">Add Card</Button>
                </RouterLink>
            </template>
        </HeaderDashboard>
        <section class="flex w-full flex-col items-center justify-between gap-2 md:flex-row">
            <div class="flex w-full justify-center rounded-[8px] bg-custom-greyscale-50 p-[2px] md:w-[450px]">
                <div
                    class="flex-1 cursor-pointer rounded-[8px] bg-custom-greyscale-25 py-1 text-center text-sm font-medium text-custom-greyscale-800 shadow-sm">
                    All
                </div>
                <div class="flex-1 cursor-pointer py-1 text-center text-sm font-medium text-custom-greyscale-500">
                    Income
                </div>
                <div class="flex-1 cursor-pointer py-1 text-center text-sm font-medium text-custom-greyscale-500">
                    Expense
                </div>
            </div>
            <div class="flex w-full items-center justify-end gap-5 lg:gap-12">
                <div class="w-full md:min-w-[300px] md:max-w-[350px]">
                    <Input class="" placeholder="Search transaction"
                        icon="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
                        v-model="searchTerm" @input="applyFilters" />
                </div>
                <SheetLayout id="details-transaction" custom-class="py-1"
                    icon="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z" title-button="Filter"
                    title-sheet="Filter">
                </SheetLayout>
            </div>
        </section>
        <section :class="[
            'flex w-full flex-wrap',
            {
                'gap-6 md:grid md:grid-cols-2 lg:grid-cols-[350px_350px_350px] lg:place-content-start xl:grid-cols-[355px_355px_355px]':
                    dataCards && dataCards != null,
            },
            {
                'mt-[5%] justify-center': !dataCards && dataCards == null,
            },
        ]">
            <MyCards v-show="dataCards && dataCards != null" :dataCards="dataCards" />
            <div v-show="!dataCards && dataCards == null" class="col-start-2 mt-16 flex flex-col items-center gap-6">
                <div class="w-[270px] md:w-[350px]">
                    <img src="../../../assets/Icon/EmptyStateIlustration.png" class="w-full" alt="" />
                </div>
                <div class="flex flex-col items-center">
                    <h5 class="text-base font-medium md:text-2xl">
                        Let’s make a new card!
                    </h5>
                    <p class="text-xs text-custom-greyscale-500 md:text-sm">
                        Simple flow to make your new card.
                    </p>
                </div>

                <RouterLink to="/cards/add-card/onboarding" class="w-1/3">
                    <Button type="button" class="w-full text-xs">Add Card</Button>
                </RouterLink>
            </div>
        </section>
    </DashboardLayout>
</template>

<script setup>
import HeaderDashboard from '@/components/dashboard/HeaderDashboard.vue'
import Button from '@/components/ui/button/Button.vue'
import Input from '@/components/ui/input/Input.vue'
import DashboardLayout from '@/Layouts/DashboardLayout.vue'
import SheetLayout from '@/Layouts/SheetLayout.vue'
import { computed, ref } from 'vue'
import MyCards from './Cards.vue'
import { RouterLink } from 'vue-router'

const dataCards = ref([
    {
        id: 1,
        name: 'Jhon Doe',
        type: 'Virtual Card',
        idCardNumber: 3214356436536,
        number: 4537957392,
        exp: '05/2024',
        status: 'Active',
        CVC: 325,
        spendingLimit: 92300,
        amount: 45000,
    },
    {
        id: 2,
        name: 'Joy Doe',
        type: 'Physical Card',
        idCardNumber: 49823084712319,
        number: 5739874527,
        exp: '05/2024',
        status: 'Active',
        CVC: 325,
        spendingLimit: 82000,
        amount: 21000,
    },
])
</script>

<style lang="scss" scoped></style>
