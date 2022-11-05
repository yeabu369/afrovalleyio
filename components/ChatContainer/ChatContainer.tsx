import { ActionIcon, Container, Grid, Group, Stack, Text } from "@mantine/core"
import { IconPlus, IconFilter } from "@tabler/icons"
import useStyles from "./ChatContainer.styles"

const ChatContainer = () => {
  const { cx, classes } = useStyles();

  return (
    <Grid m={0} className={classes.border} style={{ height: "100vh" }}>
      <Grid.Col p={0} span={2} className={classes.border}>
        <Stack>
          <Group className={cx(classes.border, classes.top)} position="apart">
            <Text size="xs">Messages</Text>
            <ActionIcon size="sm" variant="subtle" color="gray">
              <IconFilter size={14} />
            </ActionIcon>
          </Group>
        </Stack>
      </Grid.Col>
      <Grid.Col span={7} className={classes.border}>
      </Grid.Col>
      <Grid.Col span={3} className={classes.border}>
      </Grid.Col>
    </Grid>
  )
}

export default ChatContainer