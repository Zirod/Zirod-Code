import { Hero } from "../app/components/Hero.section";
import { Button } from "../app/components/Button";
import styles from "../styles/layout/home.module.scss";
import { Card } from "./components/Card";
import { Modal } from "./components/Modal";

const cardsData = [
    {
        image: "/1774434686.png",
        title: "Card Title 1",
        description: "This is a description for card 1.",
    },
    { 
        image: "/1774434686.png", 
        title: "Card Title 2",
        description: "This is a description for card 2.",
    },
    { 
        image: "/1774434686.png", 
        title: "Card Title 2",
        description: "This is a description for card 2.",
    },
    { 
        image: "/1774434686.png", 
        title: "Card Title 2",
        description: "This is a description for card 2.",
    },
    { 
        image: "/1774434686.png", 
        title: "Card Title 2",
        description: "This is a description for card 2.",
    },
    { 
        image: "/1774434686.png", 
        title: "Card Title 2",
        description: "This is a description for card 2.",
    }
]


export default function Home() {
    return (
        <>
        <div>
            <Hero />
            <main>
                <Modal btn_text="Ouvrir le Modal" key="modal-1">
                    <h2>Contactez-moi</h2>
                    <p>Parlez-moi de votre projet 👇</p>
                </Modal>

                <Button variant="success">Valider</Button>
                <Button variant="danger">Supprimer</Button>
                <Button variant="primary">Envoyer</Button>
                <Button variant="secondary">Annuler</Button>
                <Button variant="warning" icon={<span>🚀</span>} >Lancer</Button>
                <Button variant="danger" icon={<span>❌</span>} iconPosition="right">Supprimer</Button>


                <div className={styles.container}>
                   
                    {cardsData.map((card, index) => (
                        <Card key={index} image={card.image} title={card.title} description={card.description} />
                    ))}

                </div>

                
            
            </main>
        </div>
        </>
    );
}
  