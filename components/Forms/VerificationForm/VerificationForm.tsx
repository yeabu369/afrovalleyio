import { Box, Paper, Text, TextInput } from '@mantine/core'
import React from 'react'

const VerificationForm: React.FC<any> = ({ form }) => {
    return (
        <Box
            sx={(theme) => ({
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                paddingLeft: (theme.spacing.xl) * 10,
                paddingRight: (theme.spacing.xl) * 10,
                paddingTop: (theme.spacing.xl) * 2,
                paddingBottom: (theme.spacing.xl) * 2,
                borderRadius: theme.radius.md,
                cursor: 'pointer',

                '&:hover': {
                    backgroundColor:
                        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
                },
            })}
        >
            <Paper withBorder shadow="md" p={30} radius="md" >
                <Text size="md" weight={500} mb="md">
                    We have sent a verification code to your email address. Please enter the code below to verify your email address.
                </Text>
                <TextInput label="Verification Code" placeholder="Verification Code" required />
            </Paper>
        </Box>
    )
}

export default VerificationForm