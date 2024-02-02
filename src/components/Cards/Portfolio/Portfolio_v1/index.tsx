import React from 'react'
import styles from './portfolio.module.css'
import Heading from '@/components/Heading'
import Description from '@/components/Description'

interface DataProps {
    bgImg: string
    title: string
    description: string
}

const index = ({ data }: { data: DataProps }) => {
    return (
        <>
            <div
                className={`${styles.PortfolioContainer} d-flex align-items-end border-radius-lg`}
                style={{
                    backgroundImage: `url(${data.bgImg})`, // bgImg passing as props thats why I used inline style
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className={`${styles.portfolio_v1_inner} p`}>
                    <Heading
                        data={{
                            heading: data.title,
                        }}
                        className={`mt-2 font-lg fw-600`}
                    />

                    <Heading
                        data={{
                            subHeading: 'Kargoplex',
                        }}
                        className={`font-md fw-500 lh-150`}
                    />

                    <hr className="mt-1 mb-1" />

                    <Description
                        description={data.description}
                        className={`${styles.description} mt-1 fw-400 font-sm`}
                    />
                </div>
            </div>
        </>
    )
}

export default index
