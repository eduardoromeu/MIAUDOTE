import react, { useState } from "react";
import { FormControl, Typography, Button, Stack, Link, Box } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import IconInput from "../IconInput/IconInput";
import { UserClass } from "../../UserClass";

export default function LoginForm() {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    
    function Logar() {
        const user = JSON.parse(localStorage.getItem("user"));
        console.log(user);
        console.log(`login: ${login}, password: ${password}`);

        if(!user){
            alert("Usuário ou senha incorretos, tente novamente!");
            return;
        }

        if((login === user.name || login === user.email || login === user.phone) && user.password === password){
            user.logado = true;
            UserClass.SaveUser(user);
            window.location.href = "/MIAUDOTE/";
            console.log(user);
        } else {
            alert("Usuário ou senha incorretos, tente novamente!");
        }
    }

    return (
        <FormControl as={Stack} spacing={2}>
            <Typography id="modal-modal-title" variant="h5" component="h2">
                Entrar
            </Typography>
            <IconInput
                label="Usuário"
                placeholder="Email ou telefone"
                required
                onChange={e => { setLogin(e.target.value) }}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: "flex-end" }}>
                <IconInput
                    label="Senha"
                    placeholder="Insira sua senha"
                    type="password"
                    icon={<LockIcon />}
                    required
                    onChange={e => { setPassword(e.target.value) }}
                />
                <Link href="#" underline="hover" variant="subtitle2">Esqueci minha senha</Link>
            </Box>
            <Button variant="contained" onClick={Logar}>Continuar</Button>
            <Button component="a" href="/MIAUDOTE/cadastro-usuario" variant="outlined">Não sou cadastrado</Button>
        </FormControl>
    )
}