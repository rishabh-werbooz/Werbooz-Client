import React from 'react'
import styles from './testimonial.module.css'
interface userDataProps {
    userImage: string
    userName: string
    userDesignation: string
}

interface DataProps {
    title: string
    description: string
    userData: userDataProps
}

const index = ({ data }: { data: DataProps }) => {
    return (
        <>
            <div className={styles.testimonial_Box}>
                <h1 className={styles.title}>{data.title}</h1>
                <p className={styles.description}>{data.description}</p>
                <div
                    className={`d-flex justify-content-start align-items-center gap-1 mt-1`}
                >
                    <div className={styles.userImage}>
                        <img className={styles.img}
                            src={data.userData.userImage}
                            alt={data.userData.userName}
                        />
                    </div>
                    <div>
                        <h3 className='fw-700'>{data.userData.userName}</h3>
                        <p className={styles.userDesignation}>{data.userData.userDesignation}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index
