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
                                topHeading="System Developed"
                                headingData={[
                                    {
                                        heading: "Automated Newsletter Sending System",
                                        color: "#0F172A",
                                    },
                                ]}
                                className={`font-xxl fw-600 ${styles.topHeading_1}`}
                            />
                        </div>

                        <Image src="/assets/portfolios/Picture-8.svg" alt="Weekendo" className={`${styles.image}`} />
                    </div>
                    <div className={`${styles.projectDetails}`}>
                        <Heading_v2
                            topHeading="System Developed"
                            headingData={[
                                {
                                    heading: "Automated Newsletter Sending System",
                                    color: "#0F172A",
                                },
                            ]}
                            className={`font-xxl fw-600 ${styles.topHeading}`}
                        />

                        <Description
                            description="Step into the world of Weekendo, Where we have created an Automated Newsletter Sending System. This complex mechanism seamlessly delivers personalized newsletters according to the taaste of the users, catering to users based on their chosen city and unique category preferences.Now, Picture this: our in-house Weekendo team meticulously crafts these newsletters , infusing them with diverse themes that go beyond mere information deliverya and provide user with an amazing reading experience."
                            className={`font-md fw-400 mt-1 mb-2 ${styles.description}`}
                        />

                        <Heading_v1
                            data={{
                                heading: "Now Picture This : ",
                            }}
                            className={`font-xl fw-600 ${styles.heading}`}
                        />
                        <Description
                            description="Our in-house Weekendo team meticulously crafts these newsletters, infusing them with diverse themes that go beyond mere information delivery and provide users with an amazing reading experience."
                            className={`font-md fw-400 mt-1 ${styles.description}`}
                        />
                    </div>
                </div>
                <Description
                    description="Imagine your reading experience being not just tailored but elevated. This system is designed in such an smart and intelligent way that tailors content according to each user's chosen category, ensuring the delivery of relevant data and an elevated user engagement."
                    className={`font-md fw-400 mb-2 ${styles.description}`}
                />
                <Description
                    description="The plethora of themes we offer isn't just for show but it's a commitment to keeping the content fresh, appealing, and distinctly aligned with individual tastes. At Weekendo, the Automated Newsletter Sending System is a gateway to a world of personalized and captivating information."
                    className={`font-md fw-600 mb-2 pb-2 text-primary text-italic`}
                />
            </div>
        </>
    )
}

export default index
