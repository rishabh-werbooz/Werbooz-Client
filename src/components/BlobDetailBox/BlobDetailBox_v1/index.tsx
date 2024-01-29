import React from 'react'
import styles from './blobDetailBox.module.css'
import Description from '@/components/Description/index'
interface Detail {
    heading?: string
    description: string
    subHeading?: string
    topHeading?: string
}
interface DataProps {
    variant: string
    image?: string
    details: Detail
}

const index = ({ variant, image, details }: DataProps) => {
    return (
        <>
            <div className={`${styles.main} ${styles[variant]}`}>
                <div className={styles.imageContainer}>
                    <img src={image} alt="image" />
                </div>
                <div className={styles.details}>
                    <div className={styles.topHeading}>
                        <h2>{details.topHeading}</h2>
                    </div>
                    <div className={styles.heading}>
                        <h1>{details.heading}</h1>
                    </div>
                    <div className={styles.subHeading}>
                        <h3>{details.subHeading}</h3>
                    </div>
                    <Description description={details.description} />
                </div>
            </div>
        </>
    )
}

export default index
