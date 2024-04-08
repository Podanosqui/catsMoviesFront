import { Grid, Stack, TextField } from "@mui/material";
import Cards1 from "../../components/cards/Cards1";

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
}

export default function Inicio({ menuType, }: { menuType: number; }) {
    return (
        <>
            <Stack mt={2} mb={2}>
                <TextField variant="outlined"
                    margin="normal"
                    fullWidth
                    placeholder='Pesquisar...'
                    InputProps={{
                        sx: textFieldStyles,
                    }} />
            </Stack>
            <Grid container spacing={2}>
                {[...Array(12)].map((_, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                        <Cards1 menuType={menuType} />
                    </Grid>
                ))}
            </Grid>
        </>

    );
}
