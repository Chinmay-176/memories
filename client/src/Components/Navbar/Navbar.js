import React,{useState,useEffect} from 'react'
import { AppBar,Avatar,Toolbar,Typography ,Button} from '@material-ui/core';
import {Link,useHistory} from 'react-router-dom';
import useStyles from './style.js';
import memories from '../../images/memories.png'
import {useDispatch} from 'react-redux'
const Navbar = () => {
    const classes =useStyles();
    const [user,setUser] =useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch=useDispatch();
    const history=useHistory();
    const logout=()=>{
        dispatch({type:'LOG_OUT'})
        history.push('/');
        setUser(null);
    }

    console.log(user);
  return (
    <div>
        <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
                <Typography component ={Link} to='/' className={classes.heading}variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60"/>
             
        </div>
        <Toolbar className={classes.Toolbar}>
            {user ?(
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt ={user.result.name} src ={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                    <Typography classeName={classes.userName} variant="h6">{user.result.name}</Typography>
                    <Button variant='contained' className={classes.logout} color='secondary'>Logout</Button>
                </div>
            ) : 
            (   <Button component ={Link} to='/auth' variant='contained' color='primary'>Signin</Button>

            )}
        </Toolbar>

        </AppBar>

    </div>
  )
} 

export default Navbar

