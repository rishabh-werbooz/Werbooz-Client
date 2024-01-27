import React from 'react'
import styles from './blog.module.css'
import Link from 'next/link'
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
                    <img src={data.image} className={styles.img} alt="..." />
                    <div
                        className={`${styles.keywords} d-flex justify-content-start flex-wrap gap-2`}
                    >
                        {data.keywords.map((keyword, index) => (
                            <span key={index} className={styles.btn}>
                                {keyword}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="card-body">
                    <h5 className={styles.blog_date}>{data.date}</h5>
                    <h5 className={styles.blog_title}>{data.title}</h5>
                    <p className={styles.blog_description}>{data.description}</p>
                    <Link href={data.link} className={styles.blog_link}>Read More</Link>
                </div>
            </div>
        </>
    )
}

export default index
