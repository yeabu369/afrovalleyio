import { Stack } from '@mantine/core'
import React from 'react'
import OrderCard from './OrderCard/OrderCard'
import { Order } from '../OrderCards/OrderCard/OrderCard';

type Orders = {
  orders: Order[]
}

const OrderCards: React.FC<Orders> = ({orders}) => {
  return (
    <Stack spacing="md">
      {orders.map(order => <OrderCard order={order} key={order.id} />)}
    </Stack>
  )
}

export default OrderCards