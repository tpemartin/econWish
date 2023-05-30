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

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import RecipeReviewCard from './components/Card2';
import AppBar from './components/SearchAppBar';
import SearchAppBar from './components/SearchAppBar';


export default function App() {

    // console.log(dataJson)
    const users = convertUsersToArrayOfObject(dataJson)
    window.users = users
    window.autocompleteOptions = []
    users.forEach(e=>
        {
            window.autocompleteOptions.push(
                {
                    label: e.name+' - '+e.grade,
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
        <div className="App">
            <div className="main2">
                <Gallery>
                    <>
                    {cards}
                    <div className="endCard"/>
                    </>
                </Gallery>
            </div>
            {/* <SearchAppBar autocompleteOptions={window.autocompleteOptions}/> */}

            <div className="footer2">
                <SearchAppBar autocompleteOptions={window.autocompleteOptions}/>
            </div>

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
