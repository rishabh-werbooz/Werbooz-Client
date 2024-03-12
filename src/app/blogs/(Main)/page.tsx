"use client"
import React from "react"
import HeroSection_v2 from "@/components/HeroSection/HeroSection_v2"
import Blog from "@/components/Cards/Blog/Blog_v1"
import { BlogData } from "@/content/sampleData"
import styles from "@/app/home.module.css"
import FooterTop from "@/components/FooterTop"

const index = () => {
    return (
        <>
            <div>
                <HeroSection_v2
                    heading="News & Articles"
                    description={["We are a team of creative professionals who are passionate about creating innovative digital solutions that help businesses grow."]}
                />
                <div className={`main-inline-Padding mt-2 pt-2 ${styles.BlogGrid}`}>
                    {BlogData.map((data, index) => {
                        return <Blog data={data} key={index} />
                    })}
                </div>
                <FooterTop />
            </div>
        </>
    )
}

export default index
