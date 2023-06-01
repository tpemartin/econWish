import * as React from 'react';
import { Main } from "./components/Layout2";
import { NavbarCustom, NavbarItem } from "./components/NavbarCustom";
import './App.css'
import PlayIcon from '@mui/icons-material/PlayArrow';
import NextIcon from '@mui/icons-material/FastForward';
import PreviousIcon from '@mui/icons-material/FastRewind';
import Card2 from './components/Card2';
import { IconButton, autocompleteClasses } from '@mui/material';
import dataJson from "./data.json"
import { Gallery, GalleryItem } from './components/Layout3';
import appConfig from "./appConfig.json"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import RecipeReviewCard from './components/Card2';
import AppBar from './components/SearchAppBar';
import SearchAppBar from './components/SearchAppBar';
import axios from 'axios';
import { useState } from 'react';


export default function App() {

    const [data, setData] = useState(null)
    
    // axios.get is an asyncronous function
    // you use .then chain with input function that takes
    //  * previous chain's return as input
    axios.get(appConfig.entryUrl)
        .then((response) => {
            console.log(response)
            if(response.status===200){
                setData(response.data)
            }
        })
    
    // data null means false
    // data is a state variable. this makes appcontent a state-dependent 
    // component
    let appcontent = data ? 
        <AppContent users={convertUsersToArrayOfObject(data)}/>:
        <div>Loading...</div>

    return (
        <div className="App">
          {appcontent}
        </div>
    )
}

function convertUsersToArrayOfObject(users) {
    const pos = getUserPositionIndex(users[0])

    const usersArrayOfObject = users.map(
        (user) => {
            return getUser(user, pos)
        }
    )
    usersArrayOfObject.shift()
    return usersArrayOfObject
}

function getUser(targetUser, pos) {
    return (
        {
            name: targetUser[pos.name],
            grade: targetUser[pos.grade],
            imgSrc: targetUser[pos.imgSrc],
            wish: targetUser[pos.wish],
            id: targetUser[pos.id]
        }
    )
}
function getUserPositionIndex(user0) {
    var pos = Object()
    user0.map(
        (e, i) => {
            pos[e] = i
        }
    )
    pos.imgSrc = pos.ThumbnailLink
    pos.name = pos.Name
    pos.grade = pos.Grade
    pos.wish = pos.Wish
    return pos
}

function AppContent({ users }) {
    console.log(users)
    // window.users means there is a global variable named users
    window.users = users
    window.autocompleteOptions = [] // autocompleteOptions is a global variable
    users.forEach(e => {
        window.autocompleteOptions.push(
            {
                label: e.name + ' - ' + e.grade,
                id: e.id
            }
        )
    })
    const cards = users.map((e, i) => {
        return (
            <GalleryItem key={i}>
                <Card2 user={e} />
                {/* <Item sx={{height: "300px"}}/> */}
                {/* <Card user={e} style={style}/>   */}
            </GalleryItem>
        )
    })
    return (
        <>
            <div className="main2">
                <Gallery>
                    <>
                        {cards}
                        <div className="endCard" />
                    </>
                </Gallery>
            </div>

            <div className="footer2">
                <SearchAppBar autocompleteOptions={window.autocompleteOptions} />
            </div>
        </>

    )

}

