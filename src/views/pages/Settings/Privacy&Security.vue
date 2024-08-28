<template>
    <section class="flex w-full flex-col gap-4">
        <div class="flex flex-wrap gap-8">
            <div class="flex w-64 flex-col gap-1">
                <span class="text-sm font-medium">Change Password</span>
                <span class="text-xs font-normal text-custom-greyscale-400">
                    Change your password if you think your password is need to
                    change.
                </span>
            </div>
            <div class="flex flex-col items-center gap-3">
                <div class="flex flex-col items-start gap-3">
                    <div class="flex items-center gap-2 rounded-[8px] border border-[#DFE1E7] px-3 py-2">
                        <Icon customClassIcon="w-4 h-4" fill-collor-icon="fill-custom-greyscale-400"
                            Icon="M18 8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8ZM5 10V20H19V10H5ZM11 14H13V16H11V14ZM7 14H9V16H7V14ZM15 14H17V16H15V14ZM16 8V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8H16Z" />
                        <span class="text-xs text-custom-greyscale-400">••••••••••••••••••••••</span>
                    </div>
                    <div
                        class="flex h-8 cursor-pointer items-center rounded-[8px] border border-solid border-[#DFE1E7] px-4 py-[6px] md:py-2 lg:py-[6px]">
                        <p class="text-xs font-medium text-custom-greyscale-900">
                            Change
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-[1px] w-full bg-custom-greyscale-50"></div>

        <div class="flex flex-wrap gap-8">
            <div class="flex w-64 flex-col gap-1">
                <span class="text-sm font-medium">Backup Codes</span>
                <span class="text-xs font-normal text-custom-greyscale-400">
                    Create and store new backup codes for use in the event of
                    losing access to your authentication app.
                </span>
            </div>
            <div class="flex flex-col items-center gap-3">
                <div class="flex flex-col items-start gap-3">
                    <div
                        class="flex h-8 cursor-pointer items-center rounded-[8px] border border-solid border-[#DFE1E7] px-4 py-[6px] md:py-2 lg:py-[6px]">
                        <p class="text-xs font-medium text-custom-greyscale-900">
                            Generate Codes
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-[1px] w-full bg-custom-greyscale-50"></div>

        <div class="flex flex-wrap gap-8">
            <div class="flex w-64 flex-col gap-1">
                <span class="text-sm font-medium">Two Step Vetification</span>
                <span class="text-xs font-normal text-custom-greyscale-400">
                    We use two step verification when we need to check it’s
                    really you using your account.
                </span>
            </div>
            <div class="flex flex-col items-center gap-3">
                <div class="flex flex-col items-start gap-3">
                    <div class="flex w-max items-center justify-start gap-4">
                        <div class="`flex user__custom ` h-10 w-10 items-center rounded-[100%] p-2">
                            <div
                                class="ml-[50%] mt-[50%] flex h-8 w-8 translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-[100%] border border-[#DFE1E7] bg-slate-100 px-1 drop-shadow-sm">
                                <Icon custom-class-icon="w-4 h-4"
                                    Icon="M2 20H22V22H2V20ZM4 12H6V19H4V12ZM9 12H11V19H9V12ZM13 12H15V19H13V12ZM18 12H20V19H18V12ZM2 7L12 2L22 7V11H2V7ZM12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" />
                            </div>
                        </div>
                        <div class="flex items-center">
                            <h3 class="text-sm font-medium">
                                Authtenticator App
                            </h3>
                        </div>
                    </div>
                    <div
                        class="flex h-8 cursor-pointer items-center rounded-[8px] border border-solid border-[#DFE1E7] px-4 py-[6px] md:py-2 lg:py-[6px]">
                        <p class="text-xs font-medium text-custom-greyscale-900">
                            Change
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-[1px] w-full bg-custom-greyscale-50"></div>

        <div class="flex h-max w-full flex-col gap-4 rounded-[16px] border p-4">
            <div class="flex justify-between items-center">
                <div class="flex w-64 flex-col gap-1">
                    <span class="text-sm font-medium">Active sessions</span>
                    <span class="text-xs font-normal text-custom-greyscale-400">
                        Monitor and manage all your active sessions.
                    </span>
                </div>
                <div
                    class="flex h-8 cursor-pointer items-center rounded-[8px] bg-custom-alerterror-100 px-4 py-[6px] md:py-2 lg:py-[6px]">
                    <p class="text-xs font-medium text-custom-greyscale-0">
                        Log out all sessions
                    </p>
                </div>
            </div>
            <div class="">
                <div class="rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
                                <TableHead v-for="header in headerGroup.headers" :key="header.id">
                                    <FlexRender v-if="!header.isPlaceholder" :render="header.column.columnDef.header"
                                        :props="header.getContext()" />
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <template v-if="table.getRowModel().rows?.length">
                                <template v-for="row in table.getRowModel().rows" :key="row.id">
                                    <TableRow :data-state="row.getIsSelected() && 'selected'
                                        ">
                                        <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
                                            <FlexRender :render="cell.column.columnDef.cell
                                                " :props="cell.getContext()" />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow v-if="row.getIsExpanded()">
                                        <TableCell :colspan="row.getAllCells().length">
                                            {{ JSON.stringify(row.original) }}
                                        </TableCell>
                                    </TableRow>
                                </template>
                            </template>

                            <TableRow v-else>
                                <TableCell :colspan="columns.length" class="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import Icon from '@/components/icon/Icon.vue'
import Button from '@/components/ui/button/Button.vue'
import type {
    ColumnDef,
    ColumnFiltersState,
    ExpandedState,
    SortingState,
    VisibilityState,
} from '@tanstack/vue-table'
import {
    FlexRender,
    getCoreRowModel,
    getExpandedRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useVueTable,
} from '@tanstack/vue-table'
import { ArrowUpDown, ChevronDown } from 'lucide-vue-next'

import { h, ref, watch, watchEffect } from 'vue'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { valueUpdater } from '@/lib/utils'
import { tableActiveSession } from '@/lib/data'
export interface Payment {
    id: string
    avatar: string
    name: number
    amount: number
    status: 'Cheking' | 'Ops Payroll' | 'AP'
    date_time: string
    payment_methode: string
}

const Data: Payment[] = tableActiveSession
const searchTerm = ref('')

const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: 'browser',
        header: ({ column }) => {
            return h(
                Button,
                {
                    variant: 'ghost',
                    onClick: () =>
                        column.toggleSorting(column.getIsSorted() === 'asc'),
                    class: 'pl-0',
                },
                () => [
                    'Browser',
                    h(
                        'svg',
                        {
                            class: 'ml-2 h-4 w-4',
                            viewBox: '0 0 24 24',
                            fill: 'currentColor',
                        },
                        [
                            h('path', {
                                d: 'M18.2073 9.0428L12.0002 2.83569L5.79312 9.0428L7.20733 10.457L12.0002 5.66412L16.7931 10.457L18.2073 9.0428ZM5.79297 14.9572L12 21.1643L18.2071 14.9572L16.7929 13.543L12 18.3359L7.20718 13.543L5.79297 14.9572Z',
                            }),
                        ]
                    ),
                ]
            )
        },
        cell: ({ row }) => {
            const browser = row.getValue('browser')
            const iconUrl = row.original.icon

            // console.log(avatar1)
            return h('div', { class: 'flex items-center' }, [
                h('img', {
                    src: iconUrl,
                    alt: browser,
                    class: 'h-5 w-5 rounded-full mr-2',
                }),
                h('span', { class: 'text-left font-medium' }, browser),
            ])
        },
    },
    {
        accessorKey: 'location',
        header: ({ column }) => {
            return h(
                Button,
                {
                    variant: 'ghost',
                    onClick: () =>
                        column.toggleSorting(column.getIsSorted() === 'asc'),
                    class: 'pl-0',
                },
                () => [
                    'Location',
                    h(
                        'svg',
                        {
                            class: 'ml-2 h-4 w-4',
                            viewBox: '0 0 24 24',
                            fill: 'currentColor',
                        },
                        [
                            h('path', {
                                d: 'M18.2073 9.0428L12.0002 2.83569L5.79312 9.0428L7.20733 10.457L12.0002 5.66412L16.7931 10.457L18.2073 9.0428ZM5.79297 14.9572L12 21.1643L18.2071 14.9572L16.7929 13.543L12 18.3359L7.20718 13.543L5.79297 14.9572Z',
                            }),
                        ]
                    ),
                ]
            )
        },
        cell: ({ row }) => {
            const location = row.getValue('location')
            return h('div', { class: 'text-left font-normal' }, location)
        },
    },
    {
        accessorKey: 'dateTime',
        header: ({ column }) => {
            return h(
                Button,
                {
                    variant: 'ghost',
                    onClick: () =>
                        column.toggleSorting(column.getIsSorted() === 'asc'),
                    class: 'pl-0',
                },
                () => [
                    'Date & Time',
                    h(
                        'svg',
                        {
                            class: 'ml-2 h-4 w-4',
                            viewBox: '0 0 24 24',
                            fill: 'currentColor',
                        },
                        [
                            h('path', {
                                d: 'M18.2073 9.0428L12.0002 2.83569L5.79312 9.0428L7.20733 10.457L12.0002 5.66412L16.7931 10.457L18.2073 9.0428ZM5.79297 14.9572L12 21.1643L18.2071 14.9572L16.7929 13.543L12 18.3359L7.20718 13.543L5.79297 14.9572Z',
                            }),
                        ]
                    ),
                ]
            )
        },
        cell: ({ row }) =>
            h(
                'div',
                { class: 'capitalize text-sm', id: 'status' },
                row.getValue('dateTime')
            ),
    },
    {
        accessorKey: 'ip',
        header: ({ column }) => {
            return h(
                Button,
                {
                    variant: 'ghost',
                    onClick: () =>
                        column.toggleSorting(column.getIsSorted() === 'asc'),
                    class: 'pl-0',
                },
                () => [
                    'IP',
                    h(
                        'svg',
                        {
                            class: 'ml-2 h-4 w-4',
                            viewBox: '0 0 24 24',
                            fill: 'currentColor',
                        },
                        [
                            h('path', {
                                d: 'M18.2073 9.0428L12.0002 2.83569L5.79312 9.0428L7.20733 10.457L12.0002 5.66412L16.7931 10.457L18.2073 9.0428ZM5.79297 14.9572L12 21.1643L18.2071 14.9572L16.7929 13.543L12 18.3359L7.20718 13.543L5.79297 14.9572Z',
                            }),
                        ]
                    ),
                ]
            )
        },
        cell: ({ row }) => h('div', { class: 'lowercase' }, row.getValue('ip')),
    },
    {
        id: 'actions',
        header: () => '',
        cell: ({ row }) => {
            const payment = row.original

            return h('div', { class: 'relative p-2 rounded-[8px] border w-max flex justify-center' }, [
                h(
                    'svg',
                    {
                        class: 'h-4 w-4',
                        viewBox: '0 0 24 24',
                        fill: 'currentColor',
                    },
                    [
                        h('path', {
                            d: 'M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z',
                        }),
                    ]
                ),
            ])
        },
    },
]

const sorting = ref<SortingState>([])
const columnFilters = ref<ColumnFiltersState>([])
const columnVisibility = ref<VisibilityState>({})
const rowSelection = ref({})
const expanded = ref<ExpandedState>({})

const table = useVueTable({
    data: Data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    onSortingChange: (updaterOrValue) => valueUpdater(updaterOrValue, sorting),
    onColumnFiltersChange: (updaterOrValue) =>
        valueUpdater(updaterOrValue, columnFilters),
    onColumnVisibilityChange: (updaterOrValue) =>
        valueUpdater(updaterOrValue, columnVisibility),
    onRowSelectionChange: (updaterOrValue) =>
        valueUpdater(updaterOrValue, rowSelection),
    onExpandedChange: (updaterOrValue) =>
        valueUpdater(updaterOrValue, expanded),
    state: {
        get sorting() {
            return sorting.value
        },
        get columnFilters() {
            return columnFilters.value
        },
        get columnVisibility() {
            return columnVisibility.value
        },
        get rowSelection() {
            return rowSelection.value
        },
        get expanded() {
            return expanded.value
        },
    },
})

function applyFilters() {
    const term = searchTerm.value.toLowerCase()

    table.getColumn('name')?.setFilterValue(term)
    table.getColumn('status')?.setFilterValue(term)
}
</script>

<style lang="scss" scoped></style>
