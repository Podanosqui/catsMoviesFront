import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
import { useMediaQuery } from '@mui/material';
import logo from '../../assets/Logo.png';
import miranha from '../../assets/miranha.png';
import { useNavigate } from "react-router-dom";

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

export default function Login() {
    const isMediumScreen = useMediaQuery('(min-width: 900px)');
    const isSmallScreen = useMediaQuery('(max-width: 600px)');

    const navigate = useNavigate();

    return (
        <Stack
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100%',
                backgroundImage: backgroundImage,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Stack
                spacing={1.5}
                sx={{
                    width: isMediumScreen ? '35%' : isSmallScreen ? '90%' : '60%', // Ajustando o width para diferentes tamanhos de tela
                    height: '80%',
                    padding: '20px',
                    borderRadius: '20px',
                    justifyContent: 'center',

                    backgroundColor: 'rgba(50, 59, 63, 0.6)',
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                        <img src={logo} alt="" style={{ width: '50px' }} />
                    </Box>
                    <Typography variant="body1" sx={{ color: '#13C8B5', fontWeight: 'bold' }}>
                        E-mail
                    </Typography>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        placeholder='Email@exemplo.com'
                        InputProps={{
                            sx: textFieldStyles,
                        }}
                    />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="body1" sx={{ color: '#13C8B5', fontWeight: 'bold' }}>
                        Senha
                    </Typography>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        placeholder='digite sua senha'
                        InputProps={{
                            sx: textFieldStyles,
                        }}
                    />
                </Box>

                <Button
                    sx={{
                        color: '#13C8B5',
                        backgroundColor: "#2B364A",
                        padding: '10px',
                        textTransform: 'none',
                        fontSize: '18px',
                        '&:hover': {
                            backgroundColor: '#13C8B5',
                            color: '#2B364A'
                        }
                    }}
                    onClick={() => navigate('/home')}
                >
                    Entrar na conta
                </Button>
                <Button sx={{
                    color: '#13C8B5', fontWeight: 'bold', '&:hover': {
                        textDecoration: 'underline',
                    }
                }}
                    onClick={() => navigate('/esqueciSenha')}
                >Esqueceu a senha ?</Button>

                <Stack alignItems='center'>
                    <Typography sx={{ color: '#13C8B5', fontSize: '14px' }}>
                        Ainda não tem cadastro ?
                        <Link
                            sx={{
                                color: '#13C8B5',
                                cursor: 'pointer',
                                textDecoration: 'none',
                                marginLeft: "5px",
                                fontSize: "18px",
                                '&:hover': {
                                    textDecoration: 'underline'
                                }
                            }}
                            onClick={() => navigate('/cadastro')}
                        >
                            Clique Aqui!
                        </Link>
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
}
