import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
    container: {
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
    wFull: {
        width: "100%"
    },
    userInfo: {
        paddingTop: "1.5rem",
        borderBottom: `1px solid ${theme.colorScheme === "dark" ? theme.colors.gray[4] : theme.colors.gray[3]}`,
    },
    button: {
        height: "3.125rem",
        width: "100%",
    },
    link: {
        display: "flex",
        alignItems: "center",
        textDecoration: "underlined",
        color: theme.colors.dark,
    },
    borderBottom: {
        borderBottom: `1px solid ${theme.colorScheme === "dark" ? theme.colors.gray[4] : theme.colors.gray[3]}`,
    }
}));