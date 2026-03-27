import { Hero } from "../app/components/Hero.section";
import { Button } from "../app/components/Button";
import styles from "../styles/layout/home.module.scss";
import { Card } from "./components/Card";


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
                    <Button variant="warning" icon={<span>🚀</span>} >Lancer</Button>
                    <Button variant="danger" icon={<span>❌</span>} iconPosition="right">Supprimer</Button>

                    <Card image="/1774434686.png" title="Card Title 1" description="This is a description for card 1." />
                    <Card image="/1774434686.png" title="Card Title 2" description="This is a description for card 2." />
                    <Card image="/1774434686.png" title="Card Title 3" description="This is a description for card 3." />
                    <Card image="/1774434686.png" title="Card Title 3" description="This is a description for card 3." />
                    <Card image="/1774434686.png" title="Card Title 3" description="This is a description for card 3." />
                    <Card image="/1774434686.png" title="Card Title 3" description="This is a description for card 3." />
                    <Card image="/1774434686.png" title="Card Title 3" description="This is a description for card 3." />
                    <Card image="/1774434686.png" title="Card Title 3" description="This is a description for card 3." />
                    <Card image="/1774434686.png" title="Card Title 3" description="This is a description for card 3." />
                    <Card image="/1774434686.png" title="Card Title 3" description="This is a description for card 3." />
                    <Card image="/1774434686.png" title="Card Title 3" description="This is a description for card 3." />
                    <Card image="/1774434686.png" title="Card Title 3" description="This is a description for card 3." />
                </div>
            
            </main>
        </div>
    );
}
  