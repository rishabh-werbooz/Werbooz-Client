import React, { useState } from "react"
import styles from "./portfolio.module.css"
import Heading from "@/components/Heading/Heading_v1"
import Description from "@/components/Description"
import Link from "next/link"
import classNames from "classnames"
import { TbExternalLink } from "react-icons/tb"
import { motion } from "framer-motion"

interface DataProps {
    bgImg: string
    title: string
    subTitle?: string
    description: string
    className?: string
}

const index = ({ className, bgImg, title, description, subTitle }: DataProps) => {
    // const PortfolioContainer = classNames(styles.PortfolioContainer, className);
    const [isHovered, setIsHovered] = useState(false)

    return (
        <>
            <Link href={`/portfolio/${subTitle?.toLocaleLowerCase()}`}>
                <motion.div
                    className={`d-flex align-items-end border-radius-lg ${styles.PortfolioContainer} ${className}`}
                    style={{
                        backgroundImage: `url(${bgImg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        position: "relative",
                    }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    whileHover={{ opacity: 1, scale: 1.05 }} // Adjust opacity as needed
                >
                    {isHovered && (
                        <motion.div className={styles.overlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0.5 }}>
                            <TbExternalLink className={styles.icon} />
                        </motion.div>
                    )}
                    <div className={`${styles.portfolio_v1_inner}`}>
                        <Heading
                            data={{
                                heading: title,
                            }}
                            className={`font-lg fw-600`}
                        />
                        <Heading
                            data={{
                                subHeading: subTitle,
                            }}
                            className={`font-lg fw-600 lh-150`}
                        />
                        <hr className="mt-1 mb-1" />
                        <Description description={description} className={`${styles.description} mt-1 fw-400 font-sm`} />
                    </div>
                </motion.div>
            </Link>
        </>
    )
}

export default index
