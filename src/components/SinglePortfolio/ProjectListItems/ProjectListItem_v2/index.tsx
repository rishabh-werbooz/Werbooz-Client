import React from "react"
import styles from "./projectItems.module.css"
import { TbSquareRoundedFilled } from "react-icons/tb"
import { IoCheckmarkDoneOutline } from "react-icons/io5"
import { HiCheck } from "react-icons/hi"
import ListIcon from "@/components/ListIcon"

import Heading_v1 from "@/components/Heading/Heading_v1"
import Description from "@/components/Description"


interface DataTypes {
    heading: string
    description: string
}

interface Props {
    data: DataTypes[]
}

const index = ({ data }: Props) => {
    return (
        <>
            <div className={`${styles.itemContainer}`}>
                {data.map((item, index) => {
                    return (
                        <div key={index} className={styles.projectItems}>
                            <div>
                                <ListIcon className={styles.icon} innerBgColor="#fff" outerBgColor="#003274" outerBorderColor="#003274" />
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
