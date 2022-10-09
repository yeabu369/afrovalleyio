import { Card, Group, Skeleton, Text } from '@mantine/core'
import React from 'react'
import useStyles from './OrderCard.styles';

const OrderCard = () => {
    const { classes, cx } = useStyles();

    return (
        <Card
            shadow="xs"
            component="a"
            href="#"
            p="xl"
            className={cx(classes.card)}
        >
            <Card.Section className={classes.image}>
                <Skeleton className={cx(classes.border, classes.skeleton, classes.cropImage)} visible={false} />
                <Skeleton circle className={cx(classes.border, classes.skeleton, classes.avatar)} />
            </Card.Section>
            <Card.Section className={cx(classes.body, classes.border)}>
                Body
            </Card.Section>
        </Card>
    )
}

export default OrderCard