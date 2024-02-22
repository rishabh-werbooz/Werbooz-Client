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
}

const index = ({ Icon, title, description, bgColor, className }: DataProps) => {
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
                    className={`mt-2 font-xl fw-700`}
                />
                <Description description={description} className={`mt-1 fw-400 font-sm`} />
            </div>
        </>
    )
}

export default index
