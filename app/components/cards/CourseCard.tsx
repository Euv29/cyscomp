import React, { useState } from 'react';
import Image from 'next/image';
import styles from './CourseCard.module.css';
import Button from "../button/Button";
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';

interface CourseCardProps {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, imageUrl, link }) => {
    const [isSaved, setIsSaved] = useState(false);

    const handleSaveClick = () => {
        setIsSaved(!isSaved);
    };

    return (
        <div className={`${styles.card} flex flex-col min-w-[250px] min-h-[350px] p-4 gap-2 rounded-xl relative justify-between`}>
            <div className="top-2 right-2 absolute cursor-pointer" onClick={handleSaveClick}>
                {isSaved ? <FaBookmark size={15} /> : <FaRegBookmark size={15} />}
            </div>
            <Image src={imageUrl} alt={title} width={250} height={50} className={`${styles.Image} flex`} />
            <div className={`${styles.content} flex flex-col gap-1 md:gap-1 h-full`}>
                <h3 className={`${styles.title} font-bold`}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
            <Button href={link} variant="default" showArrow>Começar Agora</Button>
        </div>
    );
};

export default CourseCard;