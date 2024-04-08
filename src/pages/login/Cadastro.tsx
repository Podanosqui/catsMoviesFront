import { Box, Button, Grid, Stack, TextField, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

import miranha from '../../assets/miranha.png'
const backgroundImage = `url(${miranha})`;

const textFieldStyles = {
    color: 'white',
    borderColor: 'red',
    borderRadius: '15px',
    backgroundColor: 'rgba(50, 59, 63)',
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'black', // Ajustando a cor da borda quando não está em foco
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#13C8B5', // Ajustando a cor da borda ao passar o mouse sobre o TextField
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#13C8B5', // Ajustando a cor da borda quando o TextField está em foco
    },
};

export default function Cadastro() {
    const isLargeScreen = useMediaQuery('(min-width: 900px)');
    const isSmallScreen = useMediaQuery('(max-width: 600px)');
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                height: '100vh',
                width: '100%',
                backgroundImage: backgroundImage,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: isSmallScreen ? '95%' : '60%', // Ajuste da altura
                    width: isLargeScreen ? '50%' : '75%', // Ajuste da largura
                    padding: '20px',
                    borderRadius: '20px',
                    backgroundColor: 'rgba(50, 59, 63, 0.6)',
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Stack direction='row' justifyContent='space-between' sx={{ marginBottom: '10px' }}>
                        <Typography variant="h5" gutterBottom color='white' fontWeight='bold' sx={{ color: '#13C8B5' }}>
                            Dados Pessoais
                        </Typography>
                    </Stack>

                    <Grid container spacing={1.3}>
                        <Grid item xs={12} sm={6}>
                            <Box sx={{ width: '100%', marginBottom: '15px' }}>
                                <Typography variant="body1" style={{ fontWeight: '600', color: '#13C8B5' }}>
                                    Nome completo
                                </Typography>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    placeholder='Nome completo'
                                    InputProps={{
                                        sx: textFieldStyles,
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box sx={{ width: '100%', marginBottom: '15px' }}>
                                <Typography variant="body1" style={{ color: '#13C8B5', fontWeight: 'bold' }}>
                                    E-mail
                                </Typography>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    placeholder='exemplo@gmail.com'
                                    InputProps={{
                                        sx: textFieldStyles,
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box sx={{ width: '100%', marginBottom: '15px' }}>
                                <Typography variant="body1" style={{ color: '#13C8B5', fontWeight: 'bold' }}>
                                    Senha
                                </Typography>
                                <TextField
                                    variant="outlined"
                                    type="password"
                                    fullWidth
                                    placeholder='Digite sua senha'
                                    InputProps={{
                                        sx: textFieldStyles,
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box sx={{ width: '100%', marginBottom: '15px' }}>
                                <Typography variant="body1" style={{ color: '#13C8B5', fontWeight: 'bold' }}>
                                    Confirmar senha
                                </Typography>
                                <TextField
                                    variant="outlined"
                                    type="password"
                                    fullWidth
                                    placeholder='Confirme sua senha'
                                    InputProps={{
                                        sx: textFieldStyles,
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>

                    <Button
                        variant="contained"
                        sx={{
                            color: '#13C8B5',
                            backgroundColor: "#2B364A",
                            padding: '10px',
                            width: '150px',
                            '&:hover': {
                                backgroundColor: '#13C8B5',
                                color: "#2B364A"
                            }
                        }}
                        onClick={() => navigate("/")}
                    >
                        Cadastrar
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
