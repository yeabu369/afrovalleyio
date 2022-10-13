import { Box, Paper, MultiSelect, Text } from '@mantine/core'
import React from 'react'

const PreferenceForm: React.FC<any> = (form) => {
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
            Please select your preferences below.
        </Text>
        <MultiSelect
            label="What do you do?"
            placeholder="Select your prefered activities"
            required
            data={[
                { label: 'Showcase and Sell Unique Beans', value: 'seller' },
                { label: 'Discover and Buy Unique Beans', value: 'buyer' },
                { label: 'Logistics and Support Serivces', value: 'transporter' },
            ]}
            clearable
        />
        <MultiSelect
            label="What are you in the market for?"
            placeholder="Select your prefered activities"
            required
            mt="sm"
            data={[
                { label: 'Coffee Beans', value: 'coffee' },
                { label: 'Tea', value: 'tea' },
                { label: 'Fruits', value: 'fruit' },
            ]}
            clearable
        />
    </Paper>
  </Box>
  )
}

export default PreferenceForm