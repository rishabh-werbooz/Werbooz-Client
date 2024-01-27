import React from 'react'
import classnames from 'classnames'
import styles from './iconBox.module.css'

interface DataProps {
    Icon: React.ReactNode
    title: string
    description: string
    bgColor: string
}

const index = ({ data }: { data: DataProps }) => {
    return (
        <>
            <div
                className={styles.iconBoxInner}
                style={{ backgroundColor: data.bgColor }}
            >
                <div className={styles.iconBoxIcon}>{data.Icon}</div>
                <h3 className="mt-2 fw-700">{data.title}</h3>
                <p className={`${styles.description} mt-1 fw-400`} >{data.description}</p>
            </div>
        </>
    )
}

export default index
