import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
    border: {
        border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
    },
    hScreen: {
        height: "100vh"
    },
    hFull: {
        height: "100%"
    },
    flex: {
        display: "flex"
    },
    map: {
        height: "100%",
        border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
    },
    filter: {
        borderBottom: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
        paddingBottom: `${theme.spacing.xs}px`,
    },
    bold: {
        fontWeight: 700,
        fontStyle: ``
    }
}));