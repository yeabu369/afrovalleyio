import { UnstyledButton, Checkbox, Text, Image, SimpleGrid, createStyles } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';

const useStyles = createStyles((theme, { checked }: { checked: boolean }) => ({
  button: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    transition: 'background-color 150ms ease, border-color 150ms ease',
    border: `1px solid ${
      checked
        ? theme.fn.variant({ variant: 'outline', color: theme.primaryColor }).border
        : theme.colorScheme === 'dark'
        ? theme.colors.dark[8]
        : theme.colors.gray[3]
    }`,
    borderRadius: theme.radius.sm,
    padding: theme.spacing.sm,
    backgroundColor: checked
      ? theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background
      : theme.colorScheme === 'dark'
      ? theme.colors.dark[8]
      : theme.white,
  },

  body: {
    flex: 1,
    marginLeft: theme.spacing.md,
  },
}));

interface ButtonCheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?(checked: boolean): void;
  title: string;
  description: string;
}

export function ButtonCheckbox({
  checked,
  defaultChecked,
  onChange,
  title,
  description,
  className,
  ...others
}: ButtonCheckboxProps & Omit<React.ComponentPropsWithoutRef<'button'>, keyof ButtonCheckboxProps>) {
  const [value, handleChange] = useUncontrolled({
    value: checked,
    defaultValue: defaultChecked,
    finalValue: false,
    onChange,
  });

  const { classes, cx } = useStyles({ checked: value });

  return (
    <UnstyledButton
      {...others}
      onClick={() => handleChange(!value)}
      className={cx(classes.button, className)}
    >
      <div className={classes.body}>
        <Text color="dimmed" size="xs" sx={{ lineHeight: 1 }} mb={5}>
          {description}
        </Text>
        <Text weight={500} size="sm" sx={{ lineHeight: 1 }}>
          {title}
        </Text>
      </div>

      <Checkbox
        checked={value}
        onChange={() => {}}
        tabIndex={-1}
        styles={{ input: { cursor: 'pointer' } }}
      />
    </UnstyledButton>
  );
}

const mockdata = [
  { description: 'Sun and sea', title: 'Beach vacation' },
  { description: 'Sightseeing', title: 'City trips' },
  { description: 'Mountains', title: 'Hiking vacation' },
  { description: 'Snow and ice', title: 'Winter vacation' },
];

export default function ButtonCheckboxes() {
  const items = mockdata.map((item) => <ButtonCheckbox {...item} key={item.title} />);
  return (
    <SimpleGrid
      cols={4}
      breakpoints={[
        { maxWidth: 'md', cols: 2 },
        { maxWidth: 'sm', cols: 1 },
      ]}
    >
      {items}
    </SimpleGrid>
  );
}