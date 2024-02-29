import React from "react"
import styles from "./projectItems.module.css"
import { IoCheckmarkDoneOutline } from "react-icons/io5"
import { HiCheck } from "react-icons/hi"

const ListItem = [
    "Automated Newsletter Creation System",
    "Ad Creation System",
    "Employee Management System",
    "Tag Creation System",
    "Category Creation System",
    "Location Creation System",
]

interface Props {
    data: string[]
}

const index = ({ data }: Props) => {
    return (
        <>
            <div className={`${styles.ListContainer}`}>
                {ListItem.map((item, index) => (
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
