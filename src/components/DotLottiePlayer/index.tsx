import React from "react"
import { DotLottiePlayer, Controls } from "@dotlottie/react-player"
import "@dotlottie/react-player/dist/index.css"

interface LottieProps {
    src: string
    className: string
}

const index = ({ src, className }: LottieProps) => {
    return (
        <div>
            <DotLottiePlayer src={src} autoplay loop className={className} />
        </div>
    )
}

export default index
