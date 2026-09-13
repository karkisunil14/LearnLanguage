// Design tokens for the Lingua design system.
// Keep these values in sync with the `@theme` block in global.css.
// Use this file only where NativeWind className can't reach (see the
// Style Exception Rules in AGENTS.md - SafeAreaView, shadows, Modal, etc).

export const colors = {
  brand: {
    purple: "#6C4EF5",
    deepPurple: "#5B3BF6",
    blue: "#4D8BFF",
    green: "#21C16B",
  },
  semantic: {
    success: "#21C16B",
    warning: "#FFC800",
    streak: "#FF8A00",
    error: "#FF4D4F",
    info: "#4D8BFF",
  },
  neutral: {
    textPrimary: "#0D132B",
    textSecondary: "#6B7280",
    border: "#E5E7EB",
    surface: "#F6F7FB",
    background: "#FFFFFF",
  },
} as const;

export const fontFamily = {
  regular: "Poppins_400Regular",
  medium: "Poppins_500Medium",
  semiBold: "Poppins_600SemiBold",
  bold: "Poppins_700Bold",
} as const;

type TextStyleToken = {
  fontSize: number;
  lineHeight: number;
  fontFamily: string;
};

export const typography: Record<
  "h1" | "h2" | "h3" | "h4" | "bodyLarge" | "bodyMedium" | "bodySmall" | "caption",
  TextStyleToken
> = {
  h1: { fontSize: 32, lineHeight: 32 * 1.2, fontFamily: fontFamily.bold },
  h2: { fontSize: 24, lineHeight: 24 * 1.3, fontFamily: fontFamily.semiBold },
  h3: { fontSize: 20, lineHeight: 20 * 1.3, fontFamily: fontFamily.semiBold },
  h4: { fontSize: 16, lineHeight: 16 * 1.4, fontFamily: fontFamily.medium },
  bodyLarge: { fontSize: 16, lineHeight: 16 * 1.6, fontFamily: fontFamily.regular },
  bodyMedium: { fontSize: 14, lineHeight: 14 * 1.6, fontFamily: fontFamily.regular },
  bodySmall: { fontSize: 13, lineHeight: 13 * 1.6, fontFamily: fontFamily.regular },
  caption: { fontSize: 11, lineHeight: 11 * 1.4, fontFamily: fontFamily.regular },
};
