import { Fragment } from "react";
import FormPropsTextFields from "../../components/Formulario/formulario";
import ColorButtons from "../../components/Button/button";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Stack } from "@mui/material";
import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Cadastro() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Fragment>
            <h1>CADASTRO DE USUÁRIO</h1>
            <Stack
                component="form"
                sx={{ display: "flex", alignItems: "center", '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >

                <TextField

                    id="outlined"
                    label="Nome"
                    defaultValue=""
                /> <br></br>

                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                /> <br></br>

                <TextField
                    id="outlined-number"
                    label="Numero"
                    type="number"
                /> <br></br>

                <TextField
                    id="outlined-email"
                    label="Email"
                    type="mail"
                />

            </Stack>
            <div>
                <Button onClick={handleOpen}variant="contained">Confirmar</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Parabens!
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Seu cadastro foi realizado com sucesso!
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </Fragment>
    );
}