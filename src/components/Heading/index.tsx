import React from "react"
import styles from "./heading.module.css"
import classNames from "classnames"

interface DataProps {
    heading?: string
    subHeading?: string
    topHeading?: string
}
interface HeadingProps {
    data: DataProps
    variant?: string
    className?: string
}

const index: React.FC<HeadingProps> = ({ data, variant = "left", className = "" }) => {
    const mainClass = classNames(
        "d-flex flex-column",
        {
            ["align-items-start"]: variant === "left",
            ["align-items-center"]: variant === "center",
            ["align-items-end"]: variant === "right",
        },
        className
    )

    return (
        <>
          
            <h2 className={`${styles.topHeading} ${className}`}>{data.topHeading}</h2>
            <h1 className={`${styles.heading} ${className}`}>{data.heading}</h1>
            <h3 className={`${styles.subHeading} ${className}`}>{data.subHeading}</h3>
         
        </>
    )
}

export default index
