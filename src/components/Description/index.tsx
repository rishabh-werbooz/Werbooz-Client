import React from 'react'
import styles from './description.module.css'

interface DataProps {
    description: string
}

const index = ({ description }: DataProps) => {
    return (
        <>
            <p className={`${styles.description} font-md fw-400 lh-150`}>
                {description}
            </p>
        </>
    )
}

export default index
