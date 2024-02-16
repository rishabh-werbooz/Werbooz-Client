import React from 'react'
import styles from './blog.module.css'
import Link from 'next/link'
import Description from '@/components/Description'
import Heading from '@/components/Heading'
import Image from '@/components/Image'
import { FaExternalLinkAlt } from 'react-icons/fa'

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
            <div className={styles.Blog_Card}>
                <div className={styles.BlogImg}>
                    <Image
                        src={data.image}
                        alt="Blog_img"
                        className={styles.img}
                    />
                    <div
                        className={`${styles.keywords} d-flex justify-content-start flex-wrap gap-05`}
                    >
                        {data.keywords.map((keyword, index) => (
                            <span
                                key={index}
                                className={`${styles.btn} fw-600 font-sm`}
                            >
                                {keyword}
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <Heading
                        data={{
                            heading: data.date,
                        }}
                        className={`${styles.blog_date} padding-lg  font-md fw-400`}
                    />
                    <Heading
                        data={{
                            heading: data.title,
                        }}
                        className={`${styles.blogTitle} font-md fw-700`}
                    />
                    <Description
                        description={data.description}
                        className="mb-1"
                    />
                    <Link
                        href={data.link}
                        className={`${styles.blog_link} fw-600 d-flex align-items-center gap-05`}
                    >
                        Read More <FaExternalLinkAlt className="ms-1" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default index
