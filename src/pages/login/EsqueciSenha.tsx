import { Box, Button, Stack, TextField, Typography, useMediaQuery } from "@mui/material";
import miranha from '../../assets/miranha.png';
import { useNavigate } from "react-router-dom";

const backgroundImage = `url(${miranha})`;

const textFieldStyles = {
    color: 'white',
    borderColor: 'red',
    borderRadius: '15px',
    backgroundColor: 'rgba(50, 59, 63)',
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'black',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#13C8B5',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#13C8B5',
    },
};


export default function EsqueciSenha() {
    const isMediumScreen = useMediaQuery('(min-width: 900px)');
    const isSmallScreen = useMediaQuery('(max-width: 600px)');
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundImage: backgroundImage,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Stack direction='column' sx={{
                backgroundColor: 'rgba(50, 59, 63, 0.6)',
                width: isMediumScreen ? '40%' : (isSmallScreen ? '90%' : '60%'), // Alteração do width
                height: '300px',
                p: '10px'
            }}>
                <Typography variant="h5" fontWeight='bold' borderBottom='1px solid gray' sx={{ marginBottom: '10px', color: '#13C8B5', paddingBottom: '5px' }}>Recupere sua conta</Typography>
                <Typography variant="body1" sx={{ marginBottom: '10px', color: '#13C8B5', fontSize: '20px' }}>Insira um e-mail válido para recuperar sua conta</Typography>
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    placeholder='Digite seu e-mail'
                    InputProps={{
                        sx: textFieldStyles,
                    }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                    <Button sx={{
                        color: '#13C8B5', width: '120px', backgroundColor: '#2B364A',
                        '&:hover': {
                            backgroundColor: '#13C8B5',
                            color: "#2B364A"
                        }
                    }}
                        onClick={() => navigate('/')}
                    >Voltar</Button>
                    <Button sx={{
                        color: '#13C8B5', width: '120px', backgroundColor: '#2B364A', marginLeft: '10px',
                        '&:hover': {
                            backgroundColor: '#13C8B5',
                            color: "#2B364A"
                        }
                    }}
                        onClick={() => navigate('/redefinirSenha')}
                    >Confirmar</Button>
                </Box>
            </Stack>
        </Box>
    )
}
