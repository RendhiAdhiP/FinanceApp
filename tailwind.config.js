const animate = require('tailwindcss-animate')
// const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    safelist: ['dark'],
    prefix: '',

    content: [
        './pages/**/*.{js,jsx,vue}',
        './components/**/*.{js,jsx,vue}',
        './app/**/*.{js,jsx,vue}',
        './src/**/*.{js,jsx,vue}',
    ],

    theme: {
        container: {
            center: true,
            padding: '2rem',
            // screens: {
            //   "lg": "1024px",
            // },
        },
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
            screens: {
                xs: '350px',
                sm: '640px',
                md: '767px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px',
            },
            colors: {
                custom: {
                    primary: {
                        0: 'hsl(248, 100%, 98%)',
                        25: 'hsl(248, 59%, 89%)',
                        50: 'hsl(248, 51%, 82%)',
                        100: 'hsl(248, 45%, 71%)',
                        200: 'hsl(248, 39%, 60%)',
                        300: 'hsl(248, 36%, 53%)',
                    },
                    secondary: {
                        0: 'hsl(210, 53%, 95%)',
                        25: 'hsl(210, 48%, 93%)',
                        50: 'hsl(210, 61%, 82%)',
                        100: 'hsl(210, 67%, 69%)',
                        200: 'hsl(210, 73%, 65%)',
                        300: 'hsl(210, 100%, 50%)',
                    },
                    greyscale: {
                        0: 'hsl(213, 14%, 97%)',
                        25: 'hsl(213, 11%, 96%)',
                        50: 'hsl(213, 16%, 91%)',
                        100: 'hsl(213, 14%, 88%)',
                        200: 'hsl(213, 16%, 77%)',
                        300: 'hsl(213, 14%, 65%)',
                        400: 'hsl(213, 13%, 53%)',
                        500: 'hsl(213, 8%, 50%)',
                        600: 'hsl(230, 6%, 27%)',
                        700: 'hsl(230, 5%, 20%)',
                        800: 'hsl(230, 8%, 13%)',
                        900: 'hsl(230, 10%, 7%)',
                    },
                    additional: {
                        0: 'hsl(195, 100%, 98%)',
                        25: 'hsl(192, 58%, 91%)',
                        50: 'hsl(187, 74%, 64%)',
                        100: 'hsl(197, 78%, 51%)',
                        200: 'hsl(197, 84%, 25%)',
                        300: 'hsl(198, 70%, 23%)',
                    },
                    alertsuccess: {
                        0: 'hsl(147, 45%, 96%)',
                        25: 'hsl(145, 46%, 91%)',
                        50: 'hsl(140, 45%, 72%)',
                        100: 'hsl(145, 65%, 52%)',
                        200: 'hsl(144, 38%, 35%)',
                        300: 'hsl(151, 42%, 22%)',
                    },
                    alertwarning: {
                        0: 'hsl(42, 100%, 92%)',
                        25: 'hsl(42, 71%, 84%)',
                        50: 'hsl(44, 84%, 65%)',
                        100: 'hsl(39, 100%, 55%)',
                        200: 'hsl(31, 68%, 30%)',
                        300: 'hsl(19, 57%, 23%)',
                    },
                    alerterror: {
                        0: 'hsl(344, 88%, 94%)',
                        25: 'hsl(344, 34%, 81%)',
                        50: 'hsl(344, 69%, 61%)',
                        100: 'hsl(344, 86%, 43%)',
                        200: 'hsl(344, 76%, 29%)',
                        300: 'hsl(344, 66%, 24%)',
                    },
                    btn_primary: {
                        default: 'hsl(248, 36%, 53%)',
                        hover: 'hsl(248, 36%, 40%)',
                        focus: 'hsl(248, 36%, 53%)',
                        disabled: 'hsl(248, 51%, 82%)',
                    },
                    btn_secondary: {
                        default: 'hsl(213, 8%, 97%)',
                        hover: 'hsl(213, 11%, 96%)',
                        focus: 'hsl(213, 8%, 97%)',
                        disabled: 'hsl(213, 14%, 88%)',
                    },
                    btn_tertiary: {
                        default: 'hsl(344, 86%, 43%)',
                        hover: 'hsl(344, 77%, 33%)',
                        focus: 'hsl(344, 86%, 43%)',
                        disabled: 'hsl(344, 34%, 81%)',
                    },
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            borderRadius: {
                xl: 'calc(var(--radius) + 4px)',
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: 0 },
                    to: {
                        height: 'var(--radix-accordion-content-height)',
                    },
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)',
                    },
                    to: { height: 0 },
                },
                'collapsible-down': {
                    from: { height: 0 },
                    to: {
                        height: 'var(--radix-collapsible-content-height)',
                    },
                },
                'collapsible-up': {
                    from: {
                        height: 'var(--radix-collapsible-content-height)',
                    },
                    to: { height: 0 },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'collapsible-down': 'collapsible-down 0.2s ease-in-out',
                'collapsible-up': 'collapsible-up 0.2s ease-in-out',
            },
        },
    },
    plugins: [animate],
}
