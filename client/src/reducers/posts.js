import { FETCH_ALL,DELETE,LIKE,UPDATE,CREATE } from '../constants/actionTypes'; 

export default (posts =[],action) =>{
    switch(action.type){
        case UPDATE:
        case LIKE:   
            return posts.map((post)=> post._id === action.payload._id ? action.payload :  post);
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts,action.payload];
        case DELETE:
            return posts.filter((post) => post._id !== action.payload._id);     
        default:
            return posts;
    }}