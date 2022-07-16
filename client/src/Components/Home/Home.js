import React,{useState,useEffect} from "react";
import { useDispatch } from "react-redux";
import {Container,Grid,Grow} from "@material-ui/core";
import {getPosts} from '../../actions/posts.js'
import Posts from "../Posts/Posts"
import Forms from "../Forms/Forms"
import useStyles from '../../styles';
const Home = () => {
    const [ currentId, setCurrentId] =useState(null); 
    const classes =useStyles();
    const dispatch =useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    },[currentId,dispatch]);
  return (
    <Grow in>
    <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Forms currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
        </Grid>
    </Container>
    </Grow>
  )
}

export default Home
