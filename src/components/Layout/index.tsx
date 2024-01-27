import React, { ReactNode } from 'react'
import styles from './layout.module.css'
import Header from '@/components/Header/Header_v1'

interface LayoutProps {
    children: ReactNode
}

const index: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="pt-2 pb-2 main-inline-Padding">{children}</main>
        </>
    )
}

export default index
