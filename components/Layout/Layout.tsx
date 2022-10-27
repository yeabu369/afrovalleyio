import { Box } from '@mantine/core'
import React from 'react'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import content from '../../data/footer';

const Layout = ({ children }: any) => {
    return (
        <Box component="main">
            <Header />
            {children}
            <Footer data={content.data} />
        </Box>
    )
}

export default Layout