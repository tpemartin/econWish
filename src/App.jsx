import * as React from 'react';
import './App.css'
import dataJson from "./data.json"
import { Gallery, GalleryItem } from './components/Layout3';
import appConfig from "./appConfig.json"
import SearchAppBar from './components/SearchAppBar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card2 from './components/Card2';
import { EmailShareButton, FacebookIcon, FacebookShareButton, LineIcon, LineShareButton, LinkedinShareButton } from 'react-share';
import { Stack } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import { MailOutlineOutlined } from '@mui/icons-material';

export default function App() {

    const [data, setData] = useState(null)


    useEffect(() => {
        // axios.get is an asyncronous function
        // you use .then chain with input function that takes
        //  * previous chain's return as input
        axios.get(appConfig.entryUrl)
            .then((response) => {
                console.log(response)
                if (response.status === 200) {
                    setData(response.data)
                }
            })

    }, [appConfig])

    // data null means false
    // data is a state variable. this makes appcontent a state-dependent 
    // component
    let appcontent = data ?
        <AppContent users={convertUsersToArrayOfObject(data)} /> :
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

        function copyLink() {
            url = appConfig.appUrl + '#' + e.id
            navigator.clipboard.writeText(url)
            alert("已複製連結")
        }

        return (
            <GalleryItem key={i}>
                <Card2 user={e} />
                <ShareBar shareLink={appConfig.appUrl + '#' + e.id} title={e.name + ' - ' + e.grade} />
            </GalleryItem>
        )
    })

    useEffect(() => {
        scrollIntoViewWithHashId()
    }, [])
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
function ShareBar({shareLink, title }){
    return(
        <div className="share">
        <Stack direction="row" spacing={2} sx={{ justifyContent: "center", marginTop: "10px" }}>
            <LineShareButton url={shareLink} title={title}>
                <LineIcon size={32} round={true} />
            </LineShareButton>
            <FacebookShareButton url={shareLink} quote={title}>
                <FacebookIcon size={32} round={true} sx={{ fill: "#787878" }} />
            </FacebookShareButton>
            <EmailShareButton url={shareLink} subject={title}>
                <Stack sx={{
                    cursor: "pointer",
                    marginTop: "-7px",
                    justifyContent: "center", width: "32px", height: "32px", backgroundColor: "#1a1a1a", borderRadius: "32px"
                }}>

                    <MailOutlineOutlined sx={{ fill: "white", margin: "auto" }} />
                </Stack>
            </EmailShareButton>

            <Stack
                sx={{
                    cursor: "pointer",
                    justifyContent: "center", width: "32px", height: "32px", backgroundColor: "#1a1a1a", borderRadius: "32px"
                }}>
                <LinkIcon sx={{ fill: "white", margin: "auto" }} onClick={()=>{
                    navigator.clipboard.writeText(shareLink)
                    alert("已複製連結")
                }} />
            </Stack>


            {/* <Like href={appConfig.appUrl + '#' + e.id} colorScheme="dark"/> */}

        </Stack>
    </div>

    )
}
function scrollIntoViewWithHashId() {
    const hash = window.location.hash;
    if (hash) {
        const id = hash.slice(1);
        //console.log(id)
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView();
        }
    }
}
