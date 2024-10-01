import { Fragment } from "react";
import FormPropsTextFields from "../../components/Formulario/formulario";
import ColorButtons from "../../components/Button/button";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Stack } from "@mui/material";

export default function Cadastro() {

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
                <ColorButtons />

            </Stack>
        </Fragment>
    );
}