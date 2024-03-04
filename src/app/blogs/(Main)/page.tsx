import React from 'react'
import HeroSection_v2 from '@/components/HeroSection/HeroSection_v2'
import Blog from '@/components/Cards/Blog/Blog_v1'
import { BlogData } from '@/content/sampleData'
import styles from '@/app/home.module.css'
import FooterTop from "@/components/FooterTop"

const index = () => {
  return (
      <>
          <div>
              <HeroSection_v2 
                  heading="News & Articles"
                  description_1="Lorem ipsum dolor sit amet consectetur."
                  description_2="adipiscing elit interdum ullamcorper sed pharetra sene"
              />
              <div className={`main-inline-Padding mt-2 pt-2 ${styles.BlogGrid}`}>
                  <Blog data={BlogData} />
                  <Blog data={BlogData} />
                  <Blog data={BlogData} />
                  <Blog data={BlogData} />
                  <Blog data={BlogData} />
                  <Blog data={BlogData} />
                  <Blog data={BlogData} />
                  <Blog data={BlogData} />
                  <Blog data={BlogData} />
              </div>
              <FooterTop />
          </div>
      </>
  )
}

export default index