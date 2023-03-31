import NavBar from "@/common/NavBar/NavBar";
import Footer from "@/layout/Footer/Footer";
import "@/styles/globals.css";

import { createTheme, NextUIProvider, Text } from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
    const theme = createTheme({
        type: "dark", // it could be "light" or "dark"
        theme: {
            
            colors: {
                // background colors (light)
                background: "#21221c",
                backgroundAlpha: "#21221c", // used for semi-transparent backgrounds like the navbar
                foreground: "#f0e3ca",
                backgroundContrast: "#21221c",
                // brand colors
                primaryLight: '#efe4c9',
                primaryLightHover: '#6c6b5e', // commonly used on hover state
                primaryLightActive: '#32312e', // commonly used on pressed state
                primaryLightContrast: '#21221c', // commonly used for text inside the component
                primary: '#fe8303',
                primaryBorder: '#27261f',
                primaryBorderHover: '#21221c',
                primarySolidHover: '#21221c',
                primarySolidContrast: '#efe4c9', // commonly used for text inside the component
                primaryShadow: '#27261f'

                // gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
                // link: '#5E1DAD',

                // you can also create your own color
                // myColor: '#ff4ecd'

                // ...  more colors
            },
            space: {},
            fonts: {
                mono: "Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono'",
            },
            
        },
    });
    return (
        <NextUIProvider theme={theme}>
            <NavBar />
            <Component
                {...pageProps}
            />
            <Footer/>
        </NextUIProvider>
    );
}

export default MyApp;
