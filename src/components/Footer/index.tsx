import React from "react"
import styles from "./footer.module.css"
import ListItem_v1 from "@/components/ListItems/ListItems_v1"
import NewsletterForm from "@/components/Forms/NewsLetter/NewsLetter_v1"
import Image from "@/components/Image"
import Description from "@/components/Description"
import Heading from "@/components/Heading/Heading_v1"
import { FaSquareXTwitter, FaSquareFacebook, FaSquareInstagram, FaLinkedin } from "react-icons/fa6"
const index = () => {
    return (
        <>
            <div>
                <div className={`main-inline-Padding ${styles.footerSection} pb-2 pt-2`}>
                    <div>
                        <Image src="/assets/werbooz_logo.svg" alt="logo" className={styles.logo} />
                        <Description
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, etiam nunc, eget aliquam. In eget in."
                            className={styles.description}
                        />
                        <div className="d-flex gap-1 mt-1">
                            <FaSquareXTwitter className={`${styles.socialIcon} twitter`} />
                            <FaSquareFacebook className={`${styles.socialIcon} facebook`} />
                            <FaSquareInstagram className={`${styles.socialIcon} instagram`} />
                            <FaLinkedin className={`${styles.socialIcon} linkedin`} />
                        </div>
                    </div>
                    <div className={`${styles.gridListItems}`}>
                        <ListItem_v1 />
                    </div>
                    <div>
                        <Heading
                            data={{
                                heading: "Join Our Newsletter",
                            }}
                            className={`${styles.heading} font-lg fw-700 `}
                        />
                        <div className="mt-1">
                            <NewsletterForm />
                        </div>
                        <Description description="*  Will send you weekly updates for your better finance management." className={`${styles.description} mt-1`} />
                    </div>
                </div>
                <div className={`${styles.footerBottom} mt-1 mb-1 text-center`}>
                    <Description description="Copyright @Werbooz 2024. All Rights Reserved." className={`${styles.copyRight} fw-600`} />
                </div>
            </div>
        </>
    )
}

export default index
