import React from "react";
import Head from "next/head";
import  Box from "../Box/Box";

const Body = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>Christian Lisantti | {title} </title>
                {/* <!-- Required meta tags --> */}
                <meta name="description" content="My portfolio." />
                <meta
                    name="keywords"
                    content="Christian Lisantti, @Incmplir, portfolio"
                />
                <meta name="author" content="Christian Lisantti, @Incmplir" />

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                {/* IconsGoogle */}
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,300,0,0" />
            </Head>
            <main className='selection:bg-primary-100 selection:text-text-100'>
                <Box>{children}</Box>
            </main>
        </>
    );
};

export default Body;
