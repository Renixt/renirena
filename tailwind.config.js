export default {
    content: [
        './app/**/*.{js,jsx,ts,tsx}',  
        './src/**/*.{js,jsx,ts,tsx}',   
        './components/**/*.{js,jsx,ts,tsx}',
        './pages/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                title: ["Inter", "sans-serif"],
                title2: ["Manufacturing Consent", "system-ui"]
            }
        },
    },
    plugins: [],
}