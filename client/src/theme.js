// color design tokens
export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    50: "#E6F4FF",
    100: "#CCEDFF",
    200: "#99D9FF",
    300: "#66C5FF",
    400: "#33B2FF",
    500: "#0088FF",
    600: "#0077E6",
    700: "#0066CC",
    800: "#0055B3",
    900: "#004499",
  },
};

// mui theme settings
export const themeSettings = () => {
  return {
    palette: {
      primary: {
        dark: colorTokens.primary[600],
        main: colorTokens.primary[500],
        light: colorTokens.primary[400],
      },
      neutral: {
        dark: colorTokens.grey[100],
        main: colorTokens.grey[200],
        mediumMain: colorTokens.grey[300],
        medium: colorTokens.grey[400],
        light: colorTokens.grey[700],
      },
      background: {
        default: colorTokens.grey[10],
        alt: colorTokens.grey[0],
      },
    },
    typography: {
      fontFamily: ["Roboto Slab", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Roboto Slab", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Roboto Slab", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Roboto Slab", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Roboto Slab", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Roboto Slab", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Roboto Slab", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
