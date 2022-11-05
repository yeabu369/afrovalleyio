import {
  Header,
  Group,
  Button,
  UnstyledButton,
  Text,
  ThemeIcon,
  Anchor,
  Divider,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  HoverCard,
  Center,
  SimpleGrid,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
  IconActivity,
} from '@tabler/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AfroValleyLogo from '../Logo/LogoWithText';
import useStyles from './Header.styles';

const mockdata = [
  {
    icon: IconBook,
    title: 'Information Center',
    description: 'Farmer Information Center and Production Practices',
    link: "#"
  },
  {
    icon: IconActivity,
    title: 'Welfare Services',
    description: 'Farmer Health and Welfare Services',
    link: "http://3.26.66.225/"
  },
];

export default function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  const router = useRouter();

  const links = mockdata.map((item) => (
    <UnstyledButton component="a" href={item.link} className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={22} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size="sm" weight={500}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: '100%' }}>
          <AfroValleyLogo width={120} height={40} />

          <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
            <Link href="/marketplace" passHref>
              <a className={classes.link}>
                Marketplace
              </a>
            </Link>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Apps
                    </Box>
                    <IconChevronDown size={16} color={theme.fn.primaryColor()} />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
                <Group position="apart" px="md">
                  <Text weight={500}>Apps</Text>
                  <Anchor href="#" size="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider
                  my="sm"
                  mx="-md"
                  color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
                />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group position="apart">
                    <div>
                      <Text weight={500} size="sm">
                        Get started
                      </Text>
                      <Text size="xs" color="dimmed">
                        Their food sources have decreased, and their numbers
                      </Text>
                    </div>
                    <Button component="a" href="/signup" variant="default">Get started</Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <Anchor href="/orders/1" className={classes.link}>
              Orders
            </Anchor>
            <a href="#" className={classes.link}>
              Stock
            </a>
            <Anchor href="/chats" className={classes.link}>
              Chat
            </Anchor>
          </Group>

          <Group className={classes.hiddenMobile}>
            <Button component='a' href='/auth/login' variant="default">Log in</Button>
            <Button
              component='a'
              href='/auth/signup'
              variant="gradient"
              gradient={{ from: 'green', to: 'cyan' }}
            >
              Sign up
            </Button>
            <Button component="a" href="http://3.26.66.225/" variant="subtle" color="teal">Farmer Wellfare</Button>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
          <Anchor href="/marketplace" className={classes.link}>
            Marketplace
          </Anchor>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Apps
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <Anchor href="/orders/1" className={classes.link}>
            Orders
          </Anchor>
          <Anchor href="#" className={classes.link}>
            Stock
          </Anchor>
          <Anchor href="/chats" className={classes.link}>
            Chat
          </Anchor>

          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <Group position="center" grow pb="xl" px="md">
            <Button component='a' href='/auth/login' variant="default">Log in</Button>
            <Button
              component='a'
              href='/auth/signup'
              variant="gradient"
              gradient={{ from: 'green', to: 'cyan' }}
            >
              Sign up
            </Button>
            <Button component="a" href="http://3.26.66.225/" variant="subtle" color="teal">Farmer Welfare</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}