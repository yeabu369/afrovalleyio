import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
    card: {
        display: "flex",
        flexDirection: "row",
        flexGrow: 1,
        marginBottom: theme.spacing.md,
    },
    image: {
        display: "flex",
        height: "100%",
        marginRight: theme.spacing.md,
        border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`,
        position: "relative",
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
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 2,
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
        border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`,
    },
    skeleton: {
        width: "100%",
        height: "100%",
    }
}));
