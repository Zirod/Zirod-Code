import Image  from 'next/image';
import { Button } from '@/app/components/Button';
import styles from '@/styles/components/hero.module.scss';

export function Hero() {
    return (

        <section className={styles.container}>

            <div className={styles.content}>

                <h1 className={styles.title}>Je transforme vos idées en applications web performantes</h1>
                <p className={styles.description}>
                    Développeur full-stack, j’aide les entreprises à construire des applications web rapides, fiables et prêtes à passer à l’échelle.
                </p>

                <Button variant="primary">Travaillons ensemble</Button>
            </div>

            <div className={styles.image}>
               
            </div>

            
        </section>

    )
}