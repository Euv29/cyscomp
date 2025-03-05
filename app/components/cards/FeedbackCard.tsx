import Image from 'next/image';
import styles from './FeedbackCard.module.css';

interface FeedbackCardProps {
    name: string;
    mensange: string;
    imageUrl: string;
    className?: string;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ name, mensange, imageUrl, className }) => {

    return (
        <section className={`${styles.FeedbackCard} ${className} flex gap-2 rounded-xl p-4 h-fit`}>
            <Image src={imageUrl} alt={name} width={30} height={30} className={`${styles.Image} flex w-10 h-10`} />
            <section className={`${styles.FeedbackCardContent} flex flex-col gap-1 w-full`}>
                <section className='flex flex-col w-full h-full text'>
                    <h3 className={`${styles.name} w-full font-bold`}>{name}</h3>
                    <p className={`${styles.mensange} w-full`}>{mensange}</p>
                </section>
                <section className="flex justify-end stars">
                    <Image src='/img/Stars.png' alt={name} width={80} height={50} className={`${styles.Image}`} />
                </section>
            </section>
        </section>
    );
};

export default FeedbackCard;