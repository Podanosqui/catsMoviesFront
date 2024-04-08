import { Button, Grid, Stack, TextField, Typography, useMediaQuery } from "@mui/material";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useNavigate } from "react-router-dom";


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

export default function MinhaConta() {
    const isSmallScreen = useMediaQuery('(max-width:600px)')
    const isMediumScreen = useMediaQuery('(max-width:768px)')
    const navigate = useNavigate();

    const handleVoltarClick = () => {
        navigate("/home");
    };

    return (
        <Stack sx={{ backgroundColor: '#2B364A', height: '100vh', width: '100%', overflow: "auto" }}>

            <Stack sx={{ display: isMediumScreen ? 'none' : 'block' }}>
                <Button onClick={handleVoltarClick} variant="contained" sx={{
                    color: 'white', width: '20px', position: 'absolute', left: '5%', top: '20px', background: '#13C8B5', '&:hover': {
                        backgroundColor: '#13C8B5', color: '#2B364A'
                    }
                }} ><NavigateBeforeIcon />
                </Button>
            </Stack>
            <Grid container direction="row" alignItems="center" sx={{ width: isSmallScreen ? '80%' : (isMediumScreen ? '70%' : '50%'), margin: 'auto' }}>
                <Stack sx={{ width: '100%', alignItems: 'center' }}>
                    <Typography variant="h4" sx={{ marginBottom: '20px', fontSize: isSmallScreen ? '20px' : '32px', color: '#13C8B5', fontWeight: 'bold' }}>Dados Pessoais</Typography>
                </Stack>

                <Grid container direction="column" sx={{ width: '100%', marginBottom: '20px', padding: '10px' }}>
                    <Grid item xs={12} sm={6} marginBottom='10px'>
                        <Typography variant="body1" color='#13C8B5' >Nome:</Typography>
                        <TextField variant="outlined" fullWidth placeholder="Digite seu nome"
                            InputProps={{
                                sx: textFieldStyles,
                            }} />
                    </Grid>

                    <Grid item xs={12} sm={6} marginBottom='10px'>
                        <Typography variant="body1" color='#13C8B5'>E-mail:</Typography>
                        <TextField variant="outlined" fullWidth placeholder="Digite seu E-mail"
                            InputProps={{
                                sx: textFieldStyles,
                            }} />
                    </Grid>

                    <Grid item xs={12} sm={6} marginBottom='10px'>
                        <Typography variant="body1" color='#13C8B5'>Senha:</Typography>
                        <TextField variant="outlined" fullWidth type="password" placeholder="Digite sua senha"
                            InputProps={{
                                sx: textFieldStyles,
                            }} />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography variant="body1" color='#13C8B5'>Nova Senha:</Typography>
                        <TextField variant="outlined" fullWidth type="password" placeholder="Digite sua senha novamente"
                            InputProps={{
                                sx: textFieldStyles,
                            }} />
                    </Grid>
                </Grid>
                <Stack width='100%' alignItems='flex-end' sx={{ p: '10px' }}>
                    <Button variant="contained" sx={{
                        padding: '10px', background: '#445066', width: '20%', color: '#13C8B5', '&:hover': {
                            backgroundColor: '#13C8B5', color: '#2B364A'
                        }
                    }}>
                        Salvar
                    </Button>

                </Stack>
            </Grid>
        </Stack>
    )
}