import React from "react"
import styles from "./projectTechStack.module.css"
import Stepper from "@/components/Stepper"
import Image from "@/components/Image"
import Description from "@/components/Description"
import Heading_v2 from "@/components/Heading/Heading_v2"
const index = () => {
    return (
        <div>
            <Heading_v2
                topHeading="Technology Used | Version 1"
                headingData={[
                    { heading: "We purposefully curated a selection of advanced technologies", color: "#303030" },
                    {
                        heading: " designed to enhance performance and foster collaboration.",
                        color: "#003274",
                    },
                ]}
                className={`font-xxl fw-600  ${styles.topHeading}`}
            />
            <div className={`${styles.TechContainer} mt-2`}>
                <div>
                    <Image src="/assets/portfolios/weekendo-techstack.png" alt="weekendo-tech-stack" className={styles.techStack} />
                </div>
                <Stepper />
            </div>
            <div>
                <Description
                    description="In essence, our thoughtfully curated technology stack not only facilitated efficiency, collaboration, and adaptability but also played a crucial role in achieving the successful realization of our project's objectives. After proper testing and when the client was satisfied by the product, we deployed the entire product."
                    className={`fw-600 mt-1 text-primary text-italic`}
                />
            </div>
        </div>
    )
}

export default index
