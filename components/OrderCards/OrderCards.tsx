import { Stack } from '@mantine/core'
import React from 'react'
import OrderCard from './OrderCard/OrderCard'
import { Order } from '../OrderCards/OrderCard/OrderCard';
import useStyles from './OrderCards.styles';

type Orders = {
  orders: Order[]
}

const OrderCards: React.FC<Orders> = ({orders}) => {
  const { cx, classes } = useStyles();
  
  return (
    <Stack spacing="md" className={cx(classes.stack)}>
      {orders.map(order => <OrderCard order={order} key={order.id} />)}
    </Stack>
  )
}

export default OrderCards