import type { Metadata } from "next";
import { Header } from "./components/header";
import "../styles/main.scss";


export const metadata: Metadata = {
    title: "Zirod Code | Portforlio",
    description: "Développeur full-stack, j’aide les entreprises à construire des applications web rapides, fiables et prêtes à passer à l’échelle.",
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
    return (

        <html lang="en" data-theme="light">
            <body>
                <Header />
                {children}
            </body>
        </html>

    );
}
