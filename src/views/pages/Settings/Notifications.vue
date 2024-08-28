<template>
    <section class="flex w-full flex-col gap-4">
        <div class="flex flex-wrap gap-8">
            <div class="flex w-64 flex-col gap-1">
                <span class="text-sm font-medium">General Notifications</span>
                <span class="text-xs font-normal text-custom-greyscale-400">
                    Notifications about transactions, balance and exclusive
                    offers.
                </span>
            </div>
            <div class="flex flex-col items-start gap-6">
                <div class="flex gap-4">
                    <div class="flex gap-4">
                        <Switch id="airplane-mode" checked />
                        <div class="flex flex-col gap-1">
                            <span class="text-sm font-medium">Transaction Alerts</span>
                            <span class="text-xs font-normal text-custom-greyscale-400">
                                Receive notifications for every transaction.
                            </span>
                        </div>
                    </div>
                </div>

                <div class="flex gap-4">
                    <div class="flex gap-4">
                        <Switch id="airplane-mode" checked />
                        <div class="flex flex-col gap-1">
                            <span class="text-sm font-medium">Low Balance Alerts</span>
                            <span class="text-xs font-normal text-custom-greyscale-400">
                                Receive a warning if your balance falls below
                                $10,000.00.
                            </span>
                            <div class="flex w-max gap-2 py-2">
                                <span class="text-xs font-medium text-custom-greyscale-900">Edit</span>
                                <Icon custom-class-icon="w-4 h-4"
                                    -icon="M13.1715 12.0007L8.22168 7.05093L9.6359 5.63672L15.9999 12.0007L9.6359 18.3646L8.22168 16.9504L13.1715 12.0007Z" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex gap-4">
                    <div class="flex gap-4">
                        <Switch id="airplane-mode" checked />
                        <div class="flex flex-col gap-1">
                            <span class="text-sm font-medium">Exclusive Offers</span>
                            <span class="text-xs font-normal text-custom-greyscale-400">
                                Get exclusive access to promotions, discounts,
                                and more.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-[1px] w-full bg-custom-greyscale-50"></div>

        <div class="flex flex-wrap gap-8">
            <div class="flex w-64 flex-col gap-1">
                <span class="text-sm font-medium">Notification Method</span>
                <span class="text-xs font-normal text-custom-greyscale-400">
                    Choose how you prefer to receive notifications.
                </span>
            </div>
            <div class="flex flex-col items-start gap-6">
                <div class="flex gap-4">
                    <Checkbox id="terms1" checked />
                    <div class="grid gap-1.5 leading-none">
                        <label for="terms1"
                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Email Notifications
                        </label>
                        <p class="text-xs text-muted-foreground">
                            Receive notifications by email
                        </p>
                    </div>
                </div>

                <div class="flex gap-4">
                    <div class="flex gap-4">
                        <Checkbox id="terms1" checked />
                        <div class="grid gap-1.5 leading-none">
                            <label for="terms1"
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Push Notifications
                            </label>
                            <p class="text-xs text-muted-foreground">
                                Get real-time updates and alerts directly on
                                your device
                            </p>
                            <div class="flex w-max gap-2 py-2">
                                <span class="text-xs font-medium text-custom-greyscale-900">Edit</span>
                                <Icon custom-class-icon="w-4 h-4"
                                    -icon="M13.1715 12.0007L8.22168 7.05093L9.6359 5.63672L15.9999 12.0007L9.6359 18.3646L8.22168 16.9504L13.1715 12.0007Z" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex gap-4">
                    <div class="flex gap-4">
                        <Checkbox id="terms1" checked />
                        <div class="grid gap-1.5 leading-none">
                            <label for="terms1"
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                SMS Notifications
                            </label>
                            <p class="text-xs text-muted-foreground">
                                Receive notifications by SMS
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-[1px] w-full bg-custom-greyscale-50"></div>
    </section>
</template>

<script setup>
import Icon from '@/components/icon/Icon.vue'
import { Switch } from '@/components/ui/switch'
import { Checkbox } from '@/components/ui/checkbox'
</script>

<style lang="scss" scoped></style>
