import { Grid, Typography } from '@mui/material';
import React from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  div:{
    backgroundPosition: 'center center',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  title:{
    textAlign:'center',
    color:'blue'
  },
  input:{
    width:'300px',
  },
  select:{
    width:'300px',
  },
  btn:{
    width:'300px',
  }
});

function LoginPage(props) {
  const classes = useStyles();

 const [name, setName] = useState("");
 const [gender, setGender] = useState("");
 const navigate = useNavigate();

 const validation = () =>{
   if(!name)
     return "please fiil the box1";
   else if(!gender)
     return "please fill the box2";
   return null;
 }

 const submit = () =>{
    // console.log(name,gender);
    const error = validation({name,gender});
    if(error)
    return alert(error);

     navigate('/chatroom',{state:{
      name,
      gender,
    }});
    
 }

 

  return (
    <div>
      <Typography variant='h2' className={classes.title}>
        Title
      </Typography>
      <div className={classes.div}>
        <div>
          <Grid>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" className={classes.input} value={name} onChange={e=>setName(e.target.value)}/>
          </Grid>
          <Grid>
              <FormControl className={classes.select}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  value={gender}
                  onChange={e=>setGender(e.target.value)}
                >
                  <MenuItem value={10}>man</MenuItem>
                  <MenuItem value={20}>women</MenuItem>

                </Select>
              </FormControl>
          </Grid>
          <Grid>
          {/* <Link to={{
      pathname: '/chatroom',
      state: {
        name,
        gender,
      }
    }} >Learn More</Link> */}
              <Button variant="contained" className={classes.btn} onClick={submit}>Contained</Button>
        
    
          </Grid>
      </div>
      </div>
    </div>
  );
}

export default LoginPage;
