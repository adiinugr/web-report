import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  daisyui: {
    themes: [
      {
        emeralrd: {
          "base-100": "#F2F2F2",
          "base-content": "#1F2937",
          primary: "#1F2937",
          secondary: "#B2B5B9",
          "neutral-content": "#D7DDE3"
        }
      }
    ]
  },
  plugins: [require("daisyui")]
}
export default config
