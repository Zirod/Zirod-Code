import type { Metadata } from "next";
import "../../styles/main.scss";


export const metadata: Metadata = {
  title: "% | Zirod Code",
  description: "Portfolio développeur Node.js / Next.js",
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (

    <html lang="en" data-theme="dark">
        <body>
            <main>
            {children}
            </main>
        </body>
    </html>

  );
}
