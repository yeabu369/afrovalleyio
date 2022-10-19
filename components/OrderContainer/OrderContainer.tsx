import { Button, Container, Grid, Group, Text, Title } from '@mantine/core'
import { IconBuilding, IconShare } from '@tabler/icons';
import React from 'react'
import useStyles from './OrderContainer.styles';

const OrderContainer = () => {
    const { cx, classes } = useStyles();

    return (
        <Container size="sm" px={0} className={classes.container}>
            <Grid m={0}>
                <Grid.Col style={{ border: "1px solid #000" }} span={12}>
                    <Text size="sm" weight="bold" variant="gradient" gradient={{ from: "darkgreen", to: "cyan" }}>Green Coffee Bean</Text>
                </Grid.Col>
                <Grid.Col style={{ border: "1px solid #000" }} span={12}>
                    <Title order={2}>Crop Source • Coffee Arabica</Title>
                </Grid.Col>
                <Grid.Col style={{ border: "1px solid #000" }} span={12}>
                    <Group position="apart">
                        <Text size="md" color="dimmed">Origin - Gomma, Jimma • Grade - 4</Text>
                        <Group>
                            <Button compact variant="default" leftIcon={<IconShare size={14} />}>Share</Button>
                            <Button compact variant="default" leftIcon={<IconBuilding size={14} />}>Add to Stock</Button>
                        </Group>
                    </Group>
                </Grid.Col>
                <Grid.Col style={{ border: "1px solid #000" }} span={8}>
                    Carousel
                </Grid.Col>
                <Grid.Col style={{ border: "1px solid #000" }} span={4}>
                    Order
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default OrderContainer