import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
    container: {
        border: `2px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
        height: "100%",
    },  
    grid: {
        paddingTop: "3rem",
    },
    col: {
        paddingTop: 0,
        paddingBottom: 0,
    },
    carousel: {
        paddingTop: "1.25rem",
    },
    order: {
        paddingTop: "1.25rem",
    },
    orderPanel: {
        height: "100%",
        borderRadius: theme.radius.md,
        border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.gray[4] : theme.colors.gray[3]}`,
    },
    wFull: {
        width: "100%"
    },
    userInfo: {
        paddingTop: "1.5rem",
    },
    button: {
        height: "3.125rem",
        width: "100%",
    },
    link: {
        textDecoration: "underlined",
        color: theme.colors.dark
    }
}));