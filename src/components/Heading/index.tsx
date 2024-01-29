import React from 'react'
import styles from './heading.module.css'
import classNames from 'classnames'

interface DataProps {
    heading?: string
    subHeading?: string
    topHeading?: string
}
interface HeadingProps {
    data: DataProps,
    variant?: string,

}

const index: React.FC<HeadingProps> = ({ data, variant="left" }) => {

    const mainClass = classNames("d-flex flex-column", {
        ["align-items-start"]: variant === "left",
        ["align-items-center"]: variant === "center",
        ["align-items-end"]: variant === "right",
        
    })

    return (
        <>
            <div className={mainClass}>
                <h2 className={styles.topHeading}>{data.topHeading}</h2>
                <h1 className={styles.heading}>{data.heading}</h1>
                <h3 className={styles.subHeading}>{data.subHeading}</h3>
            </div>
        </>
    )
}

export default index
