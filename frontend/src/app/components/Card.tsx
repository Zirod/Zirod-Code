import Image from 'next/image';
import Styles from '@/styles/components/card.module.scss';

export function Card({ image, title, description }: { image: string; title: string; description: string; }) {
    return (
        <div className={Styles.card}>
             <div className={Styles.cardImageWrapper}>
                    <Image src={image} alt={title}  fill style={{ objectFit: "cover" }}  />
            </div>
            <div className={Styles.cardContent}>
                <h3 className={Styles.cardTitle}>{title}</h3>
                <p className={Styles.cardDescription}>{description}</p>
            </div>  
        </div>
    );
}
