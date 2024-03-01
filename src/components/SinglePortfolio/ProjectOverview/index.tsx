import React from "react"
import styles from "./projectOverview.module.css"
import ProjectListItems_v2 from "@/components/SinglePortfolio/ProjectListItems/ProjectListItem_v2"
import Heading_v2 from "@/components/Heading/Heading_v2"
import Description from "@/components/Description"
import KeywordBold from "@/components/utils/KeywordBold"
import Image from "@/components/Image"
interface Props {
    topHeading: string
    headingData: { heading: string; color: string }[]
    keyWordsBold: { keyword: string[]; text: string[] }[]
    img: string

    ProjectItems: {
        heading: string
        description: string
    }[]
}

const index = ({ topHeading, headingData, keyWordsBold, img, ProjectItems }: Props) => {
    return (
        <div>
            <div className="mb-1">
                <Heading_v2
                    topHeading={topHeading}
                    headingData={[
                        {
                            heading: headingData[0].heading,
                            color: headingData[0].color,
                        },
                        {
                            heading: headingData[1].heading,
                            color: headingData[1].color,
                        },
                    ]}
                    className={`font-xxl fw-600 ${styles.topHeading}`}
                />
            </div>
            <div className={`${styles.projectContent} d-flex gap-4 mb-2`}>
                <div>
                    <KeywordBold keyword={keyWordsBold[0].keyword} text={keyWordsBold[0].text} breakLine={true} />
                </div>
                <Image src={img} alt="Project Overview" />
            </div>
            <div className="mb-2">
                <ProjectListItems_v2 data_1={ProjectItems} />
            </div>
        </div>
    )
}

export default index
