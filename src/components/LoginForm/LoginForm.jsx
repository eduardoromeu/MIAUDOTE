import react, { Fragment } from "react";
import { FormControl, Typography, Button, Stack, Link, Box } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import IconInput from "../IconInput/IconInput";

export default function LoginForm(){

    return (
        <FormControl as={Stack} spacing={2}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Entrar
          </Typography>
          <IconInput label="Usuário" placeholder="Email ou telefone" />
          <Box sx={{display:'flex', flexDirection:'column', alignItems:"flex-end"}}>
            <IconInput label="Senha" placeholder="Insira sua senha" icon={<LockIcon />} />
            <Link href="#" underline="hover" variant="subtitle2">Esqueci minha senha</Link>
          </Box>
          <Button variant="contained">Continuar</Button>
          <Button component="a" href="/cadastro-usuario" variant="outlined">Não sou cadastrado</Button>
        </FormControl>
    )
}