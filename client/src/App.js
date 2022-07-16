import React from "react";
import {Container} from "@material-ui/core";
import { BrowserRouter,Switch,Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar.js";
import Home from "./Components/Home/Home.js";
import Auth from "./Components/Auth/Auth.js";

const App= () =>(
    <BrowserRouter>    
    <Container maxidth="lg">
        <Navbar/>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/auth' exact component={Auth}/>    
        </Switch> 
    </Container>
    </BrowserRouter>
);

export default App;