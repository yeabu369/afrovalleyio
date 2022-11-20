import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
    stack: {
        border: `2px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
        height: "100%",
        overFlowY: "scroll"
    },
}));