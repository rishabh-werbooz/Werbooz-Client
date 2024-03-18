import React from "react"
import Image from "@/components/Image"
import styles from "./iconBox.module.css"
import Description from "@/components/Description"
import Heading from "@/components/Heading/Heading_v1"
import classNames from "classnames"

interface DataProps {
    Icon: string
    title: string
    description: string
    bgColor: string
    className?: string
    headingClasses?: string
    descriptionClasses?: string
}

const index = ({ Icon, title, description, bgColor, className, headingClasses = "",descriptionClasses="" }: DataProps) => {
    const IconBox = classNames(styles.iconBoxInner, className)

    return (
        <>
            <div
                className={IconBox}
                style={{ backgroundColor: bgColor }} // for just background color here inlined style is used
            >
                <Image src={Icon} alt="IconBox__Icon" className={styles.iconBoxIcon} />
                <Heading
                    data={{
                        heading: title,
                    }}
                    className={`mt-05 font-xl fw-700 ${headingClasses}`}
                />
                <Description description={description} className={`mt-05 fw-400 font-sm ${descriptionClasses}`} />
            </div>
        </>
    )
}

export default index
