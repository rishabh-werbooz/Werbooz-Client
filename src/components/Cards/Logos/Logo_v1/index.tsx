import React from 'react'
import styles from './logo.module.css'
interface DataProps {
    logo: string
}

const index = ({ logo }: DataProps) => {
    return (
        <>
            <div className={styles.LogoCard}>
                <img src={logo} className={styles.Logo} alt="logo" />
            </div>
        </>
    )
}

export default index
