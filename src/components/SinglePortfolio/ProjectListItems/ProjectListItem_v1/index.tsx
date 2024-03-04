import React from "react"
import styles from "./projectItems.module.css"
import { TbSquareRoundedFilled } from "react-icons/tb"
import Description from "@/components/Description"
import { TbSquareRoundedPlusFilled } from "react-icons/tb"
import { IoCheckmarkDoneOutline } from "react-icons/io5"
import Image from "@/components/Image"
import ListIcon from "@/components/ListIcon"
interface Props {
    description: string[]
}

const index = ({ description }: Props) => {
    return (
        <>
            <div className="mt-2">
                {description.map((point, index) => (
                    <div key={index} className={`${styles.bulletPointContainer} mb-1`}>
                        <ListIcon />
                        <Description description={point} className="fw-400 font-sm" />
                    </div>
                ))}
            </div>
        </>
    )
}

export default index
