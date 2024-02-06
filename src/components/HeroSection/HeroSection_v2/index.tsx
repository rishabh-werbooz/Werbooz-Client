import React from "react"
import styles from "./heroSection.module.css"
import Heading from "@/components/Heading"
import Description from "@/components/Description"
import Button from "@/components/Buttons"
import Image from "@/components/Image"

const index = () => {
    return (
        <>
            <div className={`${styles.HerosectionContainer} d-flex justify-content-center flex-column  align-items-center gap-1-5`}>
                <div>
                    <Heading
                        data={{
                            heading: "News & Articles",
                        }}
                        className="fw-700 font-3_5xl"
                        variant="center"
                    />
                </div>
                <div>
                    <Description description="Lorem ipsum dolor sit amet consectetur." className={styles.Description} />
                    <Description description="adipiscing elit interdum ullamcorper sed pharetra sene" className={styles.Description} />
                </div>
            </div>
        </>
    )
}

export default index
