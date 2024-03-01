import React from "react"
import styles from "./projectItems.module.css"
import { IoCheckmarkDoneOutline } from "react-icons/io5"
import { HiCheck } from "react-icons/hi"


interface Props {
    data: string[]
}

const index = ({ data }: Props) => {
    return (
        <>
            <div className={`${styles.ListContainer}`}>
                {data.map((item, index) => (
                    <div key={index} className={`${styles.projectItems} d-flex gap-05 align-items-center mt-05`}>
                        <HiCheck className={styles.icon} />
                        <span className={`${styles.text} font-lg fw-600`}>{item}</span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default index
