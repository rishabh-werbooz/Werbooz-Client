"use client"
import React from "react"
import Link from "next/link"
import styles from "./header.module.css"
import Button from "@/components/Buttons"
import Image from "@/components/Image"
import PlacementExample from "@/components/MobileSidebar"

function index() {
    return (
        <>
            <div className={styles.navDiv}>
                <header className={`${styles.header} d-flex justify-content-evenly align-items-center`}>
                    <div>
                        <Link href="/">
                            <Image src="/assets/werbooz_header_logo.svg" alt="Werbooz Logo" />
                        </Link>
                    </div>
                    <nav>
                        <div className={`${styles.navList} d-flex justify-content-between align-items-center`}>
                            <Link href="/" className={`${styles.link} font-md fw-400 transition-all`}>
                                Home
                            </Link>
                            <Link href="/services" className={`${styles.link} font-md fw-400 transition-all`}>
                                Services
                            </Link>
                            <Link href="/portfolio" className={`${styles.link} font-md fw-400 transition-all`}>
                                Portfolio
                            </Link>
                            <Link href="/approach" className={`${styles.link} font-md fw-400 transition-all`}>
                                Approach
                            </Link>

                            <Link href="/process" className={`${styles.link} font-md fw-400 transition-all`}>
                                Process
                            </Link>

                            <Link href="/article" className={`${styles.link} font-md fw-400 transition-all`}>
                                Article
                            </Link>
                        </div>
                    </nav>
                    <div className={`${styles.cta} d-flex align-items-center fw-400 transition-all`}>
                        <Link href="/about" className={`${styles.link} font-md fw-400 transition-all`}>
                            About Us
                        </Link>
                        <Button text="Contact Us" className={`${styles.btn} font-md transition-all`} variant="solid" rounded="md" />
                        <div className={`${styles.sidebar}`}>
                            <PlacementExample />
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}

export default index
