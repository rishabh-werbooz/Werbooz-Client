import React from "react"
import styles from "./projectTechStack.module.css"
import Stepper from "@/components/Stepper"
import Image from "@/components/Image"
import Description from "@/components/Description"
import Heading_v2 from "@/components/Heading/Heading_v2"
interface Props {
    topHeading: string
    img: string
    headingData: { heading: string; color: string }[]
}

const index = ({ topHeading, img,headingData }: Props) => {
    return (
        <div>
            <Heading_v2
                topHeading={topHeading}
                headingData={[
                  headingData[0],
                    headingData[1],
                ]}
                className={`font-xxl fw-600  ${styles.topHeading}`}
            />
            <div className={`${styles.TechContainer} mt-2`}>
                <div>
                    <Image src={img} alt="weekendo-tech-stack" className={styles.techStack} />
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
