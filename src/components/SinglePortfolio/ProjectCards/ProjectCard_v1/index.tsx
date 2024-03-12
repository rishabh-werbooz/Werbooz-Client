import React from "react"
import styles from "./projectCard.module.css"
import Image from "@/components/Image"
import Description from "@/components/Description"

interface ProjectCardProps {
    description: string[] | JSX.Element[] | string | JSX.Element
    img: string
}

const index = ({ description, img }: ProjectCardProps) => {
    return (
        <>
            <div className={`align-items-start ${styles.CardContainer}`}>
                <div>
                    <Description description={description} breakLine={true} className={`fw-400 font-sm mb-2`} />
                </div>
                <div className={`${styles.ImagDiv} border-radius-full`}>
                    <Image src={img} alt="project" className={`${styles.img}`} />
                </div>
            </div>
        </>
    )
}

export default index
