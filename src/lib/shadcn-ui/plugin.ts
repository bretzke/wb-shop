import plugin from "tailwindcss/plugin";

function returnHexColor(variableColor: string) {
  return `hsl(var(--${variableColor}))`;
}

export const shadcnPlugin = plugin(
  function ({ addBase }) {
    addBase({
      ":root": {
        "--background": "0 0% 100%",
        "--foreground": "222.2 84% 4.9%",
        "--card": "0 0% 100%",
        "--card-foreground": "222.2 84% 4.9%",
        "--popover": "0 0% 100%",
        "--popover-foreground": "222.2 84% 4.9%",
        "--primary": "222.2 47.4% 11.2%",
        "--primary-foreground": "210 40% 98%",
        "--secondary": "210 40% 96.1%",
        "--secondary-foreground": "222.2 47.4% 11.2%",
        "--muted": "210 40% 96.1%",
        "--muted-foreground": "215.4 16.3% 46.9%",
        "--accent": "210 40% 96.1%",
        "--accent-foreground": "222.2 47.4% 11.2%",
        "--destructive": "0 84.2% 60.2%",
        "--destructive-foreground": "210 40% 98%",
        "--border": "214.3 31.8% 91.4%",
        "--input": "214.3 31.8% 91.4%",
        "--ring": "222.2 84% 4.9%",
        "--radius": "0.5rem",
      },
      ".theme-test": {
        "--background": "0 84.2% 60.2%",
      },
      ".dark": {
        "--background": "222.2 84% 4.9%",
        "--foreground": "210 40% 98%",
        "--card": "222.2 84% 4.9%",
        "--card-foreground": "210 40% 98%",
        "--popover": "222.2 84% 4.9%",
        "--popover-foreground": "210 40% 98%",
        "--primary": "210 40% 98%",
        "--primary-foreground": "222.2 47.4% 11.2%",
        "--secondary": "217.2 32.6% 17.5%",
        "--secondary-foreground": "210 40% 98%",
        "--muted": "217.2 32.6% 17.5%",
        "--muted-foreground": "215 20.2% 65.1%",
        "--accent": "217.2 32.6% 17.5%",
        "--accent-foreground": "210 40% 98%",
        "--destructive": "0 62.8% 30.6%",
        "--destructive-foreground": "210 40% 98%",
        "--border": "217.2 32.6% 17.5%",
        "--input": "217.2 32.6% 17.5%",
        "--ring": "212.7 26.8% 83.9%",
      },
    });

    addBase({
      "*": {
        "@apply border-border": {},
      },
      body: {
        "@apply bg-background text-foreground": {},
      },
    });
  },
  {
    darkMode: ["class"],
    theme: {
      container: {
        // margin: '0',
        center: true,
        padding: {
          xs: "1rem",
          sm: "1rem",
          md: "2rem",
          lg: "2rem",
          xl: "2rem",
          "2xl": "2rem",
        },
      },
      extend: {
        colors: {
          border: returnHexColor("border"),
          input: returnHexColor("input"),
          ring: returnHexColor("ring"),
          background: returnHexColor("background"),
          foreground: returnHexColor("foreground"),
          primary: {
            DEFAULT: returnHexColor("primary"),
            foreground: returnHexColor("primary-foreground"),
          },
          secondary: {
            DEFAULT: returnHexColor("secondary"),
            foreground: returnHexColor("secondary-foreground"),
          },
          destructive: {
            DEFAULT: returnHexColor("destructive"),
            foreground: returnHexColor("destructive-foreground"),
          },
          muted: {
            DEFAULT: returnHexColor("muted"),
            foreground: returnHexColor("muted-foreground"),
          },
          accent: {
            DEFAULT: returnHexColor("accent"),
            foreground: returnHexColor("accent-foreground"),
          },
          popover: {
            DEFAULT: returnHexColor("popover"),
            foreground: returnHexColor("popover-foreground"),
          },
          card: {
            DEFAULT: returnHexColor("card"),
            foreground: returnHexColor("card-foreground"),
          },
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
  }
);
