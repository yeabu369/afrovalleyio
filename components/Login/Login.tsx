import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
    Center,
} from '@mantine/core';
import AfroValleyLogo from '../Logo/Logo';

export default function AuthenticationTitle() {
    return (
        <Container size={420} my={40}>
            <Center pb={90}>
                <AfroValleyLogo width={240} height={80}/>
            </Center>
            <Title
                align="center"
                sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
            >
                Welcome back!
            </Title>
            <Text color="dimmed" size="sm" align="center" mt={5}>
                Do not have an account yet?{' '}
                <Anchor<'a'> href="/auth/signup" size="sm" onClick={(event) => event.preventDefault()}>
                    Create account
                </Anchor>
            </Text>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput label="Email" placeholder="you@afrovalley.io" required />
                <PasswordInput label="Password" placeholder="Your password" required mt="md" />
                <Group position="apart" mt="md">
                    <Checkbox label="Remember me" />
                    <Anchor<'a'> onClick={(event) => event.preventDefault()} href="#" size="sm">
                        Forgot password?
                    </Anchor>
                </Group>
                <Button variant="gradient" gradient={{ from: 'green', to: 'cyan' }} fullWidth mt="xl">
                    Sign in
                </Button>
            </Paper>
        </Container>
    );
}