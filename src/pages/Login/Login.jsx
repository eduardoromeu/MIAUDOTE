import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Stack, TextField, Button, Typography, Box } from "@mui/material";

export default function Login() {
    // 1. Hooks para gerenciar o estado e a navegação
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // 2. Função que lida com a submissão do formulário
    const handleLogin = (e) => {
        e.preventDefault(); // Impede o recarregamento da página

        // Pega os dados do usuário salvos no cadastro
        const storedUserJSON = localStorage.getItem("user");

        // Verifica se existe algum usuário cadastrado
        if (!storedUserJSON) {
            setError("Nenhum usuário cadastrado. Por favor, realize o cadastro primeiro.");
            return;
        }

        const storedUser = JSON.parse(storedUserJSON);

        // 3. Valida as credenciais
        if (storedUser.email === email && storedUser.password === password) {
            // Sucesso no login!
            setError("");
            
            // Atualiza o status de "logado" do usuário
            storedUser.logado = true;
            localStorage.setItem("user", JSON.stringify(storedUser));
            
            // 4. Redireciona para a página de perfil
            navigate('/MIAUDOTE/profile'); 
        } else {
            // Falha no login
            setError("Email ou senha inválidos. Tente novamente.");
        }
    };

    return (
        <Container maxWidth="xs">
            <Typography variant="h6" component="h2" sx={{ mb: 2 }}>LOGIN</Typography>
            <Box component="form" onSubmit={handleLogin}>
                <Stack spacing={2}>
                    <TextField
                        label="Email"
                        type="email"
                        required
                        fullWidth
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Senha"
                        type="password"
                        required
                        fullWidth
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    
                    {/* Exibe a mensagem de erro, se houver */}
                    {error && (
                        <Typography color="error" variant="body2" textAlign="center">
                            {error}
                        </Typography>
                    )}

                    <Button variant="contained" type="submit" fullWidth>
                        Entrar
                    </Button>
                </Stack>
            </Box>
        </Container>
    );
}