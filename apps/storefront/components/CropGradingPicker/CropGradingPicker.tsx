import { useState } from 'react';
import { UnstyledButton, Menu, Image, Group } from '@mantine/core';
import { IconBoxMultiple0, IconChevronDown, IconCircleNumber1, IconCircleNumber2, IconCircleNumber3, IconCircleNumber4 } from '@tabler/icons';
import useStyles from './CropGradingPicker.styles';

const data = [
  { label: 'All', image: <IconBoxMultiple0 size={18} /> },
  { label: 'Grade 1', image: <IconCircleNumber1 size={18} /> },
  { label: 'Grade 2', image: <IconCircleNumber2 size={18} /> },
  { label: 'Grade 3', image: <IconCircleNumber3 size={18} /> },
  { label: 'Grade 4', image: <IconCircleNumber4 size={18} /> },
];

export default function PricePicker() {
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