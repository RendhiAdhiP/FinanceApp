import netflix from '../assets/Icon/Logo/netflix.png'
import youtube from '../assets/Icon/Logo/youtube.png'
import dropBox from '@/assets/Icon/Logo/dropbox.png'
import googleDrive from '@/assets/Icon/Logo/google-drive.png'
import mailchimp from '@/assets/Icon/Logo/mailchimp.png'
import zendesk from '@/assets/Icon/Logo/zendesk.png'
import zoom from '@/assets/Icon/Logo/zoom.png'
import slack from '@/assets/Icon/Logo/slack.png'
import office from '@/assets/Icon/Logo/office365.png'
import shopify from '@/assets/Icon/Logo/shopify.png'

import avatar1 from '@/assets/Icon/Avatar/01.png'
import avatar2 from '@/assets/Icon/Avatar/02.png'
import avatar3 from '@/assets/Icon/Avatar/03.png'
import avatar4 from '@/assets/Icon/Avatar/04.png'
import avatar5 from '@/assets/Icon/Avatar/05.png'
import avatar6 from '@/assets/Icon/Avatar/06.png'
import avatar7 from '@/assets/Icon/Avatar/07.png'
import avatar8 from '@/assets/Icon/Avatar/08.png'
import avatar9 from '@/assets/Icon/Avatar/09.png'
import avatar10 from '@/assets/Icon/Avatar/10.png'
import avatar11 from '@/assets/Icon/Avatar/11.png'
import avatar12 from '@/assets/Icon/Avatar/12.png'
import avatar13 from '@/assets/Icon/Avatar/13.png'
import avatar14 from '@/assets/Icon/Avatar/14.png'
import avatar15 from '@/assets/Icon/Avatar/15.png'
import avatar16 from '@/assets/Icon/Avatar/16.png'

import chromeLine from '@/assets/Icon/Apps/chrome-line.png'
import firefoxLine from '@/assets/Icon/Apps/firefox-line.png'


import united_states from '@/assets/Icon/Flag/united_states.png'
import singapore from '@/assets/Icon/Flag/singapore.png'
import euro from '@/assets/Icon/Flag/european union.png'
import australia from '../assets/Icon/Flag/australia.png'




export const Platform = [
    {
        id: 1,
        app: 'Netflix',
        title: 'Netflix Monthly',
        logo: netflix,
        payment: '$3,839.91',
        date: '06/28',
    },
    {
        id: 2,
        app: 'Youtube',
        title: 'Youtube Premium',
        logo: youtube,
        payment: '$8,246.63',
        date: '06/28',
    },
]

export const avatars = [
    { id: 1, avatar: avatar1 },
    { id: 2, avatar: avatar2 },
    { id: 3, avatar: avatar3 },
    { id: 4, avatar: avatar4 },
    { id: 5, avatar: avatar5 },
    { id: 6, avatar: avatar6 },
    { id: 7, avatar: avatar7 },
    { id: 8, avatar: avatar8 },
    { id: 9, avatar: avatar9 },
    { id: 10, avatar: avatar10 },
    { id: 11, avatar: avatar11 },
    { id: 12, avatar: avatar12 },
    { id: 13, avatar: avatar13 },
    { id: 14, avatar: avatar14 },
    { id: 15, avatar: avatar15 },
]


export const months = [
    { id: 1, month: 'January' },
    { id: 2, month: 'February' },
    { id: 3, month: 'March' },
    { id: 4, month: 'April' },
    { id: 5, month: 'May' },
    { id: 6, month: 'June' },
    { id: 7, month: 'July' },
    { id: 8, month: 'August' },
    { id: 9, month: 'September' },
    { id: 10, month: 'October' },
    { id: 11, month: 'November' },
    { id: 12, month: 'December' },
]

export const banks = [
    {
        id: 1,
        bank_name: 'JPMorgan Chase & Co.',
        country: 'United States',
        swift_code: 'CHASUS33',
    },
    {
        id: 2,
        bank_name: 'HSBC Holdings plc',
        country: 'United Kingdom',
        swift_code: 'MIDLGB22',
    },
    {
        id: 3,
        bank_name: 'Deutsche Bank AG',
        country: 'Germany',
        swift_code: 'DEUTDEFF',
    },
    {
        id: 4,
        bank_name: 'Mitsubishi UFJ Financial Group',
        country: 'Japan',
        swift_code: 'BOTKJPJT',
    },
    {
        id: 5,
        bank_name: 'BNP Paribas',
        country: 'France',
        swift_code: 'BNPAFRPP',
    },
    {
        id: 6,
        bank_name: 'UBS Group AG',
        country: 'Switzerland',
        swift_code: 'UBSWCHZH80A',
    },
    {
        id: 7,
        bank_name: 'Banco Santander',
        country: 'Spain',
        swift_code: 'BSCHESMM',
    },
    {
        id: 8,
        bank_name: 'Bank of China',
        country: 'China',
        swift_code: 'BKCHCNBJ',
    },
    {
        id: 9,
        bank_name: 'Barclays',
        country: 'United Kingdom',
        swift_code: 'BARCGB22',
    },
    {
        id: 10,
        bank_name: 'Royal Bank of Canada',
        country: 'Canada',
        swift_code: 'ROYCCAT2',
    },
    {
        id: 11,
        bank_name: 'Wells Fargo & Co.',
        country: 'United States',
        swift_code: 'WFBIUS6S',
    },
    {
        id: 12,
        bank_name: 'ING Groep N.V.',
        country: 'Netherlands',
        swift_code: 'INGBNL2A',
    },
    {
        id: 13,
        bank_name: 'Australia and New Zealand Banking Group',
        country: 'Australia',
        swift_code: 'ANZBAU3M',
    },
    {
        id: 14,
        bank_name: 'Standard Chartered',
        country: 'United Kingdom',
        swift_code: 'SCBLGB2L',
    },
    {
        id: 15,
        bank_name: 'Société Générale',
        country: 'France',
        swift_code: 'SOGEFRPP',
    },
]

export const dataTable = [
    {
        avatar: avatar1,
        name: 'Jakob Mango',
        amount: 86563.96,
        status: 'Checking',
        date_time: 'Feb 25, 2024 4:44 am',
        payment_method: 'Wire',
    },
    {
        avatar: avatar2,
        name: 'Ryan Bergson',
        amount: 4694.12,
        status: 'Ops Payroll',
        date_time: 'Feb 20, 2024 10:25 pm',
        payment_method: 'ACH',
    },
    {
        avatar: avatar3,
        name: 'Lincoln Gouse',
        amount: 3350.75,
        status: 'Checking',
        date_time: 'Mar 17, 2024 8:23 pm',
        payment_method: 'Wire',
    },
    {
        avatar: avatar4,
        name: 'Netflix Income',
        amount: 1651.31,
        status: 'AP',
        date_time: 'Mar 1, 2024 12:40 am',
        payment_method: 'Wire',
    },
    {
        avatar: avatar5,
        name: 'Nolan Septimus',
        amount: 1421.63,
        status: 'Checking',
        date_time: 'Mar 7, 2024 6:02 pm',
        payment_method: 'Wire',
    },
    {
        avatar: avatar6,
        name: 'Spotify Subscription',
        amount: 4453.37,
        status: 'Checking',
        date_time: 'Mar 1, 2024 4:39 pm',
        payment_method: 'Wire',
    },
    {
        avatar: avatar7,
        name: 'Marilyn Lipshutz',
        amount: 2611.06,
        status: 'Checking',
        date_time: 'Mar 16, 2024 8:29 am',
        payment_method: 'Wire',
    },
    {
        avatar: avatar8,
        name: 'Lindsey Gouse',
        amount: 4876.64,
        status: 'Checking',
        date_time: 'Feb 24, 2024 11:51 pm',
        payment_method: 'Wire',
    },
]

export const tableActiveSession = [
    {
        icon: firefoxLine,
        browser: 'Mozilla Firefox',
        location: 'Ontario, Canada',
        dateTime: 'Mar 18, 2024 6:04 am',
        ip: '127.0.6.8',
    },
    {
        icon: chromeLine,
        browser: 'Google Chrome',
        location: 'California, USA',
        dateTime: 'Mar 29, 2024 10:15 am',
        ip: '127.0.2.8',
    },
    // {
    //     "browser": "Safari",
    //     "location": "New York, USA",
    //     "dateTime": "Apr 10, 2024 1:22 pm",
    //     "ip": "192.168.1.1"
    // },
    // {
    //     "browser": "Microsoft Edge",
    //     "location": "Berlin, Germany",
    //     "dateTime": "Feb 5, 2024 3:45 pm",
    //     "ip": "172.16.0.1"
    // },
    // {
    //     "browser": "Opera",
    //     "location": "Sydney, Australia",
    //     "dateTime": "Jan 15, 2024 8:30 am",
    //     "ip": "10.0.0.1"
    // },
    // {
    //     "browser": "Brave",
    //     "location": "Tokyo, Japan",
    //     "dateTime": "May 2, 2024 9:00 pm",
    //     "ip": "192.168.10.10"
    // },
    // {
    //     "browser": "Mozilla Firefox",
    //     "location": "London, UK",
    //     "dateTime": "Jun 11, 2024 7:15 am",
    //     "ip": "127.0.0.1"
    // }
]

export const sidebarExpand = {
    isSidebarExpanded: false,
}


export const Balance = [
    {
        "id": 1,
        "balance_name": "First Balance",
        "flag": united_states,
        "currency": "United States Dollar",
        "currency_code": "USD",
        "amount": "63,87,200",
        "growth_percentage": "15.43%",
        "growth_description": "Than last month"
    },
    {
        "id": 2,
        "balance_name": "Second Balance",
        "flag": singapore,
        "currency": "Singapore Dollar",
        "currency_code": "SGD",
        "amount": "37,32,440",
        "growth_percentage": "5.43%",
        "growth_description": "Than last month"
    },
    {
        "id": 3,
        "balance_name": "Third Balance",
        "flag": euro,
        "currency": "Euro",
        "currency_code": "EUR",
        "amount": "97,33,222",
        "growth_percentage": "12.43%",
        "growth_description": "Than last month"
    },
    {
        "id": 4,
        "balance_name": "Fourth Balance",
        "flag": australia,
        "currency": "Australian Dollar",
        "currency_code": "AUD",
        "amount": "0.00",
        "growth_percentage": null,
        "growth_description": null
    }
]
 
export const Apps = [
    { id: 1, app: dropBox },
    { id: 2, app: googleDrive },
    { id: 3, app: mailchimp },
    { id: 4, app: zendesk },
    { id: 5, app: zoom },
    { id: 6, app: slack },
    { id: 7, app: office },
    { id: 8, app: shopify },
]

export const IntegrationApps = [
    {
        "id": 1,
        "name": "Dropbox",
        "app_icon": dropBox,
        "description": "Platform for storing, sharing, and synchronizing files.",
        "toggle_checked": 'checked'
    },
    {
        "id": 2,
        "name": "Google Drive",
        "app_icon": googleDrive,
        "description": "Platform for storing, sharing, and synchronizing files.",
        "toggle_checked": 'checked'
    },
    {
        "id": 3,
        "name": "Mailchimp",
        "app_icon": mailchimp,
        "description": "For Targeted Email Marketing",
        "toggle_checked": 'unchecked'
    },
    {
        "id": 4,
        "name": "Zendesk",
        "app_icon": zendesk,
        "description": "For customer support and ticket management.",
        "toggle_checked": 'unchecked'
    },
    {
        "id": 5,
        "name": "Zoom",
        "app_icon": zoom,
        "description": "For conducting virtual meetings and interviews.",
        "toggle_checked": 'checked'
    },
    {
        "id": 6,
        "name": "Slack",
        "app_icon": slack,
        "description": "For team communication and real-time collaboration.",
        "toggle_checked": 'checked'     
    },
    {
        "id": 7,
        "name": "Office 365",
        "app_icon": office,
        "description": "Seamless collaboration and document management.",
        "toggle_checked": 'checked'
    },
    {
        "id": 8,
        "name": "Shopify",
        "app_icon": shopify,
        "description": "For Streamlined E-commerce.",
        "toggle_checked": 'unchecked'
    }
]


export const Recepients = [
    {
        id:1,
        avatar: avatar12,
        country: united_states,
        recepient: 'Save the Forest ',
        description: 'USD account ending in 9107',
    },
    {
        id:2,
        avatar: avatar7,
        country: euro,
        recepient: 'Charles Leclerc ',
        description: 'USD account ending in 9107',
    },
    {
        id:3,
        avatar: avatar2,
        country: united_states,
        recepient: 'Mattia Esposito ',
        description: 'USD account ending in 9107',
    },
]