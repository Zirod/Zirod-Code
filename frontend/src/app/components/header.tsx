import Link from "next/link";
import Image from "next/image";
import styles from '@/styles/components/header.module.scss'
import {Button} from "./Button";

const linkItems = [
    { name: "Accueil", href: "/" },
    { name: "A Propos", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Tarification", href: "/pricing" },
    { name: "Contact", href: "/contact" },
];

export function Header(){

    return(

        <div className={styles.header}>
            <div className={styles.container}>
                <Image className={styles.logo} src="/icon.png" alt="logo" width={50} height={50}/>
                <nav className={styles.nav}>
                    <ul className={styles.nav_links}>

                        {linkItems.map((item) => (
                            <li className={styles.nav_links} key={item.href}>
                                <Link className={styles.nav_links} href={item.href}>{item.name}</Link>
                            </li>
                        ))}
                        
                        <li className={styles.nav_links}>
                            <Button variant="primary">Devis</Button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

    )

}