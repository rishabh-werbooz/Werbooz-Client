import React from 'react'
import styles from './projectItems.module.css'
import { PiCheckSquareFill } from "react-icons/pi"
import Description from '@/components/Description'
import { TbSquareRoundedPlusFilled } from "react-icons/tb"

const BulletPoints = [
    "Weekendo came to us with a concept that puts light on the importance of planning your weekends and how we can Provide customised emails on every Wednesday to the users so that they can explore various options in each of the lifestyle categories of their interest.",
    "Categories here represent that whether you are a Party lovers or Foody… whether you are a Movie enthusiast or Art aficionados… whether you are a Adventurer or Shopaholics… whether you are a Theatre fan or Fitness freaks… a Spa craver or Charity souls…",
    "Weekendo have got weekend lifestyle sorted for you all! And that too without paying a single penny! The process to get a weekly newsletter is quite easy, Just fill up the form at Weekendo.in And enjoy your weekly newsletters. ",
    "Users need to subscribe the newsletter on this website, and they will be taking care of all the research and rest. Easy right?",
]


const index = () => {
  return (
      <>
          <div className="mt-2">
              {BulletPoints.map((point, index) => (
                  <div key={index} className={`${styles.bulletPointContainer} mb-1`}>
                      <TbSquareRoundedPlusFilled className={`${styles.icons}`} />
                      <Description description={point} className="fw-400 font-sm" />
                  </div>
              ))}
          </div>
      </>
  )
}

export default index