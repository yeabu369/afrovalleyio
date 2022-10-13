import { Autocomplete, Box, Loader, Paper, PasswordInput, TextInput } from '@mantine/core'
import React, { useRef, useState } from 'react'
import { useForm } from '@mantine/form'

const SignupForm: React.FC<any> = ({ form }) => {
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
                setData(['gmail.com', 'outlook.com', 'afrovalley.io'].map((provider) => `${val}@${provider}`));
            }, 1000);
        }
    };
    return (
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
                <TextInput
                    label="First Name"
                    placeholder="First Name"
                    required
                    {...form.getInputProps('firstname')}
                />
                <TextInput
                    label="Last Name"
                    placeholder="Last Name"
                    required
                    mt="md"
                    {...form.getInputProps('lastname')}
                />
                <Autocomplete
                    value={value}
                    data={data}
                    onChange={handleChange}
                    rightSection={loading ? <Loader size={16} /> : null}
                    label="Email"
                    placeholder="you@afrovalley.io"
                    mt="md"
                    required
                    {...form.getInputProps('email')}
                />
                <PasswordInput
                    label="Password"
                    placeholder="Your password"
                    required mt="md"
                    {...form.getInputProps('password')}
                />
            </Paper>

        </Box>
    )
}

export default SignupForm