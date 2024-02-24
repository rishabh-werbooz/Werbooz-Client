import React from "react"
import styles from "./projectCard.module.css"
import Image from "@/components/Image"
import Description from "@/components/Description"
const index = () => {
    return (
        <>
            <div className={`align-items-start ${styles.CardContainer}`}>
                <div>
                    <Description
                        description="Meet Adit Chouhan – not just an Author, Digital Marketer,Marketing Trainer/Coach, and Professional Emcee, but an persistent entrepreneurby heart. His book, Marketing - Tricks of the Trade They Won't Teach Youin B-Schools!, is a testament to his knowledge. Adit cherishes themoments when he can engage with people, have meaningful conversations, or takethe stage to host events and share insights with fellow enthusiasts. DigitalMarketing isn't just a job for him; it's what gives him life. And when he needssolace, you'll find him immersed in the world of writing."
                        className={`fw-400 font-sm mb-2`}
                    />

                    <Description
                        description="Adit is more than a writer – he's a storyteller with threebooks under his belt, covering Digital Marketing, Traditional Marketing, andCryptocurrency Trading. Beyond the pages, he is a fervent Digital Marketer, adown-to-earth Marketing Trainer/Coach, and a seasoned Anchor. Known for hislively networking and strong leadership, Adit is a true dreamer, crafting asuccess story that's both genuine and inspiring."
                        className={`fw-400 font-sm`}
                    />
                </div>
                <div className={`${styles.ImagDiv} border-radius-full`}>
                    <Image src="/assets/portfolios/man.png" alt="project" className={`${styles.img} border-radius-full`} />
                </div>
            </div>
        </>
    )
}

export default index
