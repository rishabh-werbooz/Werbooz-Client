import React from 'react'
import styles from './footerTop.module.css'
import Description from '@/components/Description'
import Button from '@/components/Buttons'

const index = () => {
    return (
        <>
            <div
                className={`${styles.footerTopContainer} d-flex justify-content-center flex-column align-items-center gap-2`}
            >
                <h1 className={styles.Heading}>
                    Are you ready to grow your <br /> business with us?
                </h1>
                <div className={styles.description}>
                    <Description description="We are a team of passionate designers and developers who thrive to well plan, develop and build scalable applications and websites." />
                </div>

                <Button variant="solid" rounded="md" text="View All" />
            </div>
        </>
    )
}

export default index
