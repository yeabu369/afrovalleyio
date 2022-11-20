import { useState } from 'react';
import { Navbar, UnstyledButton, Tooltip, Title, Anchor, Drawer, ActionIcon } from '@mantine/core';
import {
  IconHome2,
  IconGauge,
  IconFingerprint,
  IconUser,
  IconSettings,
  IconMenu2,
} from '@tabler/icons';
import useStyles from './Navbar.styles';

const mainLinksMockdata = [
  { icon: IconGauge, label: 'Dashboard' },
  { icon: IconHome2, label: 'Orders' },
  { icon: IconUser, label: 'Account' },
  { icon: IconFingerprint, label: 'Security' },
  { icon: IconSettings, label: 'Settings' },
];

const linksMockdata = [
  'Dashboard',
  'Orders',
  'Account',
  'Security',
  'Settings',
];

export default function DoubleNavbar() {
  const [opened, setOpened] = useState(true);
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Dashboard');
  const [activeLink, setActiveLink] = useState('Settings');

  const mainLinks = mainLinksMockdata.map((link) => (
    <Tooltip label={link.label} position="right" withArrow transitionDuration={0} key={link.label}>
      <UnstyledButton
        onClick={() => setActive(link.label)}
        className={cx(classes.mainLink, { [classes.mainLinkActive]: link.label === active })}
      >
        <link.icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  ));

  const links = linksMockdata.map((link) => (
    <Anchor
      className={cx(classes.link, { [classes.linkActive]: activeLink === link })}
      href="/"
      onClick={(event: any) => {
        event.preventDefault();
        setActiveLink(link);
      }}
      key={link}
    >
      {link}
    </Anchor>
  ));

  const toggleDrawer = () => setOpened((o) => !o);

  return (
    <Drawer
      onClose={() => setOpened(false)}
      opened={opened}
      position="left"
      size="md"
    >
      <Navbar.Section grow className={classes.wrapper}>
        <div className={classes.aside}>
          <div className={classes.logo}>
            <ActionIcon onClick={() => toggleDrawer()} variant="transparent">
              <IconMenu2 size={16} />
            </ActionIcon>
          </div>
          {mainLinks}
        </div>
        <div className={classes.main}>
          <Title order={4} className={classes.title}>
            {active}
          </Title>

          {links}
        </div>
      </Navbar.Section>

    </Drawer>
  );
}