import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AbuotUs from '../AboutUs';
import SendIcon from '@mui/icons-material/Send';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { IconButton, Stack } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "70vw",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    color: "black",
    p: 4,
};

export function AboutUsModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Stack>
                <IconButton
                    onClick={handleOpen}
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                // sx={{ mr: 2 }}
                >
                    <InfoOutlinedIcon />
                </IconButton>
                <Typography>
                    設計團隊
                </Typography>
            </Stack>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <AbuotUs />
                </Box>
            </Modal>
        </>
    );
}

export function SendPostCardModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Stack sx={{ justifyContent: "center" }} mr={3}>

                <IconButton
                    onClick={handleOpen}
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                // sx={{ mr: 2 }}
                >
                    <SendIcon />
                </IconButton>
                <Typography>
                    寄明信片
                </Typography>

            </Stack>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography>請填寫以下連結表單，送出後即生成一張明信片。</Typography>
                    <Typography>每個人只能送出一張明信片，若送出多次則只保留最後一次送出之明信片。</Typography>
                </Box>
            </Modal>
        </>
    );
}