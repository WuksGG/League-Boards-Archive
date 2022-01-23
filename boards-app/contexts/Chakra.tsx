import { ReactFragment } from 'react';
import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
  extendTheme,
  ThemeConfig,
  DarkMode,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  styles: {
    global: (props: {
      colorMode: 'dark',
      theme: object,
    }) => ({
      'body': {
        bg: mode('light.900', 'dark.900')(props),
        color: '#fff',
      },
    }),
  },
  colors: {
    dark: {
      100: "#fff", // white
      200: "#C9C9C9", // color of time meta and system notif
      300: "#A5A5A5", // color of duller modal
      400: "#595959",
      500: "#37444D", // Search Bar lighter
      600: "#37444d",
      700: "#2F2F2F",
      800: "#1F2125", // Header Color, Dark Gray
      900: "#000002",
    }, // invert the colors
    light: {
      100: "#0766c2", // white
      200: "#1F2125", // color of time meta and system notif
      300: "#2F2F2F", // color of duller modal
      400: "#595959",
      500: "#fff", // Search Bar lighter
      600: "#dae4f7", // other chat bubble color
      700: "#A5A5A5",
      800: "#fff", // Header Color, Dark Gray
      900: "#f4f2ef",
    },
  },
};

export const theme = extendTheme(config);

export function Chakra({ cookies, children }: { cookies: string, children: ReactFragment }) {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManager(cookies)
      : localStorageManager;

  return (
    <ChakraProvider
      resetCSS={false}
      theme={theme}
      colorModeManager={colorModeManager}
    >
      <DarkMode>
        {children}
      </DarkMode>
    </ChakraProvider>
  );
}
