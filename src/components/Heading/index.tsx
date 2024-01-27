import React from 'react'
import styles from './heading.module.css'

interface DataProps {
    heading?: string
    subHeading?: string
    topHeading?: string
}
interface HeadingProps {
    data: DataProps
}

const index: React.FC<HeadingProps> = ({ data }) => {
    return (
        <>
            <div>
                <h1 className={styles.heading}>{data.heading}</h1>
                <h3 className={styles.topHeading}>{data.topHeading}</h3>
                <h2 className={styles.subHeading}>{data.subHeading}</h2>
            </div>
        </>
    )
}

export default index
