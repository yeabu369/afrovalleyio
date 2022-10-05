import { useRef, useState } from 'react';
import { Stepper, Button, Group, Box, Container, Center, Title, Text, Paper, TextInput, PasswordInput, Stack, Autocomplete, Loader } from '@mantine/core';
import { IconMailOpened, IconShieldCheck, IconUserCheck } from '@tabler/icons';
import AfroValleyLogo from '../Logo/Logo';

export default function Signup() {
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const timeoutRef = useRef<number>(-1);
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string[]>([]);

  const handleChange = (val: string) => {
    window.clearTimeout(timeoutRef.current);
    setValue(val);
    setData([]);

    if (val.trim().length === 0 || val.includes('@')) {
      setLoading(false);
    } else {
      setLoading(true);
      timeoutRef.current = window.setTimeout(() => {
        setLoading(false);
        setData(['gmail.com', 'outlook.com', 'yahoo.com', 'afrovalley.io'].map((provider) => `${val}@${provider}`));
      }, 1000);
    }
  };

  return (
    <Container size={900} py={40}>
      <Center pb={60}>
        <AfroValleyLogo width={180} height={60} />
      </Center>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
        pb={30}
      >
        Get Started
      </Title>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step icon={<IconUserCheck size={18} />} label="First step" description="Create an account">
          <Stack align="center">
            <Paper withBorder shadow="md" p={30} mt={30} radius="md" >
              <TextInput label="Firstname" placeholder="First Name" required />
              <TextInput label="Lastname" placeholder="Last Name" required mt="md" />
              <Autocomplete
                value={value}
                data={data}
                onChange={handleChange}
                rightSection={loading ? <Loader size={16} /> : null}
                label="Email"
                placeholder="you@afrovalley.io"
                mt="md"
              />
              <PasswordInput label="Password" placeholder="Your password" required mt="md" />
            </Paper>
          </Stack>
        </Stepper.Step>
        <Stepper.Step icon={<IconMailOpened size={18} />} label="Second step" description="Verify email">
          <Center>Step 2 content: Verify email</Center>
        </Stepper.Step>
        <Stepper.Step icon={<IconShieldCheck size={18} />} label="Final step" description="Get full access">
          <Center>Step 3 content: Get full access</Center>
        </Stepper.Step>
        <Stepper.Completed>
          <Center>Completed, click back button to get to previous step</Center>
        </Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button variant="gradient" gradient={{ from: 'green', to: 'cyan' }} onClick={nextStep}>Next step</Button>
      </Group>
    </Container >
  );
}