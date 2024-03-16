import React from "react"
import { motion, useMotionValue, useTransform, animate, useInView, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"
import styles from "./countAnimation.module.css"

interface Props {
    targetValue: number
    icon?: string | React.ReactNode
    className?: string
    text: string
}

const index = ({ targetValue, icon, className, text }: Props) => {
    const count = useMotionValue(0)
    const rounded = useTransform(count, Math.round)
    const controls = useAnimation()

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            animate(count, targetValue, {
                duration: 1,
                ease: "easeOut",
            })
        }
    }, [isInView])

    return (
        <div>
            {" "}
            <div className="d-flex flex-column justify-content-center  align-items-start fw-800 font-xxxl text-primary text-center gap-05">
                <div className="d-flex align-items-center gap-05">
                    <motion.div ref={ref}>{rounded}</motion.div> {icon}
                </div>
                <span className="text-primary fw-600 font-lg text-secondary">{text}</span>
            </div>
        </div>
    )
}

export default index
