import { Avatar, Box, Card, Grid, Group, Skeleton, Stack, Text } from '@mantine/core'
import { IconBuildingStore, IconSeeding, IconStar } from '@tabler/icons';
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
            pb={20}
            className={cx(classes.card)}
        >
            <Grid gutter="xs">
                <Grid.Col p={0} span={3}>
                    <Image src="/Green-Beans-Image.png" width={150} height={150} alt="Green Beans" />
                    <Avatar mt={-42} ml={126} src="/farmer.png" radius="xl" className={classes.avatar} />
                </Grid.Col>
                <Grid.Col span={9}>
                    <Group position="apart">
                        <Text size="sm" weight="bold" variant="gradient" gradient={{ from: 'green', to: 'cyan' }}>Green Beans</Text>
                        <IconBuildingStore size={20} />
                    </Group>
                    <Stack spacing={0}>
                        <Text size="lg">Crop Source • Coffee Arabica</Text>
                        <Text color="dimmed" size="sm">Origin - Yirgacheffe • Grade - 4</Text>
                    </Stack>
                    <Group position="apart" mt={20}>
                        <Text size="sm" weight={600}>Husen Abadega</Text>
                        <Text size="xl" weight="bold">
                            $ 7.49
                            <Text color="dimmed" component="span" weight="normal">/ Kilo</Text>
                        </Text>
                    </Group>
                    <Group position="apart">
                        <Group>
                            <IconStar size={16} />
                            <Text weight={600} sx={{ display: "flex" }} ml={2} size="xs">
                                4.89
                                <Text color="dimmed">
                                    (82 deals)
                                </Text>
                            </Text>
                        </Group>
                        <Group>
                            <IconSeeding size={16} />
                            <Text size="xs" color="dimmed" weight="bold">
                                2100 Kg (available)
                            </Text>
                        </Group>
                        <Group>
                            <Text size="md">
                                Total $15,729
                            </Text>
                        </Group>
                    </Group>
                </Grid.Col>
            </Grid>
        </Card>
    )
}

export default OrderCard