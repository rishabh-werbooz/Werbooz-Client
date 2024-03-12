import React from "react"
import styles from "./description.module.css"
import classnames from "classnames"

interface DataProps {
    description: string | string[] | JSX.Element | JSX.Element[]
    className?: string
    breakLine?: boolean 
}

const index: React.FC<DataProps> = ({ description, className = "", breakLine = false }) => {
    const mainClass = classnames(styles.description, "font-lg fw-400 lh-150", className)

    const renderDescription = () => {
        switch (typeof description) {
            case "string":
                return <p className={mainClass}>{description}</p>
            case "object":
                if (Array.isArray(description)) {
                    return (
                        <div className={mainClass}>
                            {description.map((text, index) => (
                                <React.Fragment key={index}>
                                    <p>{text}</p>
                                    {breakLine && <br />}
                                </React.Fragment>
                            ))}
                        </div>
                    )
                } else {
                    return <div className={mainClass}>{description}</div>
                }
            default:
                return null
        }
    }

    return <>{renderDescription()}</>
}

export default index
