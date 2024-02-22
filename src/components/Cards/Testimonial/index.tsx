import React from "react"
import styles from "./testimonial.module.css"
import Description from "@/components/Description"
import Image from "@/components/Image"
import Heading from "@/components/Heading/Heading_v1"
interface userDataProps {
    userImage: string
    userName: string
    userDesignation: string
}

interface DataProps {
    title: string
    description: string
    userData: userDataProps
}

const index = ({ data }: { data: DataProps }) => {
    return (
        <>
            <div className={styles.testimonial_Box}>
                <Heading
                    data={{
                        heading: data.title,
                    }}
                    className="fw-600 font-xl"
                />
                <Description description={data.description} className="mt-1" />
                <div className={`d-flex justify-content-start align-items-center gap-1 mt-2`}>
                    <div className={`${styles.userImageDiv} padding-lg`}>
                        <Image src={data.userData.userImage} alt={data.userData.userName} className={styles.avatar} />
                    </div>
                    <div>
                        <Heading
                            data={{
                                heading: data.userData.userName,
                            }}
                            className="fw-600"
                        />

                        <Description description={data.userData.userDesignation} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default index
