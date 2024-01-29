import React from 'react'
import styles from './description.module.css'
import classnames from 'classnames'

interface DataProps {
    description: string,
    classes?: string
}

const index = ({ description, classes="" }: DataProps) => {

    const mainClass = classnames(styles.description, "font-md fw-400 lh-150", classes)

    return (
        <>
            <p className={mainClass}>
                {description}
            </p>
        </>
    )
}

export default index
