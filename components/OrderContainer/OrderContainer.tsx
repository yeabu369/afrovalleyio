import { Anchor, Avatar, Badge, Box, Button, Container, Divider, Grid, Group, Image, Stack, Text, TextInput, Title } from '@mantine/core'
import { IconBuilding, IconChevronRight, IconMessageDots, IconPlant2, IconShare, IconShieldCheck, IconStar, IconStarHalf } from '@tabler/icons';
import useStyles from './OrderContainer.styles';
import CropShowcase from "./CropShowcase/CropShowcase";

const OrderContainer = () => {
    const { cx, classes } = useStyles();

    return (
        <Container size="md" px={0} className={classes.container}>
            <Grid className={classes.grid} m={0}>
                <Grid.Col className={classes.col} span={12}>
                    <Text size="sm" weight="bold" variant="gradient" gradient={{ from: "darkgreen", to: "cyan" }}>Green Coffee Bean</Text>
                </Grid.Col>
                <Grid.Col className={classes.col} span={12}>
                    <Title order={2}>Crop Source • Coffee Arabica</Title>
                </Grid.Col>
                <Grid.Col className={classes.col} span={12}>
                    <Group position="apart">
                        <Text size="md" color="dimmed">Origin - Gomma, Jimma • Grade - 4</Text>
                        <Group>
                            <Button compact variant="default" leftIcon={<IconShare size={14} />}>Share</Button>
                            <Button compact variant="default" leftIcon={<IconBuilding size={14} />}>Add to Stock</Button>
                        </Group>
                    </Group>
                </Grid.Col>
                <Grid.Col className={classes.carousel} span={8}>
                    <Image radius="md" mb="sm" width="736" height="452" src="https://images.unsplash.com/photo-1534961313562-759034ed04a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" alt="Beans" />
                    <CropShowcase />
                </Grid.Col>
                <Grid.Col className={classes.order} span={4}>
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
                                <Button variant="gradient" className={classes.button} style={{ border: "1px solid #333" }} gradient={{ from: "black", to: "darkgreen" }}>Place a bulk order</Button>
                                <Button variant="outline" className={classes.button} style={{ border: "2px solid #000" }} color="dark">Take a sample</Button>
                            </Group>
                        </Group>
                    </Stack>
                </Grid.Col>
                <Grid.Col className={classes.userInfo} span={8}>
                    <Title order={4}>Crop source owner</Title>
                    <Grid pt="sm" m={0}>
                        <Grid.Col span={7} className={classes.borderBottom}>
                            <Group>
                                <Avatar radius="xl" src="">H</Avatar>
                                <Stack spacing={0}>
                                    <Group position="apart">
                                        <Title order={5}>
                                            Husen Abadega{" "}
                                        </Title>
                                        <Badge radius="sm" variant="outline" color="gray">BEST SELLER</Badge>
                                    </Group>
                                    <Group spacing={4}>
                                        <IconStar size={14} />
                                        <Text weight="bold" size="xs">
                                            4.52{" "}
                                            <Text color="dimmed" component="span">
                                                (82 reviews)
                                            </Text>
                                        </Text>
                                    </Group>
                                </Stack>
                            </Group>
                            <Group pt="md">
                                <Text size="sm">
                                    Friends, thank you for the support of Ethiopia to the world, thank you for your financial help! Since March 3, by booking my coffee, you have been helping us to survive in such a difficult situation.
                                </Text>
                                <Anchor component="a" className={classes.link}>
                                    <Text weight="bold" style={{ textDecoration: "underlined" }}>Show more</Text> 
                                    <IconChevronRight size={16} />
                                </Anchor>
                            </Group>
                        </Grid.Col>
                        <Grid.Col span={5} className={classes.borderBottom}>
                            <Group spacing={8}>
                                <Text size="sm">Trading Since: February 2024</Text>
                                <Group className={classes.wFull}>
                                    <IconStar size={14} />
                                    <Text size="sm">82 deals</Text>
                                </Group>
                                <Group className={classes.wFull}>
                                    <IconShieldCheck size={14} />
                                    <Text size="sm">
                                        Identity Verified
                                    </Text>
                                </Group>
                                <Button component="a" variant="outline" color="dark" rightIcon={<IconMessageDots size={14} />}>Contact me</Button>
                            </Group>
                        </Grid.Col>
                    </Grid>
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default OrderContainer