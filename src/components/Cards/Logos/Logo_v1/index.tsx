import React from 'react'
import styles from './logo.module.css'
import Image from '@/components/Image'
interface DataProps {
    logo: string
}

const index = ({ logo }: DataProps) => {
    return (
        <>
            <div className={styles.LogoCard}>
                <Image src={logo} alt="logo" />
            </div>
        </>
    )
}

export default index
