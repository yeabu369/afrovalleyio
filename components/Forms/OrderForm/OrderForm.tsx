import { Button, Group, Modal, NumberInput, Stack, Text, TextInput, Title } from '@mantine/core'
import { IconPlant2, IconPlus, IconSeeding } from '@tabler/icons'
import React, { useState } from 'react'
import useStyles from './OrderForm.styles'

const OrderForm = () => {
    const [bulkOrderModalOpened, setBulkOrderModalOpened] = useState(false);
    const [sampleOrderModalOpened, setSampleOrderModalOpened] = useState(false);
    const { cx, classes } = useStyles();

    return (
        <>
            <Stack spacing={6} p="md" className={classes.orderPanel}>
                <Group position="apart" >
                    <Title order={2} >
                        $7,49
                        <Text component="span" size="sm" weight="normal" color="dimmed">
                            /kilo
                        </Text>
                    </Title>
                    <Text color="dimmed" weight="600" size="lg" style={{ textDecoration: "line-through" }}>$12.95</Text>
                </Group>
                <Group spacing="xs">
                    <IconPlant2 size={18} />
                    <Text size="xs">
                        5000Kg{" "}
                        <Text color="dimmed" component="span">
                            (available)
                        </Text>
                    </Text>
                </Group>
                <Group position="apart" pt={32} spacing="xs">
                    <Text size="xs">
                        Quantity (kg)
                    </Text>
                    <TextInput className={classes.wFull} placeholder="0" rightSection={<Text>Kg</Text>} />
                    <Group className={classes.wFull} position="apart">
                        <Text size="xs">$7,49 x  600 kilo</Text>
                        <Text size="xs">$7344,25</Text>
                    </Group>
                    <Group className={classes.wFull} position="apart">
                        <Text size="xs">Discount (special price)</Text>
                        <Text size="xs">-$200,00</Text>
                    </Group>
                    <Group className={classes.wFull} position="apart">
                        <Text size="xs">Delivery type FOB (Free on Board)</Text>
                        <Text size="xs">$0,00</Text>
                    </Group>
                    <Group pt="md" pb="lg" className={classes.wFull} style={{ borderBottom: "1px solid #333" }} position="apart">
                        <Text size="md" weight={600}>Total Price:</Text>
                        <Text size="md">$7144,25</Text>
                    </Group>
                    <Group spacing="sm" mt={60}>
                        <Button
                            variant="gradient"
                            className={classes.button}
                            style={{ border: "1px solid #333" }}
                            gradient={{ from: "black", to: "darkgreen" }}
                            onClick={() => setBulkOrderModalOpened(true)}
                        >
                            Place a bulk order
                        </Button>
                        <Button
                            variant="outline"
                            className={classes.button}
                            style={{ border: "2px solid #000" }}
                            color="dark"
                            onClick={() => setSampleOrderModalOpened(true)}
                        >
                            Take a sample
                        </Button>
                    </Group>
                </Group>
            </Stack>
            <Modal
                opened={bulkOrderModalOpened}
                onClose={() => setBulkOrderModalOpened(false)}
                title="Would you like to add more crops of this farmer?!"
                centered
            >
                <Group position="apart" className={classes.flex} style={{ border: "1px solid #000" }}>
                    <Button
                        leftIcon={<IconPlant2 />}
                        className={classes.modalButton}
                        radius ="lg"
                    >
                        Order only this crop
                    </Button>
                    <Button
                        leftIcon=
                        {<>
                            <IconSeeding />
                            <IconPlus />
                        </>}
                        className={classes.modalButton}
                        radius="lg"
                    >
                        Order more crops
                    </Button>
                </Group>
            </Modal>
            <Modal
                opened={sampleOrderModalOpened}
                onClose={() => setSampleOrderModalOpened(false)}
                title="Would you like to add more crops of this farmer?!"
                centered
            >
                <Group>
                    <Button>Order only this crop</Button>
                    <Button>Order more crops</Button>
                </Group>
            </Modal>
        </>
    )
}

export default OrderForm