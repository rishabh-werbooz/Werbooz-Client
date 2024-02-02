import React from 'react'
import styles from './portfolio.module.css'
import Description from '@/components/Description'
import Button from '@/components/Buttons'
import Heading from '@/components/Heading'
import { FaExternalLinkAlt } from 'react-icons/fa'
import Image from '@/components/Image'

interface DataProps {
    bgColor: string
    title: string
    description: string
    btnText: string
    btnLink: string
    image: string[]
    keywords: string[]
}
const bgImage =
    'https://cdn.dribbble.com/users/12604760/screenshots/19403238/media/d48fb0f343c6c02c2ccc6aa449ea8318.png?resize=1000x750&vertical=center'

const PortfolioCard: React.FC<{ data: DataProps }> = ({ data }) => {
    return (
        <div
            className={styles.portfolioCard}
            style={{ backgroundColor: data.bgColor }}
        >
            <div className={styles.portfolioCard__content}>
                <Heading
                    data={{
                        heading: data.title,
                    }}
                    className="font-xl fw-600"
                />
                <div
                    className={`${styles.keywords} gap-1 mt-1 mb-1 d-flex align-items-center`}
                >
                    {data.keywords.map((keyword, index) => (
                        <span
                            key={index}
                            className={`${styles.btn_1} fw-600 font-sm`}
                        >
                            {keyword}
                        </span>
                    ))}
                </div>

                <Description
                    description={data.description}
                    className={`${styles.description}`}
                />

                <Button
                    variant="solid"
                    rounded="md"
                    text={data.btnText}
                    className={`${styles.btn} mt-1`}
                    rightIcon={<FaExternalLinkAlt />}
                />
            </div>
            <div>
                <Image
                    src={bgImage}
                    alt="portfolio"
                    className={styles.portfolioCard__image}
                />
            </div>
        </div>
    )
}

export default PortfolioCard
