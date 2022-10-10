import { Avatar, Card, Grid, Group, Skeleton, Text } from '@mantine/core'
import Image from 'next/image';
import React from 'react'
import useStyles from './OrderCard.styles';

const OrderCard = () => {
    const { classes, cx } = useStyles();

    return (
        <Card
            shadow="xs"
            component="a"
            href="#"
            p={0}
            className={cx(classes.card, classes.border)}
        >
            <Grid gutter="xs">
                <Grid.Col p={0} className={classes.border} span={3}>
                    <Image src="/Green-Beans-Image.png" width={150} height={150} alt="Green Beans" />
                    <Avatar mt={-40} ml={126} src="/farmer.png" radius="xl" className={classes.avatar} />
                </Grid.Col>
                <Grid.Col className={classes.border} span={9}>
                    
                </Grid.Col>
            </Grid>
        </Card>
    )
}

export default OrderCard