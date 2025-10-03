/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./*.html",
        "./scripts/**/*.js",
        "./styles/**/*.css"
    ],
    theme: {
        extend: {
            colors: {
                primaryRedDark: '#800000',
                secondaryGold: '#B79455',
                background: '#DAD4B5',
                accent: '#F2E8C6'
            },
            fontFamily: {
                roboto: ['Roboto', 'sans-serif']
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out',
                'fade-in-right': 'fadeInRight 0.8s ease-out',
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-in': 'slideIn 0.5s ease-out',
                'bounce-slow': 'bounce 2s infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                fadeInRight: {
                    '0%': { opacity: '0', transform: 'translateX(30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' }
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                slideIn: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0)' }
                }
            }
        }
    },
    plugins: [
        require('daisyui'),
        require('@tailwindcss/typography')
    ],
    daisyui: {
        themes: [
            {
                light: {
                    "primary": "#800000",
                    "secondary": "#B79455",
                    "accent": "#F2E8C6",
                    "neutral": "#3d4451",
                    "base-100": "#ffffff",
                    "base-200": "#f9fafb",
                    "base-300": "#f3f4f6",
                },
                dark: {
                    "primary": "#B79455",
                    "secondary": "#800000",
                    "accent": "#1a1a1a",
                    "neutral": "#2d2d2d",
                    "base-100": "#1a1a1a",
                    "base-200": "#2d2d2d",
                    "base-300": "#404040",
                }
            }
        ],
        darkTheme: "dark",
        base: true,
        styled: true,
        utils: true,
        prefix: "",
        logs: true,
        themeRoot: ":root",
    },
};
