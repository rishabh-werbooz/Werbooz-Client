import React from "react"
import styles from "./projectCard.module.css"
import Image from "@/components/Image"
import Description from "@/components/Description"

interface ProjectCardProps {
    description: string[]
    img: string
}

const index = ({ description, img }: ProjectCardProps) => {
    return (
        <>
            <div className={`align-items-start ${styles.CardContainer}`}>
                <div>
                    <Description
                        description={description[0]}
                        className={`fw-400 font-sm mb-2`}
                    />

                    <Description
                        description={description[1]}
                        className={`fw-400 font-sm`}
                    />
                </div>
                <div className={`${styles.ImagDiv} border-radius-full`}>
                    <Image src={img} alt="project" className={`${styles.img}`} />
                </div>
            </div>
        </>
    )
}

export default index
