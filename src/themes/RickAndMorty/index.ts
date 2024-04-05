import { extendTheme } from "@chakra-ui/react";

import bg from "@/assets/images/bg.jpg";

const rickAndMorty = extendTheme({
  colors: {
    brand: {
      50: "#E6FFFF",
      100: "#B3FFFF",
      200: "#80FFFF",
      300: "#4DFFFF",
      400: "#1AFFFF",
      500: "#00E6E6",
      600: "#00B3B3",
      700: "#008080",
      800: "#004D4D",
      900: "#001A1A",
    },
    secondary: {
      50: "#FFF5E6",
      100: "#FFE0B3",
      200: "#FFCC80",
      300: "#FFB74D",
      400: "#FFA726",
      500: "#FF9800",
      600: "#F57C00",
      700: "#EF6C00",
      800: "#E65100",
      900: "#D84300",
    },
    accent: {
      50: "#F3E5F5",
      100: "#E1BEE7",
      200: "#CE93D8",
      300: "#BA68C8",
      400: "#AB47BC",
      500: "#9C27B0",
      600: "#8E24AA",
      700: "#7B1FA2",
      800: "#6A1B9A",
      900: "#4A148C",
    },
    neutral: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  styles: {
    global: () => ({
      body: {
        bgImage: bg,
        bgSize: "auto",
        bgRepeat: "no-repeat",
        bgPosition: "center",
      },
    }),
  },
});

export { rickAndMorty };
