'use client'
import React from 'react'
import styles from './blobDetailBox.module.css'
import Description from '@/components/Description'
import Heading from '@/components/Heading'
import Image from '@/components/Image'
import { Player } from "@lottiefiles/react-lottie-player"
interface Detail {
    heading?: string
    description: string
    subHeading?: string
    topHeading?: string
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
                    <Player autoplay loop src={image} className={styles.image} />
                </div>
                <div className={`${styles.details} pl-1 pr-1`}>
                    <Heading
                        data={{
                            heading: details.topHeading,
                        }}
                        className={`${styles.topHeading} fw-700 font-xxl`}
                    />

                    <Heading
                        data={{
                            heading: details.heading,
                        }}
                        className={`${styles.heading} fw-700 font-xxl`}
                    />

                    <Heading
                        data={{
                            heading: details.subHeading,
                        }}
                        className={`${styles.subHeading} fw-700 font-xxl`}
                    />

                    <Description description={details.description} className="mt-1" />
                </div>
            </div>
        </>
    )
}

export default index
