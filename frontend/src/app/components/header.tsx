import Link from "next/link";
import Image from "next/image";
import styles from '@/styles/components/header.module.scss'
import {Button} from "./Button";

export function Header(){

    return(

        <div className={styles.header}>
            <div className={styles.container}>
                <Image className={styles.logo} src="/icon.png" alt="logo" width={50} height={50}/>
                <nav className={styles.nav}>
                    <ul className={styles.nav_links}>
                        <li className={styles.nav_links}><Link href="/">Accueil</Link></li>
                        <li className={styles.nav_links}><Link href="/"></Link>A Propos</li>
                        <li className={styles.nav_links}><Link href="/"></Link>Services</li>
                        <li className={styles.nav_links}><Link href="/"></Link>Tarification</li>
                        <li className={styles.nav_links}><Link href="/"></Link>Contact</li>
                        <li className={styles.nav_links}><Link href="/"></Link><Button variant="primary">Devis</Button></li>
                    </ul>
                </nav>
            </div>
        </div>

    )

}