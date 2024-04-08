import { useState } from 'react';
import { Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, IconButton, Stack, Modal, Box, useMediaQuery } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import miranha from '../../assets/miranha.png'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useNavigate } from 'react-router-dom';


interface Item {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const initialItems: Item[] = [
  {
    id: 1,
    image: miranha,
    name: "Filme 1",
    price: 29.99,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam maxime quam velit at, in, aliquam quidem porro veniam quod ipsum, ipsa similique cumque! Labore fugit delectus eius rem totam'
  },
  {
    id: 2,
    image: miranha,

    name: "Filme 2",
    price: 59.99,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam maxime quam velit at, in, aliquam quidem porro veniam quod ipsum, ipsa similique cumque! Labore fugit delectus eius rem totam"
  },
  {
    id: 3,
    image: miranha,
    name: "Filme 3",
    price: 89.99,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam maxime quam velit at, in, aliquam quidem porro veniam quod ipsum, ipsa similique cumque! Labore fugit delectus eius rem totam"
  }, {
    id: 4,
    image: miranha,
    name: "Filme 4",
    price: 89.99,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam maxime quam velit at, in, aliquam quidem porro veniam quod ipsum, ipsa similique cumque! Labore fugit delectus eius rem totam"
  },
  {
    id: 5,
    image: miranha,
    name: "Filme 5",
    price: 29.99,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam maxime quam velit at, in, aliquam quidem porro veniam quod ipsum, ipsa similique cumque! Labore fugit delectus eius rem totam'
  },
  {
    id: 6,
    image: miranha,
    name: "Filme 6",
    price: 59.99,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam maxime quam velit at, in, aliquam quidem porro veniam quod ipsum, ipsa similique cumque! Labore fugit delectus eius rem totam"
  },
  {
    id: 7,
    image: miranha,
    name: "Filme 7",
    price: 89.99,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam maxime quam velit at, in, aliquam quidem porro veniam quod ipsum, ipsa similique cumque! Labore fugit delectus eius rem totam"
  },
  {
    id: 8,
    image: miranha,
    name: "Filme 8",
    price: 29.99,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam maxime quam velit at, in, aliquam quidem porro veniam quod ipsum, ipsa similique cumque! Labore fugit delectus eius rem totam'
  },
  {
    id: 9,
    image: miranha,
    name: "Filme 9",
    price: 59.99,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam maxime quam velit at, in, aliquam quidem porro veniam quod ipsum, ipsa similique cumque! Labore fugit delectus eius rem totam"
  },
  {
    id: 10,
    image: miranha,
    name: "Filme 10",
    price: 89.99,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam maxime quam velit at, in, aliquam quidem porro veniam quod ipsum, ipsa similique cumque! Labore fugit delectus eius rem totam"
  },
];

export default function CarrinhoDeCompras() {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [wishlist, setWishlist] = useState<Item[]>([]);
  const [openModal, setOpenModal] = useState(false); // Estado para controlar a abertura e fechamento do modal
  const [modalContent, setModalContent] = useState<string>(""); // Conteúdo dinâmico do modal
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null); // Estado para armazenar o ID do item selecionado
  const isMediumScreen = useMediaQuery('(max-width: 768px)');
  const navigate = useNavigate();

  const removeItem = (id: number) => {
    console.log("Removendo item com ID:", id);
    setItems(items.filter(item => item.id !== id));
  };


  const buyItem = (id: number) => {
    console.log("Compra realizada para o produto de ID:", id);
    setModalContent(`Compra realizada para o produto de ID ${id}`);
    setOpenModal(true);
  };

  const addToWishlist = (id: number) => {
    const itemToAdd = items.find(item => item.id === id);
    if (itemToAdd) {
      setWishlist([...wishlist, itemToAdd]);
      alert(`Item "${itemToAdd.name}" adicionado à lista de desejos.`);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleBuyItem = () => {
    if (selectedItemId !== null) {
      setModalContent(`Compra realizada para o produto de ID ${selectedItemId}`);
      setOpenModal(false);
      alert('compra realizada com sucesso!')
    }
  };

  const handleVoltarClick = () => {
    navigate("/home");
  };

  return (
    <Stack sx={{ background: '#2B364A', height: '100vh', width: '100vw', pb: '100px', overflow: 'auto' }}>
      <Stack sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '100%', px: '10%' }}>

        <Stack sx={{ display: isMediumScreen ? 'none' : 'block' }}>
          <Button onClick={handleVoltarClick} variant="contained" sx={{
            color: 'white', width: '20px', position: 'absolute', left: '5%', top: '20px', background: '#13C8B5', '&:hover': {
              backgroundColor: '#13C8B5', color: '#2B364A'
            }
          }} ><NavigateBeforeIcon />
          </Button>
        </Stack>
        <Typography sx={{ color: '#13C8B5', m: '60px', fontWeight: 'bold' }} variant='h4'> Carrinho de compras</Typography>

        <Grid sx={{ width: '100%' }} container spacing={2} justifyContent="center">
          {items.map(item => (
            <Grid item key={item.id} xs={12} sm={8} md={6} lg={4}>
              <Card sx={{ border: '2px  yellow solid' }} >
                <CardMedia
                  component="img"
                  height="300"
                  image={miranha}
                  alt={item.name}
                />
                <CardContent  >
                  <Typography sx={{ color: '#13C8B5', fontWeight: 'bold', py: '10px' }} variant="h6">{item.name}</Typography>
                  <Typography sx={{ fontSize: '20px', fontWeight: '600', color: '#000', background: 'yellow', width: '170px', p: '10px', my: '10px', borderRadius: '10px', border: 'solid 1px' }} variant="body1">Preço: R${item.price.toFixed(2)}</Typography>
                  <Typography sx={{ p: '10px', fontWeight: '600', fontSize: '18px' }} variant="body2">{item.description}</Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-start', p: '20px' }}>
                  <Stack direction='row' spacing={1}>
                    <Button sx={{
                      background: '#2B364A', color: '#13C8B5', '&:hover': {
                        backgroundColor: '#13C8B5', color: '#2B364A'
                      }
                    }}
                      variant="contained"
                      startIcon={<ShoppingCartIcon />}
                      onClick={() => {
                        buyItem(item.id);
                        setSelectedItemId(item.id);
                      }}
                    >
                      Comprar
                    </Button>
                    <Button sx={{
                      background: '#2B364A', color: '#13C8B5', '&:hover': {
                        backgroundColor: '#13C8B5', color: '#2B364A'
                      }
                    }}
                      variant="contained"
                      startIcon={<FavoriteIcon />}
                      onClick={() => addToWishlist(item.id)}
                    >
                      Lista de desejos
                    </Button>
                    <IconButton sx={{ color: '#2B364A', }} aria-label="delete" onClick={() => removeItem(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* Modal */}
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box sx={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            height: '50%',
            maxWidth: isMediumScreen ? '80%' : '50%',
            maxHeight: '90%',
            bgcolor: 'background.paper',
            border: '3px solid #f2dc60',
            borderRadius: '6px',
            overflowY: 'auto',
            padding: "50px",
            background: "#D3D3D3",

          }}>

            <Typography sx={{ color: 'red', fontWeight: 'bold' }} id="modal-title" variant="h6" component="h2" gutterBottom>
              Finalizar pedido!
            </Typography>
            <Typography id="modal-description" sx={{ color: 'red', fontWeight: 'bold', mt: 2 }}>
              {modalContent}
            </Typography>
            <Stack direction='row' >
              {/* Novo botão Comprar */}
              <Button onClick={handleBuyItem} sx={{
                background: '#2B364A', color: '#13C8B5', '&:hover': {
                  backgroundColor: '#13C8B5', color: '#2B364A'
                }
              }}>Comprar</Button>
              <Button onClick={handleCloseModal} sx={{
                background: '#2B364A', color: '#13C8B5', ml: '10px', '&:hover': {
                  backgroundColor: '#13C8B5', color: '#2B364A'
                }
              }}>Voltar</Button>
            </Stack>


          </Box>
        </Modal>
      </Stack>
    </Stack>
  );
}
