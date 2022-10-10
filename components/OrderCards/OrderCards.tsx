import { Stack } from '@mantine/core'
import React from 'react'
import OrderCard from './OrderCard/OrderCard'

const OrderCards = () => {
  return (
    <Stack spacing="md">
      <OrderCard />
      <OrderCard />
    </Stack>
  )
}

export default OrderCards