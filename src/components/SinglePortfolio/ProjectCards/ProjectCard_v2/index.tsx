import React from "react"
import styles from "./projectCard.module.css"
import Heading_v2 from "@/components/Heading/Heading_v2"
import Description from "@/components/Description"
import Image from "@/components/Image"
import Heading_v1 from "@/components/Heading/Heading_v1"

interface Props {
    content?: {
        variant?: string
        img?: string
        cardContent?: {
            topHeading?: string
            headingData?: { heading: string; color: string }[]
            heading?: string
            description?: string | JSX.Element | string[] | JSX.Element[]
        }[]
    }
}

const index = ({ content }: Props) => {
  
    const { variant, img, cardContent }:any = content
    const isReversed = variant === "left" ? false : true

    return (
        <>
            <div>
                <div className={`${styles.projectContainer} ${isReversed ? styles.reverse : ""} mb-1`}>
                    <div className={`${styles.imgDiv}`}>
                        <div className="mb-1">
                            <Heading_v2 topHeading={cardContent[0].topHeading} headingData={cardContent[0].headingData} className={`font-xxl fw-600 ${styles.topHeading_1}`} />
                        </div>

                        <Image src={img} alt="Weekendo" className={`${styles.image}`} />
                    </div>
                    <div className={`${styles.projectDetails}`}>
                        {/* Only first 2 objects of cardContent are being used */}
                        <Heading_v2 topHeading={cardContent[0].topHeading} headingData={cardContent[0].headingData} className={`font-xxl fw-600 ${styles.topHeading}`} />

                        <Description description={cardContent[0].description} className={`font-md fw-400 mt-1 mb-2 ${styles.description}`} />

                        <Heading_v1
                            data={{
                                heading: cardContent[1].heading,
                            }}
                            className={`font-xl fw-600 ${styles.heading}`}
                        />
                        {cardContent[1]?.description && <Description description={cardContent[1].description} className={`font-md fw-400 mt-1 ${styles.description}`} />}
                    </div>
                </div>
                {/*  rest of the cardContent Objects are being used here */}
                {cardContent.slice(2).map((content:any, index:number) =>
                    content.heading ? (
                        <div key={index} className={`${styles.projectDetails} ${styles.projectDetails_2} mb-2`}>
                            <Heading_v1
                                data={{
                                    heading: content.heading,
                                }}
                                className={`font-xl fw-600 ${styles.heading}`}
                            />
                            <Description description={content.description} className={`font-md fw-400 mt-1 ${styles.description}`} />
                        </div>
                    ) : (
                        content.description && <Description key={index} description={content.description} breakLine={false} className={`font-md fw-600  text-primary text-italic`} />
                    )
                )}
            </div>
        </>
    )
}

export default index
