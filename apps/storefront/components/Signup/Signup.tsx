import { useState } from 'react';
import { Stepper, Button, Group, Box, Container, Center, Title, Text, Paper, TextInput, PasswordInput, Stack, Autocomplete, Loader } from '@mantine/core';
import { IconMailOpened, IconSettings, IconShieldCheck, IconUserCheck } from '@tabler/icons';
import AfroValleyLogo from '../Logo/LogoWithText';
import SignupForm from '../Forms/SignupForm/SignupForm';
import VerificationForm from '../Forms/VerificationForm/VerificationForm';
import { useForm } from '@mantine/form';
import PreferenceForm from '../Forms/PreferenceForm/PreferenceForm';

export default function GetStarted() {
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const form = useForm({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      preference: '',
      termsOfService: false,
    },

    validate: {
      firstname: (value: any) => { if (!value) return 'First name is required'; },
      lastname: (value: any) => { if (!value) return 'Last name is required'; }, 
      email: (value: any) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value: any) => { if (!value) return 'Password is required'; },
      preference: (value: any) => { if (!value) return 'Preference is required'; },
      termsOfService: (value: any) => { if (!value) return 'You must agree to the terms of service'; },
    },
  });

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
      <form onSubmit={form.onSubmit((values) => console.log("Values", values))}>
        <Stepper size="xs" active={active} onStepClick={setActive} breakpoint="sm">
          <Stepper.Step icon={<IconUserCheck size={18} />} label="First step" description="Create an account" allowStepSelect={active > 0}>
            <SignupForm form={form} />
          </Stepper.Step>
          <Stepper.Step icon={<IconMailOpened size={18} />} label="Second step" description="Verify email" allowStepSelect={active > 1}>
            <VerificationForm form={form} />
          </Stepper.Step>
          <Stepper.Step icon={<IconSettings size={18} />} label="Third step" description="Update Preferences" allowStepSelect={active > 2}>
            <PreferenceForm form={form} />
          </Stepper.Step>
          <Stepper.Step icon={<IconShieldCheck size={18} />} label="Final step" description="Get full access" allowStepSelect={active > 3}>
            <Box
              sx={(theme) => ({
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                paddingLeft: (theme.spacing.xl) * 10,
                paddingRight: (theme.spacing.xl) * 10,
                paddingTop: (theme.spacing.xl) * 2,
                paddingBottom: (theme.spacing.xl) * 2,
                borderRadius: theme.radius.md,
                cursor: 'pointer',

                '&:hover': {
                  backgroundColor:
                    theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
                },
              })}
            >
              <Paper withBorder shadow="md" p={30} radius="md" >
                <Text size="sm" mb="md">
                  You have successfully verified your email address. You can now get full access to AfroValley.
                </Text>
              </Paper>
            </Box>
          </Stepper.Step>
          <Stepper.Completed>
            <Center>Completed, click back button to get to previous step</Center>
          </Stepper.Completed>
        </Stepper>

        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>Back</Button>
          {(active === 3) ?
            <Button type="submit" variant="gradient" gradient={{ from: 'green', to: 'cyan' }}>Submit</Button> :
            <Button variant="gradient" gradient={{ from: 'green', to: 'cyan' }} onClick={nextStep}>Next step</Button>
          }
        </Group>
      </form>

    </Container >
  );
}