import React from "react"
import styles from "./heading.module.css"
import classNames from "classnames"

interface HeadingProps {
    heading: string
    color: string
}

interface Props {
    headingData: HeadingProps[]
    subHeading?: string
    topHeading?: string
    className?: string
    break?: boolean
}

const index = ({ headingData, subHeading, topHeading, className, break: breakLine = false }: Props) => {
    return (
        <>
            {topHeading && <h3 className={`${styles.topHeading} ${className}`}>{topHeading}</h3>}
            {headingData.length > 0 && (
                <h2 className={`${styles.heading} ${className}`}>
                    {headingData.map((data, index) => (
                        <span key={index} style={{ color: data.color }}>
                            {data.heading}
                            {breakLine && <br />}
                        </span>
                    ))}
                </h2>
            )}
            {subHeading && <h4 className={`${styles.subHeading} ${className}`}>{subHeading}</h4>}
        </>
    )
}

export default index
