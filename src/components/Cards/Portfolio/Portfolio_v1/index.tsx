import React from 'react'
import styles from './portfolio.module.css'
import Heading from '@/components/Heading'
import Description from '@/components/Description'
import classNames from 'classnames'
interface DataProps {
    bgImg: string
    title: string
    subTitle?: string
    description: string
    className?: string
}

const index =({className, bgImg , title, description,subTitle}: DataProps) => {

    // const PortfolioContainer = classNames(styles.PortfolioContainer, className);
    
    return (
        <>
            <div
                className={` d-flex align-items-end border-radius-lg ${styles.PortfolioContainer} ${className}`}
                style={{
                    backgroundImage: `url(${bgImg})`, // bgImg passing as props thats why I used inline style
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className={`${styles.portfolio_v1_inner}`}>
                    <Heading
                        data={{
                            heading: title,
                        }}
                        className={`font-sm fw-600`}
                    />

                    <Heading
                        data={{
                            subHeading: subTitle,
                        }}
                        className={`font-sm fw-600 lh-150`}
                    />

                    <hr className="mt-1 mb-1" />

                    <Description description={description} className={`${styles.description} mt-1 fw-400 font-sm`} />
                </div>
            </div>
        </>
    )
}

export default index
