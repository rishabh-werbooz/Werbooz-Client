import React from 'react'
import classNames from 'classnames'
import styles from './image.module.css'

interface ImageProps {
    src: string
    alt: string
    rounded?: boolean
    bordered?: boolean
    className?: string
}

const index: React.FC<ImageProps> = ({
    src,
    alt,
    rounded,
    bordered,
    className: additionalClassNames,
}) => {
    const imageClasses = classNames(
        styles.image,
        {
            rounded: rounded,
            bordered: bordered,
        },
        additionalClassNames
    )

    return <img src={src} alt={alt} className={imageClasses} />
}

export default index
