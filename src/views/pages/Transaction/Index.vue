<template>
  <DashboardLayout>
    <HeaderDashboard title-dashboard="Transactions"
      sub-title="Efficiently organize and keep track of your incoming receipts for hassle-free financial management"
      custom-class-sheet="hidden">
    </HeaderDashboard>
    
    <section class="flex w-full flex-col gap-4 md:flex-row">
      <div class="flex flex-1 flex-col">
        <div class="flex items-center gap-2">
          <h3 class="text-lg font-medium md:text-xl">All cards</h3>
          <div class="flex h-6 w-6 items-center justify-center rounded-full border md:h-8 md:w-8">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.0001 13.1714L16.9499 8.22168L18.3641 9.63589L12.0001 15.9999L5.63623 9.63589L7.05044 8.22168L12.0001 13.1714Z"
                fill="black" />
            </svg>
          </div>
        </div>
        <p class="text-sm font-normal text-slate-500">
          Monitor and manage transactions across all your cards.
        </p>
      </div>
      <div class="flex items-center justify-between gap-2">
        <div
          class="flex cursor-pointer items-center gap-2 rounded-[8px] border border-solid border-[#DFE1E7] px-4 py-2">
          <svg width="20" height="20" class="w-[16px]" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"
              fill="black" />
          </svg>
          <p class="text-xs font-medium text-custom-greyscale-900 md:text-sm">
            8 Feb - 15 Feb 2024
          </p>
        </div>
        <div
          class="flex cursor-pointer items-center gap-2 rounded-[8px] border border-solid border-[#DFE1E7] px-4 py-[6px] md:py-2 lg:py-[6px]">
          <svg width="24" height="24" class="w-[16px]" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 10H18L12 16L6 10H11V3H13V10ZM4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19Z"
              fill="black" />
          </svg>
          <p class="text-xs font-medium text-custom-greyscale-900 md:text-sm">
            Export
          </p>
        </div>
      </div>
    </section>
    <section class="flex w-full flex-col gap-4 rounded-[16px] border p-4">
      <div class="flex w-full flex-col items-center justify-between gap-2 md:flex-row">
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
            <Input class="" placeholder="Search"
              icon="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
              v-model="searchTerm" @input="applyFilters" />
          </div>
          <SheetLayout custom-class="py-1" icon="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z"
            title-button="Filter" title-sheet="Filter">
            <div class="flex flex-col gap-4">
              <div class="mt-4 flex flex-col space-y-4">
                <h4 class="text-left text-sm font-medium text-custom-greyscale-500">
                  SELECT TYPE
                </h4>
                <div class="flex flex-wrap gap-2">
                  <button :class="[
                    'rounded-full px-3 py-1',
                    selectedType.includes('Transfer')
                      ? 'bg-black text-white'
                      : 'border border-custom-greyscale-900 text-gray-700',
                  ]" @click="() => {
                    setSelectedType('Transfer')
                    console.log(
                      selectedType.includes(
                        'Transfer'
                      )
                    )
                  }
                    ">
                    Transfer
                  </button>
                  <button :class="[
                    'rounded-full px-3 py-1',
                    selectedType.includes(
                      'Card transactions'
                    )
                      ? 'bg-black text-white'
                      : 'border border-custom-greyscale-900 text-gray-700',
                  ]" @click="
                    setSelectedType('Card transactions')
                    ">
                    Card transactions
                  </button>
                  <button :class="[
                    'rounded-full px-3 py-1',
                    selectedType.includes('Money added')
                      ? 'bg-black text-white'
                      : 'border border-custom-greyscale-900 text-gray-700',
                  ]" @click="setSelectedType('Money added')">
                    Money added
                  </button>
                  <button :class="[
                    'rounded-full px-3 py-1',
                    selectedType.includes(
                      'Direct debits'
                    )
                      ? 'bg-black text-white'
                      : 'border border-custom-greyscale-900 text-gray-700',
                  ]" @click="
                    setSelectedType('Direct debits')
                    ">
                    Direct debits
                  </button>
                  <button :class="[
                    'rounded-full px-3 py-1',
                    selectedType.includes(
                      'Prefunding transfers'
                    )
                      ? 'bg-black text-white'
                      : 'border border-custom-greyscale-900 text-gray-700',
                  ]" @click="
                    setSelectedType(
                      'Prefunding transfers'
                    )
                    ">
                    Prefunding transfers
                  </button>
                  <button :class="[
                    'rounded-full px-3 py-1',
                    selectedType.includes('Rewards')
                      ? 'bg-black text-white'
                      : 'border border-custom-greyscale-900 text-gray-700',
                  ]" @click="setSelectedType('Rewards')">
                    Rewards
                  </button>
                </div>
              </div>
              <div class="flex flex-col space-y-4">
                <h4 class="text-sm font-medium text-custom-greyscale-500">
                  DIRECTION
                </h4>
                <Select v-model="datas.selectedDirectionType">
                  <SelectTrigger inForm="true" class="w-full rounded-[10px] border px-4 py-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.9498 7.94975L10.5356 9.36396L8.00079 6.828L8.00004 20H6.00004L6.00079 6.828L3.46451 9.36396L2.05029 7.94975L7.00004 3L11.9498 7.94975ZM21.9498 16.0503L17 21L12.0503 16.0503L13.4645 14.636L16.0008 17.172L16 4H18L18.0008 17.172L20.5356 14.636L21.9498 16.0503Z"
                        fill="black" />
                    </svg>
                    <SelectValue :placeholder="datas.selectedDirectionType
                      ? datas.selectedDirectionType
                      : 'All'
                      " class="text-2custom-greyscale-400 flex-1 space-x-3 text-left text-xs md:text-sm" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel class="text-sm">Types</SelectLabel>
                      <SelectItem v-for="(type, i) in directionType" :value="type.value" inForm="true ">
                        <li class="list-none" :key="i">
                          {{ type.value }}
                        </li>
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div class="flex flex-col space-y-4">
                <h4 class="text-sm font-medium text-custom-greyscale-500">
                  BALANCE
                </h4>
                <Select v-model="datas.selectedDirectionType">
                  <SelectTrigger inForm="true" class="w-full rounded-[10px] border px-4 py-2">
                    <SelectValue :placeholder="datas.selectedDirectionType
                      ? datas.selectedDirectionType
                      : 'Select balance or Jar'
                      " :class="[
                        'text-2custom-greyscale-400 text-left text-xs md:text-sm',
                        datas.selectedDirectionType
                          ? ''
                          : 'text-custom-greyscale-500',
                      ]" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel class="text-sm">BALANCE</SelectLabel>
                      <SelectItem v-for="(type, i) in directionType" :value="type.value" inForm="true ">
                        <li class="list-none" :key="i">
                          {{ type.value }}
                        </li>
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div class="flex flex-col space-y-4">
                <h4 class="text-sm font-medium text-custom-greyscale-500">
                  DIRECTION
                </h4>
                <Select v-model="datas.selectedDirectionType">
                  <SelectTrigger inForm="true" class="w-full rounded-[10px] border px-4 py-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.0004 16C14.2095 16 16.0004 14.2091 16.0004 12C16.0004 9.79086 14.2095 8 12.0004 8C9.79123 8 8.00037 9.79086 8.00037 12C8.00037 14.2091 9.79123 16 12.0004 16ZM21.0049 4.00293H3.00488C2.4526 4.00293 2.00488 4.45064 2.00488 5.00293V19.0029C2.00488 19.5552 2.4526 20.0029 3.00488 20.0029H21.0049C21.5572 20.0029 22.0049 19.5552 22.0049 19.0029V5.00293C22.0049 4.45064 21.5572 4.00293 21.0049 4.00293ZM4.00488 15.6463V8.35371C5.13065 8.017 6.01836 7.12892 6.35455 6.00293H17.6462C17.9833 7.13193 18.8748 8.02175 20.0049 8.3564V15.6436C18.8729 15.9788 17.9802 16.8711 17.6444 18.0029H6.3563C6.02144 16.8742 5.13261 15.9836 4.00488 15.6463Z"
                        fill="black" />
                    </svg>
                    <SelectValue :placeholder="datas.selectedDirectionType
                      ? datas.selectedDirectionType
                      : 'Cash'
                      " class="text-2custom-greyscale-400 flex-1 space-x-3 text-left text-xs md:text-sm" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel class="text-sm">Types</SelectLabel>
                      <SelectItem v-for="(type, i) in directionType" :value="type.value" inForm="true ">
                        <li class="list-none" :key="i">
                          {{ type.value }}
                        </li>
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div class="mt-[20%] flex w-full justify-between gap-2">
              <Button variant="outline" class="w-full">Clear All</Button>
              <Button class="w-full">Apply All</Button>
            </div>
          </SheetLayout>
        </div>
      </div>
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
                    <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
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

      <div class="flex items-center justify-end space-x-2 py-4">
        <div class="flex-1 text-sm text-muted-foreground">
          {{ table.getFilteredSelectedRowModel().rows.length }}
          of
          {{ table.getFilteredRowModel().rows.length }}
          row(s) selected.
        </div>
        <div class="space-x-2">
          <Button variant="outline" size="sm" :disabled="!table.getCanPreviousPage()" @click="table.previousPage()">
            Previous
          </Button>
          <Button variant="outline" size="sm" :disabled="!table.getCanNextPage()" @click="table.nextPage()">
            Next
          </Button>
        </div>
      </div>
    </section>
  </DashboardLayout>
</template>

<script lang="ts" setup>
import HeaderDashboard from '@/components/dashboard/HeaderDashboard.vue'
import DashboardLayout from '@/Layouts/DashboardLayout.vue'
import SheetLayout from '@/Layouts/SheetLayout.vue'

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

import { h, ref } from 'vue'
import { Button } from '@/components/ui/button'
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
import { dataTable } from '@/lib/data'
export interface Payment {
  id: string
  avatar: string
  name: number
  amount: number
  status: 'Cheking' | 'Ops Payroll' | 'AP'
  date_time: string
  payment_methode: string
}
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'


const searchTerm = ref('')
const selectedType = ref([])
const directionType = ref([
  { value: 'All' },
  { value: 'Cheking' },
  { value: 'Ops Payroll' },
  { value: 'AP' },
])
const datas = ref({
  selectedType: selectedType.value,
  selectedDirectionType: '',
  balance: '',
  category: '',
})
const data: Payment[] = dataTable

const columns: ColumnDef<Payment>[] = [
  {
    id: 'select',
    header: ({ table }) =>
      h(Checkbox, {
        checked:
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate'),
        'onUpdate:checked': (value) =>
          table.toggleAllPageRowsSelected(!!value),
        ariaLabel: 'Select all',
      }),
    cell: ({ row }) =>
      h(Checkbox, {
        checked: row.getIsSelected(),
        'onUpdate:checked': (value) => row.toggleSelected(!!value),
        ariaLabel: 'Select row',
      }),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
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
          'To/From',
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
      const name = row.getValue('name')
      const avatarUrl = row.original.avatar
      return h('div', { class: 'flex items-center' }, [
        h('img', {
          src: avatarUrl,
          alt: name,
          class: 'h-8 w-8 rounded-full mr-2',
        }),
        h(
          'span',
          {
            class: 'text-left font-medium w-max',
          },
          name
        ),
      ])
    },
  },
  {
    accessorKey: 'amount',
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: 'ghost',
          onClick: () =>
            column.toggleSorting(column.getIsSorted() === 'desc'),
          class: 'pl-0',
        },
        () => [
          'Amount',
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
      const amount = Number.parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)

      return h('div', { class: 'text-left font-normal' }, formatted)
    },
  },
  {
    accessorKey: 'status',
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
          'Status',
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
        { class: 'capitalize', id: 'status' },
        row.getValue('status')
      ),
  },
  {
    accessorKey: 'date_time',
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
      h('div', { class: 'lowercase w-max' }, row.getValue('date_time')),
  },
  {
    accessorKey: 'payment_method',
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
          'Payment Method',
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
      h('div', { class: 'lowercase' }, row.getValue('payment_method')),
  },
  {
    id: 'actions',
    header: () => '',
    cell: ({ row }) => {
      const payment = row.original

      return h('div', { class: 'relative' }, [
        h(
          'button',
          {
            onClick: () => toggleMenu(row.id),
            class: ' py-2 px-3 border rounded text-gray-700 focus:outline-none',
          },
          '•••'
        ),
      ])
    },
  },
]

const sheetComponent = ref(null)

const openSheet = () => {
  sheetComponent.value = true
}

const sorting = ref<SortingState>([])
const columnFilters = ref<ColumnFiltersState>([])
const columnVisibility = ref<VisibilityState>({})
const rowSelection = ref({})
const expanded = ref<ExpandedState>({})

const table = useVueTable({
  data,
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

const setSelectedType = (value) => {
  if (selectedType.value.includes(value)) {
    selectedType.value = selectedType.value.filter((item) => item !== value)
  } else {
    selectedType.value.push(value)
  }
}
</script>

<style lang="scss" scoped></style>
