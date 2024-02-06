import React from 'react'
import Image from '@/components/Image'
import styles from './iconBox.module.css'
import Description from '@/components/Description'
import Heading from '@/components/Heading'

interface DataProps {
    Icon: string
    title: string
    description: string
    bgColor: string
}

const index = ({ data }: { data: DataProps }) => {
    return (
        <>
            <div
                className={`${styles.iconBoxInner} `}
                style={{ backgroundColor: data.bgColor }} // for just background color here inlined style is used
            >
                <Image
                    src={data.Icon}
                    alt="IconBox__Icon"
                    className={styles.iconBoxIcon}
                />
                <Heading
                    data={{
                        heading: data.title,
                    }}
                    className={`mt-2 font-xl fw-700`}
                />
                <Description
                    description={data.description}
                    className={`mt-1 fw-400 font-sm`}
                />
            </div>
        </>
    )
}

export default index
