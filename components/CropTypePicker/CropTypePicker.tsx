import { useState } from 'react';
import { UnstyledButton, Menu, Image, Group } from '@mantine/core';
import { IconChevronDown, IconPlant, IconSeeding, IconPlant2, IconPlantOff } from '@tabler/icons';
import useStyles from './CropTypePicker.styles';

const data = [
  { label: 'All', image: <IconPlant size={18} /> },
  { label: 'Arabica', image: <IconSeeding size={18} /> },
  { label: 'Washed', image: <IconPlant2 size={18} /> },
  { label: 'Dehusked', image: <IconPlantOff size={18} /> },
];

export default function CropTypePicker() {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles({ opened });
  const [selected, setSelected] = useState(data[0]);
  const items = data.map((item) => (
    <Menu.Item
      icon={item.image}
      onClick={() => setSelected(item)}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
    >
      <Menu.Target>
        <UnstyledButton className={classes.control}>
          <Group spacing="xs">
            <span className={classes.label}>{selected.label}</span>
          </Group>
          <IconChevronDown size={18} className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}