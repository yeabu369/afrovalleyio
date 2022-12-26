import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
    box: {
        border: "1px solid #000"
    },
    orders: {
        overflowY: "hidden",
    },
    hFull: {
        height: "100%"
    },
    flex: {
        display: "flex"
    },
    map: {
        height: "100%",
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