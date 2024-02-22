import React from "react"
import styles from "./footerTop.module.css"
import Description from "@/components/Description"
import Button from "@/components/Buttons"
import Heading from "@/components/Heading/Heading_v1"

const index = () => {
    return (
        <>
            <div className={`${styles.footerTopContainer} d-flex justify-content-center flex-column align-items-center gap-0 pb-2 `}>
                <Heading
                    data={{
                        heading: "Are you ready to grow your business with us?",
                    }}
                    className={`${styles.Heading} fw-700 font-xxl`}
                />
                <span>
                    <Heading
                        data={{
                            heading: "Let’s get started",
                        }}
                        className={`${styles.subHeading} fw-700 font-xxl`}
                    />
                </span>

                <div className={`${styles.description} mt-1 mb-1 `}>
                    <Description description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy." />
                </div>

                <Button variant="solid" rounded="md" text="View All" className={`${styles.btn}`} />
            </div>
        </>
    )
}

export default index
