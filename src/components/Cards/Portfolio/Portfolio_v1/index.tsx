import React from 'react'
import styles from './portfolio.module.css'

interface DataProps {
    bgImg: string
    title: string
    description: string
}

const index = ({ data }: { data: DataProps }) => {
    return (
        <>
            <div
                className="d-flex align-items-end"
                style={{
                    backgroundImage: `url(${data.bgImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '400px',
                    borderRadius: '32px',
                }}
            >
                <div className={styles.portfolio_v1_inner}>
                    <h3 className="fw-600">{data.title}</h3>
                    <h3 className="fw-600">Kargoplex</h3>
                    <hr className="mt-1 mb-1" />
                    <p className={styles.description}>{data.description}</p>
                </div>
            </div>
        </>
    )
}

export default index
