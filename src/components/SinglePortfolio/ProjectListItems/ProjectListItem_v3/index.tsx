import React from 'react'
import styles from './projectItems.module.css'
import { IoCheckmarkDoneOutline } from "react-icons/io5"

const ListItem = [
  "Automated Newsletter Creation System",
  "Ad Creation System",
  "Employee Management System",
  "Tag Creation System",
  "Category Creation System",
  "Location Creation System",
]

const index = () => {
  return (
    <>
    <div className={`${styles.ListContainer}`}>
      {
        ListItem.map((item, index) => (
          <div key={index} className={`${styles.projectItems} d-flex gap-05 align-items-center mt-05`}>
            <IoCheckmarkDoneOutline className={styles.icon} />
            <span className={`${styles.text} font-md fw-600`}>{item}</span>
          </div>
        ))
      }
    </div>
    </>
  )
}

export default index