import type { Metadata } from "next"
import "./globals.css"
import "@fortawesome/fontawesome-svg-core/styles.css"
import Layout from "@/components/Layout"
import { Providers } from "@/app/providers"
import Lottie from "lottie-web"
import styles from './home.module.css'

export const metadata: Metadata = {
    title: "Werbooz - Home",
    description: "Welcome to Werbooz Private Limited - Your Gateway to Exceptional Digital Solutions!",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <Layout>{children}</Layout>
                </Providers>
            </body>
        </html>
    )
}
