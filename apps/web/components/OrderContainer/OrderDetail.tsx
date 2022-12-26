import { Anchor, Avatar, Badge, Box, Button, Container, Divider, Grid, Group, Image, Skeleton, Stack, Text, TextInput, Title } from '@mantine/core'
import { IconBuilding, IconChevronRight, IconMessageDots, IconPlant2, IconShare, IconShieldCheck, IconStar, IconStarHalf } from '@tabler/icons';
import useStyles from './OrderDetail.styles';
import CropShowcase from "./CropShowcase/CropShowcase";
import OrderForm from '../Forms/OrderForm/OrderForm';

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
                    <OrderForm />
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
                        <Grid.Col pt="xl" span={12}>
                            <Title order={4}>Specification</Title>
                            <Grid pt="xl" pb="xl" className={classes.borderBottom}>
                                <Grid.Col span={4} className={classes.wFull}>
                                    <Text size="sm">Crop Quality</Text>
                                    <Text weight={600} size="sm">A</Text>
                                </Grid.Col>
                                <Grid.Col span={4} className={classes.wFull}>
                                    <Text size="sm">Screen Size</Text>
                                    <Text weight={600} size="sm">13</Text>
                                </Grid.Col>
                                <Grid.Col span={4} className={classes.wFull}>
                                    <Text size="sm">Cup Taste</Text>
                                    <Text weight={600} size="sm">Sweet</Text>
                                </Grid.Col>
                                <Grid.Col span={4} className={classes.wFull}>
                                    <Text size="sm">Initial Grading</Text>
                                    <Text weight={600} size="sm">4</Text>
                                </Grid.Col>
                                <Grid.Col span={4} className={classes.wFull}>
                                    <Text size="sm">Moisture</Text>
                                    <Text weight={600} size="sm">0,1</Text>
                                </Grid.Col>
                                <Grid.Col span={4} className={classes.wFull}>
                                    <Text size="sm">Crop Year</Text>
                                    <Text weight={600} size="sm">2022</Text>
                                </Grid.Col>
                                <Grid.Col span={4} className={classes.wFull}>
                                    <Text size="sm">Crop Quantity</Text>
                                    <Text weight={600} size="sm">5000 Kg</Text>
                                </Grid.Col>
                                <Grid.Col span={4} className={classes.wFull}>
                                    <Text size="sm">Primary Process Method</Text>
                                    <Text weight={600} size="sm">Natural and dehusked</Text>
                                </Grid.Col>
                            </Grid>
                        </Grid.Col>
                        <Grid.Col pt="xl" span={12}>
                            <Title order={4}>Environment</Title>
                            <Grid pt="xl" pb="xl" className={classes.borderBottom}>
                                <Grid.Col span={12} className={classes.wFull}>
                                    <Skeleton height={200} />
                                </Grid.Col>
                                <Grid.Col span={4} className={classes.wFull}>
                                    <Text size="sm">Region</Text>
                                    <Text weight={600} size="sm">Oromia, Ethiopia</Text>
                                </Grid.Col>
                                <Grid.Col span={4} className={classes.wFull}>
                                    <Text size="sm">Origin</Text>
                                    <Text weight={600} size="sm">Gomma, Jimma</Text>
                                </Grid.Col>
                                <Grid.Col span={4} className={classes.wFull}>
                                    <Text size="sm">Soil Type</Text>
                                    <Text weight={600} size="sm">Forest (Dark) Soil</Text>
                                </Grid.Col>
                                <Grid.Col span={4} className={classes.wFull}>
                                    <Text size="sm">Altitude</Text>
                                    <Text weight={600} size="sm">Above 2200</Text>
                                </Grid.Col>
                            </Grid>
                        </Grid.Col>
                        <Grid.Col pt="xl" span={12}>
                            <Title order={4}>The crop reviews • 7</Title>
                            <Grid pt="xl" pb="xl" className={classes.borderBottom}>
                                <Grid.Col span={12} className={classes.wFull}>
                                    <Skeleton height={200} />
                                </Grid.Col>
                            </Grid>
                        </Grid.Col>
                    </Grid>
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default OrderContainer