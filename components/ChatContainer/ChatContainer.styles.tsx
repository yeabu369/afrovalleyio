import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
    root: {

    },
    top: {
        paddingTop: theme.spacing.sm,
        paddingBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
    },
    border: {    
        border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
    },
}));