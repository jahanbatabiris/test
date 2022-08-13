import { Button } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import SocketIOClient from 'socket.io-client';
import { io } from "socket.io-client";
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useState } from "react";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import FaceIcon from '@mui/icons-material/Face';

const useStyles = makeStyles({
  header: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    height:'200px',
    padding: '0 30px',
  },
  footer: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    height:'200px',
    padding: '0 30px',
    backgroundPosition: 'center center',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  middle:{
    height:'600px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    overflowY:'auto'
  },

  divroot:{
    backgroundPosition: 'center center',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  div:{
    width:'80%',
  },
  title:{
    textAlign:'center',
    color:'blue',
  },
  input:{
    width:'90%',
    border:'solid 1px gray',
    borderRadius:'20px',
    padding: '20px 30px',
    fontSize:'20px',
  },
  icon:{
    width:'10%',
    fontSize:'50px',
    color:'white'
  },
  avatar:{
    display:'inline-block',
    fontSize:'50px',
    color:'black'
  },
  msg:{
    fontSize:'20px',
    color:'black',
    display:'inline-block',
    alignItems:'center'
  },
  gridmsg:{
    marginTop:'40px',
    alignItems:'center',
   
    
  },
  gridmsg2:{
    marginTop:'40px',
    alignItems:'center',
    flexDirection:'row-reverse'
  }
});

const message =[
  {
    id:'',
    msg:'salam,khobi',
    sender:{
      name:'ali',
      gender:10,
    },
  },
  {
    id:'',
    msg:'salam,mamnon',
    sender:{
      name:'mohammad',
      gender:10,
    },
  },
  {
    id:'',
    msg:'chetori',
    sender:{
      name:'ali',
      gender:10,
    },
  },
  {
    id:'',
    msg:'khobam',
    sender:{
      name:'mohammad',
      gender:10,
    },
  },
  {
    id:'',
    msg:'ok',
    sender:{
      name:'zahra',
      gender:20,
    },
  },

]

function ChatRoom(props) {
  const classes = useStyles();

const [messages,setMessages] = useState("");

 const socket  = React.useRef(SocketIOClient.connect(""));
        // const socket = io();
        // socket.connect('https://api.lucretius.network/');
        // socket.on('connect', function () {
        //     console.log('connected');
        // });

  React.useEffect(()=>{
      socket.current.on("newMessage",(message)=>{
        console.log(message);
        setMessages(messages=>messages.concat(message))
      });

      socket.current.on("salam",function (data) {
        console.log(data);
        console.log(socket.id);
        // document.querySelector('#timer').innerHTML = data;
    });

  },[]);
  const location = useLocation();
  const submit = () => {
  
    let  name  = location.state;
    console.log(name)
   
}

const [newmessage,setNewmessage] = useState("");

const sendMessage =()=>{
  if(!newmessage)
  return;
  socket.current.emit("newmessage",{
    id:'',
    msg:newmessage,
    sender:{
      name:location.state.name,
      gender:location.state.gender,
    },
  });
  setNewmessage("");
}



  return (
    <div>
     <Button onClick={submit}>welcome to chatroom</Button> 
     <div className={classes.divroot}>
       <div className={classes.div}>
         <Grid className={classes.header}>
           <Typography  className={classes.title} variant='h2'>chatroom</Typography>
         </Grid>
         <Grid className={classes.middle}>
              <Grid>
                  {
                    message.map((message)=>{  

                       if(message.sender.name === location.state.name){
                                return(
                     
                      <Grid className={classes.gridmsg}>
                         {(() => {
                         if(message.sender.gender == 10){
                           return(
                             <SentimentSatisfiedAltIcon className={classes.avatar}/>
                           )
                         }
                         else if(message.sender.gender == 20)
                         {
                          return(
                            <FaceIcon className={classes.avatar}/>
                          )
                         }
                        })()}
                       
                        <div className={classes.msg}>
                          <Typography className={classes.msg}>
                             {message.msg}
                          </Typography>
                        </div>
                      </Grid>
                      )
                        }
                        else{
                          return(
                     
                            <Grid className={classes.gridmsg2}>
                               {(() => {
                               if(message.sender.gender == 10){
                                 return(
                                   <SentimentSatisfiedAltIcon className={classes.avatar}/>
                                 )
                               }
                               else if(message.sender.gender == 20)
                               {
                                return(
                                  <FaceIcon className={classes.avatar}/>
                                )
                               }
                              })()}
                             
                              <div className={classes.msg}>
                                <Typography className={classes.msg}>
                                   {message.msg}
                                </Typography>
                              </div>
                            </Grid>
                            )
                        }
                
                    })
                  }
              </Grid>
         </Grid>
         <Grid className={classes.footer}>
            <input type="text" className={classes.input} value={newmessage} onChange={e => setNewmessage(e.target.value)}/>
            <button onClick={sendMessage}>
                    <SendIcon className={classes.icon}/> 
            </button>
     
         </Grid>
       </div>
     </div>
    </div>
  );
}

export default ChatRoom;
