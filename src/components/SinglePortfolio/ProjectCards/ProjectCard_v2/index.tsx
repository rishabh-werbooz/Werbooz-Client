import React from "react"
import styles from "./projectCard.module.css"
import Heading_v2 from "@/components/Heading/Heading_v2"
import Description from "@/components/Description"
import Image from "@/components/Image"
import Heading_v1 from "@/components/Heading/Heading_v1"

interface Props {
    variant: string
    topHeading: string
    heading: string[]
    description: string[]
    img: string
}

const index = ({ variant = "left", topHeading, heading, description, img }: Props) => {
    const isReversed = variant === "left" ? false : true

    return (
        <>
            <div>
                <div className={`${styles.projectContainer} ${isReversed ? styles.reverse : ""}`}>
                    <div className={`${styles.imgDiv}`}>
                        <div className="mb-1">
                            <Heading_v2
                                topHeading={topHeading}
                                headingData={[
                                    {
                                        heading: heading[0],
                                        color: "#0F172A",
                                    },
                                ]}
                                className={`font-xxl fw-600 ${styles.topHeading_1}`}
                            />
                        </div>

                        <Image src={img} alt="Weekendo" className={`${styles.image}`} />
                    </div>
                    <div className={`${styles.projectDetails}`}>
                        <Heading_v2
                            topHeading={topHeading}
                            headingData={[
                                {
                                    heading: heading[0],
                                    color: "#0F172A",
                                },
                            ]}
                            className={`font-xxl fw-600 ${styles.topHeading}`}
                        />

                        <Description
                            description={description[0]}
                            className={`font-md fw-400 mt-1 mb-2 ${styles.description}`}
                        />

                        <Heading_v1
                            data={{
                                heading: heading[1],
                            }}
                            className={`font-xl fw-600 ${styles.heading}`}
                        />
                        <Description
                            description={description[1]}
                            className={`font-md fw-400 mt-1 ${styles.description}`}
                        />
                    </div>
                </div>
                <Description
                    description={description[2]}
                    className={`font-md fw-400 mb-2 ${styles.description}`}
                />
                <Description
                    description={description[3]}
                    className={`font-md fw-600  text-primary text-italic`}
                />
            </div>
        </>
    )
}

export default index
