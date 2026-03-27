import { Hero } from "../app/components/Hero.section";
import { Button } from "../app/components/Button";
import styles from "../styles/layout/home.module.scss";


export default function Home() {
    return (
        <div>
            <Hero />
            <main>
                <h1>Zirod Code</h1>
                <p>Full-Stack web Solutions</p>

                <div className={styles.container}>
                    <Button variant="success">Valider</Button>
                    <Button variant="danger">Supprimer</Button>
                    <Button variant="primary">Envoyer</Button>
                    <Button variant="secondary">Annuler</Button>
                </div>
            
            </main>
        </div>
    );
}
  