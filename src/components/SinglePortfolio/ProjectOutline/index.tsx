import React from "react"
import styles from "./projectOutline.module.css"
import Heading_v1 from "@/components/Heading/Heading_v1"
import Description from "@/components/Description"

interface Props {
    description: string[]
    keywords: string[]
}

const index = ({ description, keywords }: Props) => {
    return (
        <>
            <div className={`${styles.ProjectContainer}`}>
                <div>
                    <div className="mb-1">
                        <Heading_v1
                            data={{
                                heading: "Project Summary",
                            }}
                            className="font-xl fw-600  "
                        />
                    </div>
                    <Description description={description[0]} className={`${styles.description} fw-400 font-sm mb-2`} />
                    <div className={`${styles.keywords} gap-05 mt-1 mb-1 d-flex flex-wrap  align-items-center`}>
                        {keywords.map((keyword, index) => (
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
                                heading: "Project Details",
                            }}
                            className="font-xl fw-600"
                        />
                    </div>
                    <div className={`${styles.ProjectDetailsContainer}`}>
                        <div>
                            <Heading_v1
                                data={{
                                    heading: "Duration :",
                                }}
                                className="font-lg fw-600"
                            />
                            <Description description={description[1]} className={`${styles.description} fw-400  mb-2`} />
                        </div>
                        <div className="mb-2">
                            <Heading_v1
                                data={{
                                    heading: "Website :",
                                }}
                                className="font-lg fw-600"
                            />

                            <a href={description[2]} target="_blank" className={`${styles.webLink} fw-400  mb-2 font-lg`}>
                                {description[2]}
                            </a>

                        </div>
                        <div>
                            <Heading_v1
                                data={{
                                    heading: "Tools :",
                                }}
                                className="font-lg fw-600"
                            />
                            <Description description={description[3]} className={`${styles.description} fw-400  mb-2`} />
                        </div>
                        <div>
                            <Heading_v1
                                data={{
                                    heading: "Technologies used :",
                                }}
                                className="font-lg fw-600"
                            />
                            <Description description={description[4]} className={`${styles.description} fw-400 `} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index
