import React from "react"
import styles from "./portfolio.module.css"
import Description from "@/components/Description"
import Button from "@/components/Buttons"
import Heading from "@/components/Heading/Heading_v1"
import { FaExternalLinkAlt } from "react-icons/fa"
// import Image from "@/components/Image"
import Link from "next/link"

interface DataProps {
    bgColor: string
    title: string
    description: string
    btnText: string
    btnLink: string
    image: string
    keywords: string[]
}
const bgImage = "https://cdn.dribbble.com/userupload/4220810/file/original-839ba1d53fa11302a582aca31498d007.png?resize=1024x768"

const PortfolioCard: React.FC<{ data: DataProps }> = ({ data }) => {
    return (
        <div className={styles.portfolioCard} style={{ backgroundImage: `url(${data.image})` }}>
            <div className={styles.portfolioCard__content}>
                <Heading
                    data={{
                        heading: data.title,
                    }}
                    className="font-xl fw-600"
                />
                <div className={`${styles.keywords} gap-1 mt-1 mb-1 d-flex align-items-center`}>
                    {data.keywords.map((keyword, index) => (
                        <span key={index} className={`${styles.btn_1} fw-600 font-sm`}>
                            {keyword}
                        </span>
                    ))}
                </div>

                <Description description={data.description} className={`${styles.description}`} />

                <Button variant="solid" rounded="lg" text={data.btnText} className={`${styles.btn} mt-1`} rightIcon={<FaExternalLinkAlt />} />
            </div>
        </div>
    )
}

export default PortfolioCard
