import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: () => import('@/views/auth/Login/Index.vue') },
    
    { path: '/register', component: () => import('../views/auth/Register/Index.vue') },
    { path: '/register/onboarding', component: () => import('@/views/auth/Register/Onboarding/Index.vue') },
    { path: '/register/email', component: () => import('@/views/auth/Login/Email/Index.vue') },
    { path: '/register/email/verify', component: () => import('@/views/auth/Login/Email/Verified.vue') },
    { path: '/reset-password', component: () => import('@/views/auth/Login/Email/ResetPssword.vue') },
    { path: '/reset-password/success', component: () => import('@/views/auth/Login/Email/SuccessResetPassword.vue') },

    { path: '/dashboard', component: () => import('@/views/pages/Dashboard/Index.vue') },

    { path: '/sending-money/amount', component: () => import('@/views/pages/Dashboard/SendingMoney/Amount.vue') },
    { path: '/sending-money/personal-details', component: () => import('@/views/pages/Dashboard/SendingMoney/PersonalDetails.vue') },
    { path: '/sending-money/recipient', component: () => import('@/views/pages/Dashboard/SendingMoney/Recipient.vue') },
    { path: '/sending-money/review-and-pay', component: () => import('@/views/pages/Dashboard/SendingMoney/ReviewAndPay.vue') },
    { path: '/sending-money/success', component: () => import('@/views/pages/Dashboard/SendingMoney/Success.vue') },

    { path: '/balance', component: () => import('@/views/pages/Balance/Index.vue') },
    { path: '/transactions', component: () => import('@/views/pages/Transaction/Index.vue') },

    { path: '/cards', component: () => import('@/views/pages/Cards/Index.vue') },
    { path: '/cards/add-card/onboarding', component: () => import('@/views/pages/Cards/GettingPhysicalCards/Onboarding.vue') },
    { path: '/cards/add-card/address', component: () => import('@/views/pages/Cards/GettingPhysicalCards/Address.vue') },
    { path: '/cards/add-card/verification', component: () => import('@/views/pages/Cards/GettingPhysicalCards/VerificationCard.vue') },
    { path: '/cards/add-card/payment', component: () => import('@/views/pages/Cards/GettingPhysicalCards/Payment.vue') },
    { path: '/cards/add-card/success', component: () => import('@/views/pages/Cards/GettingPhysicalCards/SuccessAddCard.vue') },

    { path: '/recepients', component: () => import('@/views/pages/Recepients/Index.vue') },
    { path: '/integrations', component: () => import('@/views/pages/Integrations/Index.vue') },
    { path: '/settings', component: () => import('@/views/pages/Settings/Index.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
