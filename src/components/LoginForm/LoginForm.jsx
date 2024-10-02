import react, { useContext, useState } from "react";
import { FormControl, Typography, Button, Stack, Link, Box } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import IconInput from "../IconInput/IconInput";
import { userContext } from "../../UserProvider";

export default function LoginForm() {

    const {user, setUser} = useContext(userContext);
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    
    console.log(user);

    function Logar() {
        console.log(`login: ${login}, password: ${password}`);
        if((login === user.name || login === user.email) && user.password === password){
            user.logado = true;
            setUser(user);
            console.log(user);
        } else {
            alert("Usuário ou senha incorretos, tente novamente!");
            
            console.log("credenciais incorretas");
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
                onChange={e => { setLogin(e.target.value) }}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: "flex-end" }}>
                <IconInput
                    label="Senha"
                    placeholder="Insira sua senha"
                    type="password"
                    icon={<LockIcon />}
                    onChange={e => { setPassword(e.target.value) }}
                />
                <Link href="#" underline="hover" variant="subtitle2">Esqueci minha senha</Link>
            </Box>
            <Button variant="contained" onClick={Logar}>Continuar</Button>
            <Button component="a" href="/cadastro-usuario" variant="outlined">Não sou cadastrado</Button>
        </FormControl>
    )
}