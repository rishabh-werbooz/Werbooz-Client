import React from 'react'
import styles from './portfolio.module.css'

interface DataProps {
    bgColor: string
    title: string
    description: string
    btnText: string
    btnLink: string
    image: string[]
    keywords: string[]
}

const PortfolioCard: React.FC<{ data: DataProps }> = ({ data }) => {
    return (
        <div
            className={styles.portfolioCard}
            style={{ backgroundColor: data.bgColor }}
        >
            <div className={styles.portfolioCard__content}>
                <h2 className={styles.portfolioCard__title}>{data.title}</h2>
                <div className={styles.keywords}>
                    <button className={styles.btn_1}>User Research</button>
                    <button className={styles.btn_1}>UX Design</button>
                </div>
                <p className={styles.portfolioCard__description}>
                    {data.description}
                </p>

                <button className={styles.btn}>Read Case Study</button>
            </div>
            <div className={styles.portfolioCard__image}>
                <img
                    src={data.image[1]}
                    alt="portfolio"
                    className={styles.img1}
                />
                <img
                    src={data.image[0]}
                    alt="portfolio"
                    className={styles.img}
                />
            </div>
        </div>
    )
}

export default PortfolioCard
