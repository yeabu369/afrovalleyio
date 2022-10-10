import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
    card: {
        padding: 0
    },
    orderImage: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing.xs,
    },
    image: {
        height: "100%"
    },
    body: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },
    cropImage: {
        position: "absolute",
        top: 0,
        left: 0,
    },
    avatar: {
        border: `2px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
    },
    text: {
        marginBottom: theme.spacing.md,
    },
    title: {
        marginBottom: theme.spacing.md,
    },
    description: {
        marginBottom: theme.spacing.md,
    },
    price: {
        marginBottom: theme.spacing.md,
    },
    button: {
        width: "100%",
    },
    border: {
        border: `2px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`,
    },
    hFull: {
        height: "100%"
    }
}));
