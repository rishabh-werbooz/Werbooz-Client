"use client"
import React from "react"
import styles from "./blobDetailBox.module.css"
import Description from "@/components/Description"
import Heading from "@/components/Heading/Heading_v1"
import Image from "@/components/Image"
import { Player } from "@lottiefiles/react-lottie-player"
import Heading_v2 from "@/components/Heading/Heading_v2"

interface Detail {
    heading?: string
    description: string
    subHeading: string
    topHeading: string
}
interface DataProps {
    variant: string
    image: string
    details: Detail
}

const index = ({ variant, image, details }: DataProps) => {
    return (
        <>
            <div className={`${styles.main} ${styles[variant]}`}>
                <div className={styles.imageContainer}>
                    {/* <Image src={image} alt="blob" className={styles.image} /> */}
                    {/* <Player autoplay loop src={image} className={styles.image} /> */}
                </div>
                <div className={`${styles.details} pl-1 pr-1`}>
                    <Heading_v2
                        headingData={[
                            { heading: details.topHeading, color: "#FFFFFF" },
                            {
                                heading: details.subHeading,
                                color: "#9BBFEE",
                            },
                        ]}
                        break={true}
                        className={`fw-700 font-xxl`}
                    />

                    <Description description={details.description} className={`mt-1 ${styles.description}`} />
                </div>
            </div>
        </>
    )
}

export default index
