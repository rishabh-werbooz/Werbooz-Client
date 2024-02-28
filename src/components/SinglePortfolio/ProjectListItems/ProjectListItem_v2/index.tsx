import React from "react"
import styles from "./projectItems.module.css"
import { TbSquareRoundedFilled } from "react-icons/tb"
import { IoCheckmarkDoneOutline } from "react-icons/io5"

import Heading_v1 from "@/components/Heading/Heading_v1"
import Description from "@/components/Description"

const data = [
    {
        heading: "What if I face some issues ?",
        description:
            "The newsletters will be created using Weekendo’s proprietary software and you can reach out to Weekendo in case of any miscommunication or change of interest categories.",
    },
    {
        heading: "Are you responsible for the events?",
        description:
            "The options shared in the newsletter will be curated by us and not created by us i.e Weekendo won’t take any responsibility of the quality for any of the choices shared.",
    },
    {
        heading: "Will I be Spammed by newsletters?",
        description: " You will receive a newsletter every week on Wednesday from weekendo, by evening.",
    },
    {
        heading: "But I want a customized Newsletter!",
        description: " It will be customized for you and will only have options in the weekend lifestyle categories of your choice. ",
    },
]

interface DataTypes {
    heading: string
    description: string
}

interface Props {
    data_1: DataTypes[]
}

const index = ({ data_1 }: Props) => {
    return (
        <>
            <div className={`${styles.itemContainer}`}>
                {data.map((item, index) => {
                    return (
                        <div key={index} className={styles.projectItems}>
                            <div>
                                <IoCheckmarkDoneOutline className={styles.icon} />
                            </div>
                            <div>
                                <Heading_v1
                                    data={{
                                        heading: item.heading,
                                    }}
                                    className={`font-lg fw-600 ${styles.heading}`}
                                />
                                <Description description={item.description} className={`font-md fw-400 mt-1 ${styles.description}`} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default index
