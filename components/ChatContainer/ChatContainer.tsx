import { ActionIcon, Container, Grid, Group, Stack, Text, TextInput } from "@mantine/core"
import { IconPlus, IconFilter, IconArrowRight, IconArrowLeft, IconSearch, IconUpload } from "@tabler/icons"
import useStyles from "./ChatContainer.styles"
import {
  Avatar,
  Badge,
  Table,
  Anchor,
  ScrollArea,
  useMantineTheme,
} from '@mantine/core';
import { IconPencil, IconTrash } from '@tabler/icons';

const mock_data = [
    {
      "avatar": "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      "name": "Robert Wolfkisser",
      "job": "Engineer",
      "email": "rob_wolf@gmail.com",
      "phone": "+44 (452) 886 09 12"
    },
    {
      "avatar": "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      "name": "Jill Jailbreaker",
      "job": "Engineer",
      "email": "jj@breaker.com",
      "phone": "+44 (934) 777 12 76"
    },
    {
      "avatar": "https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      "name": "Henry Silkeater",
      "job": "Designer",
      "email": "henry@silkeater.io",
      "phone": "+44 (901) 384 88 34"
    },
    {
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      "name": "Bill Horsefighter",
      "job": "Designer",
      "email": "bhorsefighter@gmail.com",
      "phone": "+44 (667) 341 45 22"
    },
    {
      "avatar": "https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      "name": "Jeremy Footviewer",
      "job": "Manager",
      "email": "jeremy@foot.dev",
      "phone": "+44 (881) 245 65 65"
    }
  ]

const ChatContainer = () => {
  const { cx, classes } = useStyles();
  const theme = useMantineTheme();
  const rows = mock_data.map((item) => (
    <tr key={item.name}>
      <td>
        <Group spacing="sm">
          <Avatar size={30} src={item.avatar} radius={30} />
          <div>
            <Text size="xs" color="dimmed"> {item.name}</Text>
            <Text size={12} weight={500}> Crop Source Coffee Arabica </Text>
            <Group noWrap spacing={10} mt={3}>
              <Text size="xs" color="dimmed"> online now  </Text>
            </Group>
          </div>    
        </Group>
      </td>

      </tr>))

  return (
    <Grid   m={0} style={{ height: "100vh" }}>
      <Grid.Col  className={cx(classes.border)}   p={0} span={3} >
        <Stack  >
          <Group className={cx( classes.top)} position="apart">
              <Text size="xs">Messages</Text>
              <ActionIcon size="sm" variant="subtle" color="gray">
                <IconFilter size={14} />
              </ActionIcon>
         
            <Table sx={{ minWidth: 200 }} verticalSpacing="sm">
              
               <tbody>{rows}</tbody>
            </Table>
          </Group>
        </Stack>
      </Grid.Col>
      <Grid.Col span={6} className={classes.border}>
      <Text size={12} weight={500}>Hussen Abedela</Text>
      <Text size="xs" color="dimmed"> online now  </Text>
    

           <Group className={cx( classes.top)}>
              <Avatar size={30}  radius={30} />
              <Text size="xs" weight={500}> Hussen Abedela </Text>
            </Group>
          <Group className={cx( classes.left)}  >
            <Text  size="xs" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum autem fuga nostrum error.  </Text>
            
         </Group>
         <Group className={cx( classes.top)}>
              <Avatar size={30}  radius={30} />
              <Text size="xs" weight={500}> Hussen Abedela </Text>
            </Group>
          <Group className={cx( classes.left)}  >
            <Text  size="xs" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum autem fuga nostrum error.  </Text>
            
         </Group>
         <Group className={cx( classes.top)}>
              <Avatar size={30}  radius={30} />
              <Text size="xs" weight={500}> Hussen Abedela </Text>
            </Group>
          <Group className={cx( classes.left)}  >
            <Text  size="xs" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum autem fuga nostrum error.  </Text>
            <TextInput className={cx( classes.bottom)}  radius="xl"  size="xs"  rightSection={
                 <ActionIcon size={25} radius="xl" color={theme.primaryColor} variant="filled">
                          {theme.dir === 'ltr' ? (
                            <IconArrowRight size={15} stroke={1.5} />
                          ) : (
                            <IconArrowLeft size={15} stroke={1.5} />
                          )}</ActionIcon>} placeholder="Type Messages" />
         </Group>
         
        
     
      </Grid.Col>
      <Grid.Col span={6} className={classes.border}>
      </Grid.Col>
    </Grid>
  )
}

export default ChatContainer