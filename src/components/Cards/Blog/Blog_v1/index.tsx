import React from "react"
import styles from "./blog.module.css"
import Link from "next/link"
import Description from "@/components/Description"
import Heading from "@/components/Heading/Heading_v1"
import Image from "@/components/Image"
import { FaExternalLinkAlt } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
interface DataProps {
    title: string
    description: string
    date: string
    image: string
    link: string
    keywords: string[]
}

const index = ({ data }: { data: DataProps }) => {
    return (
        <>
            <motion.div className={`${styles.Blog_Card} d-flex justify-content-between flex-column `}>
                <div>
                    <motion.div className={`${styles.BlogImg} `}>
                        <Image src={data.image} alt="Blog_img" className={styles.img} />
                        <div className={`${styles.keywords} d-flex gap-05`}>
                            {data.keywords.map((keyword, index) => (
                                <span key={index} className={`${styles.btn} fw-600 font-sm`}>
                                    {keyword}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <div className={styles.BlogContent}>
                        <Description description={data.date} className={`${styles.blog_date} fw-500`} />
                        <Heading
                            data={{
                                heading: data.title,
                            }}
                            className={`${styles.blogTitle} font-lg fw-700`}
                        />
                        <Description description={data.description} className={`mb-1 ${styles.description}`} />
                    </div>
                </div>

                <Link href={data.link} className={`${styles.link} fw-600 d-flex align-items-center gap-05`}>
                    Read More
                </Link>
            </motion.div>
        </>
    )
}

export default index
