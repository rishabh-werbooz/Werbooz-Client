// BackgroundWrapper.js
import React from 'react'
import styles from './backgroundWrapper.module.css'

interface DataProps {
    backgroundColor?: string
    children: React.ReactNode
}

const index = ({ backgroundColor, children }: DataProps) => {
    const wrapperStyle = {
        backgroundColor: backgroundColor || 'transparent',
    }

    return (
        <div className={styles.wrapper} style={wrapperStyle}>
            {children}
        </div>
    )
}

export default index
