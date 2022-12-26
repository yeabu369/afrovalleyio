import { ActionIcon, Grid, Group, Stack, Text, TextInput } from "@mantine/core"
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
    },
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
  // fetching chatdata from the database
  const rows = mock_data.map((item) => (
    <tr key={item.name}  >
         
      <td  style={{border : '1px'}}>
        <Group  className={cx(classes.chatssection)}>
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
    <Grid   m={0} style={{ height: "90vh" }}>
      <Grid.Col    p={0} span={3} >
          <Group className={cx( classes.top, classes.border)} position="apart">
              <Text size="xs">Messages</Text>
              <ActionIcon size="sm" variant="subtle" color="gray">
                <IconFilter size={14} />
              </ActionIcon>

              <TextInput
              className={cx( classes.searchbarforContact)}
              placeholder="Search your clients"
              size="xs"
              icon={<IconSearch size={12} stroke={1.5} />}
              rightSectionWidth={60}
            
              styles={{ rightSection: { pointerEvents: 'none' } }}
              mb="sm"
      /> 
          </Group>

          <Group className={cx(classes.eachRow)}>
            <Table >
               <tbody >{rows}</tbody>
            </Table>
          </Group>
      
  
       

      </Grid.Col>

      <Grid.Col p={0} span={6} >
     
         <Group className={cx( classes.top, classes.border)} position="apart">
              <Text  size="sm">Hussen Abedela</Text>
              <ActionIcon size="sm" variant="subtle" color="gray">
                <IconTrash size={14} />
              </ActionIcon>
          </Group>
          

          <Group >
            <Group className={cx( classes.msgContainer)}  >
              
            <Group className={cx( classes.msgOtherSender)}>
               <Avatar size={40}  radius={30} />
               <p className={cx( classes.paragraphStyleOther)}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate autem fuga quis itaque veniam, officia sit nam molestiae exercitationem voluptatum vero, dignissimos debitis ducimus consectetur consequuntur totam modi nemo laboriosam. </p>
                 
            </Group>

            <Group className={cx( classes.msgOtherSender)}>
                <p className={cx( classes.paragraphStyleUser)}  > Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate autem fuga quis itaque veniam, officia sit nam molestiae exercitationem voluptatum vero, dignissimos debitis ducimus consectetur consequuntur totam modi nemo laboriosam. </p>
              
            </Group>
            <Group className={cx( classes.msgOtherSender)}>
               <Avatar size={40}  radius={30} />
               <p className={cx( classes.paragraphStyleOther)}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate autem fuga quis itaque veniam, officia sit nam molestiae exercitationem voluptatum vero, dignissimos debitis ducimus consectetur consequuntur totam modi nemo laboriosam. </p>
                 
            </Group>

            <Group className={cx( classes.msgOtherSender)}>
                <p className={cx( classes.paragraphStyleUser)}  > Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate autem fuga quis itaque veniam, officia sit nam molestiae exercitationem voluptatum vero, dignissimos debitis ducimus consectetur consequuntur totam modi nemo laboriosam. </p>
              
            </Group>
            <Group className={cx( classes.msgOtherSender)}>
               <Avatar size={40}  radius={30} />
               <p className={cx( classes.paragraphStyleOther)}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate autem fuga quis itaque veniam, officia sit nam molestiae exercitationem voluptatum vero, dignissimos debitis ducimus consectetur consequuntur totam modi nemo laboriosam. </p>
                 
            </Group>

            <Group className={cx( classes.msgOtherSender)}>
                <p className={cx( classes.paragraphStyleUser)}  > Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate autem fuga quis itaque veniam, officia sit nam molestiae exercitationem voluptatum vero, dignissimos debitis ducimus consectetur consequuntur totam modi nemo laboriosam. </p>
              
            </Group>
             
         

            </Group>
         
         
          <Group className={cx( classes.msgSenderContainer)}>
                  <TextInput
                  className={cx( classes.msgInput)}
                      radius="xl"
                      size="sm"
                      rightSection={
                        <ActionIcon size={22} radius="xl" color={theme.primaryColor} variant="filled">
                          {theme.dir === 'ltr' ? (
                            <IconArrowRight size={18} stroke={1.5} />
                          ) : (
                            <IconArrowLeft size={18} stroke={1.5} />
                          )}
                        </ActionIcon>
                      }
                      placeholder="Type your message"
                      rightSectionWidth={42}
                      
        />
              </Group>
            </Group>
        
     
      </Grid.Col>
      <Grid.Col  p={0} span={3}> 
      <Group className={cx( classes.top, classes.border)} position="apart">
              <Text size="sm">Latest Orders</Text>
          
          </Group>
      </Grid.Col>
   
    </Grid>
  )
}

export default ChatContainer