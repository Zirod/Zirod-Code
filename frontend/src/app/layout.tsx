import type { Metadata } from "next";
import { Hero } from "./components/Hero.section";
import { Header } from "./components/header";
import "../../styles/main.scss";


export const metadata: Metadata = {
    title: "Zirod Code | Portforlio",
    description: "Portfolio développeur Node.js / Next.js",
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
    return (

        <html lang="en" data-theme="dark">
            <body>
                <Header />
   
                <main>{children}</main>
            </body>
        </html>

    );
}
