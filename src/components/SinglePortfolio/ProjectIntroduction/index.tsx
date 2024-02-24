import React from 'react'
import styles from './projectIntroduction.module.css'
import Heading_v1 from '@/components/Heading/Heading_v1'
import Description from '@/components/Description'

const index = () => {
  return (
      <div className={`${styles.ProjectIntroductionContainer}`}>
          <div>
              <Heading_v1
                  data={{
                      topHeading: "Introduction",
                  }}
                  className="font-lg fw-700"
              />
              <Heading_v1
                  data={{
                      heading: "So what plans for the weekend?",
                  }}
                  className="font-xxl fw-800"
              />
              <div className={`${styles.intro} mt-2`}>
                  <Description
                      description="This is the most common question that has been asked by our family or our friends. Whenever we have a free week or a holiday.No matter how much you try to avoid it but this question has  been asked by our friends and family members multiple times  when there is a weekend. We are so busy working everytime, that we do not get enough time to plan our weekends properly and most of the times we end up losing out on many exciting options just because we didn’t payed much attention to palnning weekends beforehand. So why are we even discussing this? Are we going to solve this problem? Do we have an ace up our sleeve?? So, yes! we have got a perfect solution for Planning your weekends. And that solution is eight letters long its name is “Weekendo”."
                      className={`fw-400 font-sm mb-2`}
                  />
              </div>
          </div>
      </div>
  )
}

export default index
