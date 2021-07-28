import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import TopNav from "./components/Nav";
import ipadData from "./data/ipadData";
import iphoneData from "./data/iphoneData";
import watchData from "./data/watchData";
import tvData from "./data/tvData";
import musicData from "./data/musicData";
import SubNav from "./components/SubNav";
import macData from "./data/macData";
import style from "./data/style";
import * as icons from "react-icons";

const App = () => {
    return (
        <div>
            <TopNav />
            <Switch location={window.location}>
                <Route exact path="/" component={Home} />
                <Route path="/mac">
                    <SubNav style={style.macStyle} data={macData} />
                </Route>
                <Route path="/ipad">
                    <SubNav style={style.ipadStyle} data={ipadData} />
                </Route>
                <Route path="/iphone">
                    <SubNav style={style.iphoneStyle} data={iphoneData} />
                </Route>
                <Route path="/watch">
                    <SubNav style={style.watchStyle} data={watchData} />
                </Route>
                <Route path="/tv">
                    <SubNav style={style.tvStyle} data={tvData} />
                </Route>
                <Route path="/music">
                    <SubNav style={style.musicStyle} data={musicData} />
                </Route>
            </Switch>
        </div>
    );
};

export default App;
