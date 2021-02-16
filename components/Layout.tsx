import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Petfinder | {title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <Box as="main" minH="100vh" bg="gray.50">
        <Navbar />
        {children}
      </Box>
    </>
  );
}
