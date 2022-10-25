import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
    orderPanel: {
        height: '100%',
        borderRadius: theme.radius.md,
        border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.gray[3]}`,
    },
    userInfo: {
        paddingTop: '1.5rem',
        borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.gray[3]}`,
    },
    button: {
        height: '3.125rem',
        width: '100%',
    },
    link: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'underlined',
        color: theme.colors.dark,
    },
    borderBottom: {
        borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.gray[3]}`,
    },
    wFull: {
        width: '100%',
    },
    modalButton: {
        height: '10rem',
    },
    flex: {
        display: 'flex',
    }
})); 