import React from "react"
import styles from "./projectOutline.module.css"
import Heading_v1 from "@/components/Heading/Heading_v1"
import Description from "@/components/Description"

interface DataProps {
    ProjectSummary: {
        description: string | JSX.Element | string[] | JSX.Element[]
        keywords: string[]
    }
    ProjectDetails: {
        heading: string
        description: string 
        type: string
    }[]
}

interface Props {
    data: DataProps
}

const index: React.FC<Props> = ({ data }) => {
    return (
        <>
            <div className={`${styles.ProjectContainer}`}>
                <div>
                    <div className="mb-1">
                        <Heading_v1
                            data={{
                                heading: Object.keys(data)[0],
                            }}
                            className="font-xl fw-600  "
                        />
                    </div>
                    <Description description={data.ProjectSummary.description} breakLine={true} className={`${styles.description} fw-400 font-sm mb-2`} />
                    <div className={`${styles.keywords} gap-05 mt-1 mb-1 d-flex flex-wrap  align-items-center`}>
                        {data.ProjectSummary.keywords.map((keyword, index) => (
                            <span key={index} className={`${styles.btn_1} fw-600 font-sm`}>
                                {keyword}
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="mb-1">
                        <Heading_v1
                            data={{
                                heading: Object.keys(data)[1],
                            }}
                            className="font-xl fw-600"
                        />
                    </div>
                    <div className={`${styles.ProjectDetailsContainer}`}>
                        {data.ProjectDetails.map(detail => (
                            <div key={detail.heading} className={` mb-2`}>
                                <Heading_v1
                                    data={{
                                        heading: detail.heading,
                                    }}
                                    className="font-lg fw-600"
                                />
                                {detail.type === "text" ? (
                                    <Description description={detail.description} className={`${styles.description} fw-400  mb-2`} />
                                ) : (
                                    <a href={detail.description} target="_blank" className={`${styles.webLink} fw-400  mb-2 font-lg`}>
                                        {detail.description}
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default index
