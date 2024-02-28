import React from "react"
import styles from "./projectOverview.module.css"
import ProjectListItems_v2 from "@/components/SinglePortfolio/ProjectListItems/ProjectListItem_v2"
import Heading_v2 from "@/components/Heading/Heading_v2"
import Description from "@/components/Description"
import KeywordBold from "@/components/utils/KeywordBold"
import Image from "@/components/Image"
const index = () => {
    return (
        <div>
            <div className="mb-2">
                <Heading_v2
                    topHeading="Project Overview"
                    headingData={[
                        {
                            heading: "Weekendo came to us with a very interesting idea",
                            color: "#303030",
                        },
                        {
                            heading: " They wanted two things",
                            color: "#003274",
                        },
                    ]}
                    className={`font-xxl fw-600 ${styles.topHeading}`}
                />
            </div>
            <div className={`${styles.projectContent} d-flex gap-4 mb-2`}>
                <div>
                    <KeywordBold
                        keyword={["Firstly", "Secondly"]}
                        text={[
                            "Firstly, they wanted a Proprietary Software through which they can create their newsletter and deliver that newsletter to their audience. The software isn’t a normal software But The Software categorise’s the audience according to the city that they have selected So for example, if you have filled the form and you are from Pune City, then you will receive all the category updates of Pune City to plan your weekend.",
                            "Secondly, they wanted a beautiful website in order to attract their audience so that they sign up for the weekly newsletter.",
                            "There were some common doubts About the weekly newsletters, like :",
                        ]}
                        breakLine={true}
                    />
                </div>
                <Image src="/assets/portfolios/Picture-10.svg" alt="Project Overview" />
            </div>
            <ProjectListItems_v2 />
        </div>
    )
}

export default index
