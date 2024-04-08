import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Logo from '../../assets/Logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Button, Drawer, IconButton, Stack, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Inicio from '../../pages/inicio/Inicio';
import CarrinhoDeCompras from '../../pages/carrinho/CarrinhoDeCompras'
import MinhaConta from '../../pages/home/MinhaConta';
import ListaDeDesejos from '../../pages/lista/ListaDeDesejos';
import HistoricoDeCompras from '../../pages/historico/HistoricoDeCompras';
import HistoryIcon from '@mui/icons-material/History';


type Anchor = 'top' | 'left' | 'bottom' | 'right';
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Stack
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </Stack>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


export default function Header() {

    const navigate = useNavigate();

    const [value, setValue] = React.useState(0);


    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    const [state, setState] = React.useState({
        right: false,
    });

    const isTablet = useMediaQuery('(min-width:768px)');

    const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider', background: '#7375A5', height: '100vh' }}
            >
                <Tab sx={{
                    textTransform: 'none', color: '#13C8B5', '&:hover': {
                        color: '#6CF3D5'
                    }
                }} label="Home" {...a11yProps(0)} />
                <Tab sx={{
                    textTransform: 'none', color: '#13C8B5', '&:hover': {
                        color: '#6CF3D5'
                    }
                }} label="Séries" {...a11yProps(1)} />
                <Tab sx={{
                    textTransform: 'none', color: '#13C8B5', '&:hover': {
                        color: '#6CF3D5'
                    }
                }} label="Filmes" {...a11yProps(2)} />
                <Tab sx={{
                    textTransform: 'none', color: '#13C8B5', '&:hover': {
                        color: '#6CF3D5'
                    }
                }} label="Minha conta" {...a11yProps(3)} />
                <Tab sx={{
                    textTransform: 'none', color: '#13C8B5', '&:hover': {
                        color: '#6CF3D5'
                    }
                }} label="Carrinho  de Compras" {...a11yProps(4)} />
                <Tab sx={{
                    textTransform: 'none', color: '#13C8B5', '&:hover': {
                        color: '#6CF3D5'
                    }
                }} label="Lista de Desejos" {...a11yProps(5)} />
                <Tab sx={{
                    textTransform: 'none', color: '#13C8B5', '&:hover': {
                        color: '#6CF3D5'
                    }
                }} label="Historico de Compras" {...a11yProps(6)} />

            </Tabs>
        </Box>

    );

    return (
        <Stack sx={{ height: '100vh' }}>


            <Box sx={{ width: '100%', py: '1rem' }}>


                <Stack direction='row' justifyContent='space-between'>
                    <Box width='10%'><img src={Logo} alt="Logo" width='40px' height='40px' /></Box>
                    {isTablet &&
                        <>

                            <Stack>
                                <Tabs value={value} onChange={handleChange} >
                                    <Tab sx={{
                                        textTransform: 'none', color: '#13C8B5',
                                        '&:hover': {
                                            color: '#13C8B5', // Cor alterada ao passar o mouse sobre o texto do tab
                                        },
                                    }}
                                        label='Home'
                                        {...a11yProps(0)}
                                    />
                                    <Tab sx={{
                                        textTransform: 'none', color: '#13C8B5', '&:hover': {
                                            color: '#6CF3D5'
                                        }
                                    }} label="Séries" {...a11yProps(1)} />
                                    <Tab sx={{
                                        textTransform: 'none', color: '#13C8B5', '&:hover': {
                                            color: '#6CF3D5'
                                        }
                                    }} label="Filmes" {...a11yProps(2)} />

                                </Tabs>
                            </Stack>
                            <Stack direction='row' justifyContent='space-around'>
                                <IconButton onClick={() => navigate("/minhaConta")} sx={{ mx: 0.5, color: '#13C8B5' }}><AccountCircleIcon /></IconButton>
                                <IconButton onClick={() => navigate("/carrinhoDeCompras")} sx={{ mx: 0.5, color: '#13C8B5' }}><LocalGroceryStoreIcon /></IconButton>
                                <IconButton onClick={() => navigate("/listaDeDesejos")} sx={{ mx: 0.5, color: '#13C8B5' }}><FeaturedPlayListIcon /></IconButton>
                                <IconButton onClick={() => navigate("/historicoDeCompras")} sx={{ mx: 0.5, color: '#13C8B5' }}><HistoryIcon /></IconButton>
                            </Stack>
                        </>
                    }


                    {!isTablet &&
                        <>
                            <Box>
                                {(['right'] as const).map((anchor) => (
                                    <React.Fragment key={anchor}>
                                        <Button onClick={toggleDrawer(anchor, true)}><MenuIcon sx={{ color: '#13C8B5' }} /></Button>
                                        <Drawer
                                            anchor={anchor}
                                            open={state[anchor]}
                                            onClose={toggleDrawer(anchor, false)}
                                        >
                                            {list(anchor)}
                                        </Drawer>
                                    </React.Fragment>
                                ))}
                            </Box>
                        </>
                    }

                </Stack>


                <Stack >
                    <CustomTabPanel value={value} index={0}>
                        <Inicio menuType={0} />
                    </CustomTabPanel >
                    <CustomTabPanel value={value} index={1}>
                        <Inicio menuType={1} />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        <Inicio menuType={2} />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={3}>
                        <MinhaConta />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={4}>
                        <CarrinhoDeCompras />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={5}>
                        <ListaDeDesejos />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={6}>
                        <HistoricoDeCompras />
                    </CustomTabPanel>
                </Stack>

            </Box>
        </Stack>

    );
}
