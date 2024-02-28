import React from "react"
import styles from "./keyword.module.css"

interface Props {
    keyword: string[]
    text: string[]
    breakLine?: boolean
}

const index: React.FC<Props> = ({ keyword, text, breakLine = false }) => {
    const highlightKeywords = (text: string, keywords: string[]) => {
        return text.replace(new RegExp(`(${keywords.join("|")})`, "gi"), '<span style="color: #003274; font-weight: 700;">$1</span>')
    }

    return (
        <>
            {" "}
            {text.map((t, i) => (
                <p key={i} className={`${styles.description} font-lg`} dangerouslySetInnerHTML={{ __html: highlightKeywords(t, keyword) }} />
            ))}
            {breakLine && <br />}
        </>
    )
}

export default index
