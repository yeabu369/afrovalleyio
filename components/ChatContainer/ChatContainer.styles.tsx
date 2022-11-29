import {  createStyles } from '@mantine/core';


export default createStyles((theme) => ({
    root: {

    },
    searchbarforContact :{
        width: '300px',
        height: 'vh',
        borderRadius: '20px',
        borderColor: '#F4F4F4',
        marginLeft : '40px',
        marginTop: '8px'
        
    
    
    },
    inner : {
       maxWidth:'550px',
       width: '90%',
       
    },
    paragraphStyleOther : {
        backgroundColor:'#F4F4F4', width:'40%', padding: '7px', borderRadius:'10px' ,textAlign:'start', fontSize:'12px'
    },
    paragraphStyleUser : {
        textAlign:'start', marginLeft:'400px', fontSize:'12px',backgroundColor:'#F4F4F4',width:'40%', padding: '5px', borderRadius:'10px'
    },
    msgOtherSender : {
        display:'flex',marginLeft:'15px', marginTop:'12px'
    },
    msgUserSender : {
        display:'flex', marginTop:'2px', 
    },
    msgContainer :{
        height: '72vh',
        overflow: 'hidden',
        overflowY: 'scroll'
    },
    msgInput : {
        width : '40pc',
        marginRight : '150px',
        height:'6vh',
        marginTop:'10px',
        marginLeft:'40px'
    },
    
    msgSenderContainer :{
        marginTop:'20px',
        padding: '5px'
    },
    chatUserProfile : {
        width: '50px',
        height: '37px',
        borderRadius:'50%',
        objectFit:'cover',
        marginLeft:'10px'
    },
 
    chatssection : {
        backgroundColor : '#F4F4F4',
        borderRadius : '10px',
        marginLeft : '13px',
        padding : '6px',
       
        width: '330px'
        
    },
    eachRow : {
        height: '72vh',
        overflow: 'hidden',
        overflowY: 'scroll'
        
    },
    // add style to make it fixed in the bottom
    // bottom : {
    //     position: 'fixed',
    //     bottom: '0',
    //     width: '100%',
    //     backgroundColor: '#F4F4F4',
    //     borderRadius: '10px',
    //     padding: '5px',
    //     height: '10vh'
    // },
  
    bottom: {
        position: 'absolute',
        bottom: 100,
        width: '100%',
        maxWidth: 500,
        padding: theme.spacing.xs,
    },

  
    

    left: {
    
        paddingLeft: '60px',
        width: '70%',
      
    },
    top: {
        paddingTop: theme.spacing.sm,
        paddingBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
    },
    border: {    
        border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
    },
}));