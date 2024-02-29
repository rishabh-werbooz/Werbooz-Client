import React from "react"
import styles from "./projectCard.module.css"
import Heading_v2 from "@/components/Heading/Heading_v2"
import Description from "@/components/Description"
import Image from "@/components/Image"
import Heading_v1 from "@/components/Heading/Heading_v1"
import ProjectListItem_v3 from "@/components/SinglePortfolio/ProjectListItems/ProjectListItem_v3"
interface Props {
    variant: string
    img: string
    heading: string
}

const index = ({ variant = "left", img, heading }: Props) => {
    const isReversed = variant === "left" ? false : true

    return (
        <>
            <div>
                <div className={`${styles.projectContainer} d-flex justify-content-start gap-4 align-items-center ${isReversed ? styles.reverse : ""}`}>
                    <div className={`${styles.imgDiv}`}>
                        <Image src={img} alt="Weekendo" className={`${styles.image}`} />
                    </div>
                    <div className={`${styles.projectDetails}`}>
                        <Heading_v1
                            data={{
                                heading: heading,
                            }}
                            className={`font-xl fw-600 ${styles.heading}`}
                        />
                        <ProjectListItem_v3 />
                    </div>
                </div>
            </div>
        </>
    )
}

export default index
