import { Avatar, Card, Grid, Group, Skeleton, Stack, Text } from '@mantine/core'
import { IconBuildingStore, IconSeeding, IconStar } from '@tabler/icons';
import Image from 'next/image';
import React from 'react'
import useStyles from './OrderCard.styles';

type User = {
    name: string;
    avatar: string;
    rating: number;
    deals: number;
}

type Bean = {
    image: string;
    type: string;
    origin: string;
    grade: string | number;
    state: 'Roasted' | 'Green';
}

export type Order = {
    id: number;
    price: number;
    quantity: number;
    total: number;
    orderedBy: User;
    bean: Bean;
}

type OrderCardProps = {
    order?: Order;
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
    const { classes, cx } = useStyles();

    return (
        <Card
            shadow="xs"
            component="a"
            href="#"
            p={0}
            pb={20}
            className={cx(classes.card)}
        >
            <Grid gutter="xs">
                <Grid.Col p={0} span={3}>
                    <Image src={order?.bean.image || "/Green-Beans-Image.png"} width={150} height={150} alt="Green Beans" />
                    <Avatar mt={-42} ml={126} src={order?.orderedBy.avatar || "/farmer.png"} radius="xl" className={classes.avatar} />
                </Grid.Col>
                <Grid.Col span={9}>
                    <Group position="apart">
                        <Text size="sm" weight="bold" variant="gradient" gradient={{ from: 'green', to: 'cyan' }}>{order?.bean.state} Beans</Text>
                        <IconBuildingStore size={20} />
                    </Group>
                    <Stack spacing={0}>
                        <Text size="lg">Crop Source • {order?.bean.type}</Text>
                        <Text color="dimmed" size="sm">Origin - {order?.bean.origin} • Grade - {order?.bean.grade}</Text>
                    </Stack>
                    <Group position="apart" mt={20}>
                        <Text size="sm" weight={600}>{order?.orderedBy.name}</Text>
                        <Text size="xl" weight="bold">
                            $ {order?.price || 0}
                            <Text color="dimmed" component="span" weight="normal">/ Kilo</Text>
                        </Text>
                    </Group>
                    <Group position="apart">
                        <Group>
                            <IconStar size={16} />
                            <Text weight={600} sx={{ display: "flex" }} ml={2} size="xs">
                                {order?.orderedBy.rating || 0}
                                <Text color="dimmed">
                                    ({`${order?.orderedBy.deals || 0} deals`})  
                                </Text>
                            </Text>
                        </Group>
                        <Group>
                            <IconSeeding size={16} />
                            <Text size="xs" color="dimmed" weight="bold">
                                {order?.quantity || 0} Kg (available)
                            </Text>
                        </Group>
                        <Group>
                            <Text size="md">
                                Total ${order?.total || 0}
                            </Text>
                        </Group>
                    </Group>
                </Grid.Col>
            </Grid>
        </Card>
    )
}

export default OrderCard