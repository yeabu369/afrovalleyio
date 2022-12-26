import { Anchor, Button, Checkbox, Divider, Grid, Group, Modal, NumberInput, Select, Stack, Text, TextInput, Title } from '@mantine/core'
import { IconChevronDown, IconChevronRight, IconCurrencyDollar, IconPlant2, IconPlus, IconSeeding } from '@tabler/icons'
import React, { useState } from 'react'
import useStyles from './OrderForm.styles'
import countries from '../../../data/countries'

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
                    <Group pt="md" pb="lg" className={classes.wFull} position="apart">
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
                title={<Title size="sm" order={3}>Would you like to add more crops of this farmer?</Title>}
                centered
                size="auto"
            >
                <Group position="apart">
                    <Button
                        leftIcon={<IconPlant2 />}
                        className={classes.orderButton}
                        radius="lg"
                        type="submit"
                    >
                        Order only this crop
                    </Button>
                    <Button
                        variant="outline"
                        leftIcon=
                        {
                            <>
                                <IconSeeding />
                                <IconPlus size={14} />
                            </>
                        }
                        className={classes.orderMoreButton}
                        radius="lg"
                    >
                        Order more crops
                    </Button>
                </Group>
            </Modal>
            <Modal
                opened={sampleOrderModalOpened}
                onClose={() => setSampleOrderModalOpened(false)}
                title=<Title order={2} weight={600}>Taking a sample</Title>
                centered
                size="lg"
            >
                <form>
                    <Group>
                        <Grid >
                            <Grid.Col>
                                <Text size="lg">Contact details</Text>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <TextInput
                                    label="First Name"
                                    placeholder="John"
                                    required
                                    className={classes.wFull}
                                />
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <TextInput
                                    label="Last Name"
                                    placeholder="Doe"
                                    required
                                    className={classes.wFull}
                                />
                            </Grid.Col>
                            <Grid.Col span={12}>
                                <Text size="lg">Address</Text>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Select
                                    data={countries}
                                    className={classes.wFull}
                                    placeholder="Select country"
                                    required
                                    label="Country/Region"
                                    searchable
                                    rightSection={<IconChevronDown size={14} />}
                                />

                            </Grid.Col>
                            <Grid.Col span={6}>
                                <TextInput
                                    className={classes.wFull}
                                    placeholder="Berlin"
                                    label="City"
                                />

                            </Grid.Col>
                            <Grid.Col span={6}>
                                <TextInput
                                    className={classes.wFull}
                                    placeholder="Lower Saxony (Niedersachsen)"
                                    label="State/Province/Region"
                                />
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <TextInput
                                    className={classes.wFull}
                                    placeholder="11015"
                                    label="Zip Code"
                                />
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <TextInput
                                    className={classes.wFull}
                                    placeholder="Mohrenstrasse 37 10117 Berlin"
                                    label="Street Address"
                                />
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <TextInput
                                    className={classes.wFull}
                                    placeholder="+49 211 5684962"
                                    label="Phone number"
                                />
                                <Text size={10}>May be used to assist delivery</Text>
                            </Grid.Col>
                            <Grid.Col span={12}>
                                <Text size="lg">Crops</Text>
                            </Grid.Col>
                            <Grid.Col span={12}>
                                <Text size="sm">Djimma Gomma Awol G1 Natural</Text>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <TextInput
                                    className={classes.wFull}
                                    placeholder="1,00"
                                    label="Capacity (Kilo)"
                                    required
                                />
                                <Text size={10}>* The sample of coffee can&apos;t be more than 2 kilos</Text>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <TextInput
                                    className={classes.wFull}
                                    placeholder="1,00"
                                    icon={<IconCurrencyDollar size={14} />}
                                    label="Total Price"
                                    required
                                />
                            </Grid.Col>
                            <Grid.Col span={12}>
                                <Anchor className={classes.link}>
                                    <Text weight={600} underline >Add more</Text>
                                    <IconChevronRight size={16} />
                                </Anchor>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Stack spacing="sm">
                                    <Group position="apart">
                                        <Text size="sm" underline color="dimmed" style={{ textDecoration: "underlined" }}>$ 18.25 x 1 kilo</Text>
                                        <Text size="sm" color="dimmed">$ 18,25</Text>
                                    </Group>
                                    <Group position="apart">
                                        <Text size="sm" underline color="dimmed">Discount (special price)</Text>
                                        <Text size="sm" color="dimmed">-$ 3,00</Text>
                                    </Group>
                                    <Group position="apart">
                                        <Text size="sm" underline color="dimmed">Delivery price (DHL)</Text>
                                        <Text size="sm" color="dimmed">$ 20,00</Text>
                                    </Group>
                                </Stack>
                                <Group mt="xl" position="apart">
                                    <Text size="md">Total Price: </Text>
                                    <Text size="md">$ 50,50</Text>
                                </Group>
                            </Grid.Col>
                            <Grid.Col pt="sm" pb="sm" span={12}>
                                <Divider />
                            </Grid.Col>
                            <Grid.Col span={12}>
                                <Group position="center">
                                    <Checkbox label="Accept Terms & Conditions" />
                                </Group>
                            </Grid.Col>
                            <Grid.Col span={12}>
                                <Group position="center">
                                    <Button className={classes.confirmOrderButton} variant="gradient" gradient={{ from: "black", to: "darkgreen" }} radius="sm" type="submit">Confirm Order</Button>
                                </Group>
                            </Grid.Col>
                        </Grid>
                    </Group>
                </form>
            </Modal>
        </>
    )
}

export default OrderForm