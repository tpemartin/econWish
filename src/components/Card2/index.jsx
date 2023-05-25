import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./index.css"
import "./wish.css"
import PostedStamp from "../PostedStamp"
import Stack from '@mui/material/Stack';
import { Box, Button, Container } from '@mui/material';
import Image from "mui-image"
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

export default function Card2({ user }) {

  const { name, grade, imgSrc, wish } = user

  var [showFront, setShowFront] = useState(true)

  function handleClipWish(){
    setShowFront(false)
  }
  function handleCloseBackContent(){
    setShowFront(true)
  }

  var cardContent = showFront ?
    <ContentPostalFront imgSrc={imgSrc} sealVariant={5} name={name} grade={grade} wish={wish} onClick={handleClipWish} /> :
    <ContentPostalBack imgSrc={imgSrc} wish={wish} onClick={handleCloseBackContent} />

  return (
    <Card sx={{ maxWidth: 345, margin: "auto", height: 587 }}>
      {cardContent}
    </Card>
  );
}

function Sender({ name, grade }) {
  return (
    <div className="sender">
      <div className="label text-shadow">Sender:</div>
      <div className="sender-info">
        <div className="sender-name">
          <div className="sender-name-text text-shadow">{name}</div>
        </div>
        <div className="sender-grade">
          <div className="sender-grade-text text-shadow">{grade}</div>
        </div>
      </div>
    </div>

  )
}

function Wish({ wish }) {
  return (

    <div className="wish">
      <div className="wish-text">
        <Button color='secondary'>
          <q>
            <Typography>{wish}</Typography>
          </q>
          <q><span style={{ padding: "0 10px" }}>{wish}</span></q>
        </Button>
      </div>
    </div>

  )
}

function ContentPostalFront({ imgSrc, sealVariant, name, grade, wish, onClick }) {

  return (
    <CardContent>
      <Stack spacing={0}>
        <Box sx={{
          height: 350
        }}>
          <PostedStamp imgSrc={imgSrc} sealVariant={sealVariant} />
        </Box>
        <Box mt={5} pl={3}>
          <Sender name={name} grade={grade} />
        </Box>

        <Box mt={3}>
          <Button color='primary' onClick={onClick}>
            <Typography noWrap sx={{ width: "300px" }}>{wish}</Typography>
          </Button>
        </Box>

      </Stack>
    </CardContent>
  )
}
function ContentPostalBack({ imgSrc, wish, onClick }) {
  return (

    <div style={{ height: "100%", position: "relative" }}>

      <Image
        duration={0}
        src={imgSrc}
        fit="cover"
        style={{ opacity: 0.3 }}
      />
      <div style={{ position: "absolute", top: "0", height: "100%" }}>
        <Stack sx={{ height: "100%", justifyContent: "center" }}>
          <Container>
            <Box>
              <Typography>
                {wish}
              </Typography>
            </Box>
          </Container>
        </Stack>
      </div>
      <IconButton
        aria-label="close"
        sx={{
          position: 'absolute',
          color: (theme) => theme.palette.grey[500],
          right: 8,
          top: 8
        }}
        onClick={onClick}
      >
        <CloseIcon />
      </IconButton>
    </div>


  )
}