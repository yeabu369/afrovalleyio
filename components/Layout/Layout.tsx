import { Box } from '@mantine/core'
import React from 'react'

const Layout = ({ children }: any) => {
    return (
        <Box component="main">
            {children}
        </Box>
    )
}

export default Layout