import  { useState, useEffect } from 'react';
import { List, ListItem, IconButton, Typography, Button, Card, CardMedia, CardContent, Box, Stack, Grid, Modal, useMediaQuery } from '@mui/material';
import { Delete as DeleteIcon, ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';
import miranha from  '../../assets/miranha.png'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useNavigate } from 'react-router-dom';



interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string; // URL da imagem do item
}

export default function ListaDeDesejos(): JSX.Element {
  const [items, setItems] = useState<Item[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false); // Estado para controlar a abertura e fechamento do modal
  const isMediumScreen = useMediaQuery('(max-width: 768px)');
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null); // Estado para armazenar o ID do item selecionado
  const navigate = useNavigate();


  useEffect(() => {
    // Simulação de chamada de API para buscar os dados
    const fetchData = async () => {
      // Supondo que você tenha obtido os dados da API em forma de array de itens
      const apiData: Item[] = [
        { id: 1, name: "Item 1", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam maxime quam velit at, in, aliquam quidem porro veniam quod ipsum, ipsa similique cumque! Labore fugit delectus eius rem totam", price: 29.99, image: miranha},
        { id: 2, name: "Item 2", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam maxime quam velit at, in, aliquam quidem porro veniam quod ipsum, ipsa similique cumque! Labore fugit delectus eius rem totam", price: 29.99, image:  miranha},
        { id: 3, name: "Item 3", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam maxime quam velit at, in, aliquam quidem porro veniam quod ipsum, ipsa similique cumque! Labore fugit delectus eius rem totam", price: 29.99, image:  miranha },
        { id: 4, name: "Item 4", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam maxime quam velit at, in, aliquam quidem porro veniam quod ipsum, ipsa similique cumque! Labore fugit delectus eius rem totam", price: 29.99, image:  miranha },
        { id: 5, name: "Item 5", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam maxime quam velit at, in, aliquam quidem porro veniam quod ipsum, ipsa similique cumque! Labore fugit delectus eius rem totam", price: 29.99, image:  miranha},
        { id: 6, name: "Item 6", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam maxime quam velit at, in, aliquam quidem porro veniam quod ipsum, ipsa similique cumque! Labore fugit delectus eius rem totam", price: 29.99, image:  miranha },
      ];
      setItems(apiData);
    };

    fetchData();
  }, []);

  const removeItem = (id: number) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  const handleBuy = (id: number) => {
    // Lógica para a ação de compra do item
    console.log(`Item ${id} comprado!`);
    setOpenModal(true); // Abre o modal ao comprar o item
    setSelectedItemId(id); // Define o ID do item selecionado
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleConfirmPurchase = () => {
    setOpenModal(false); // Fecha o modal
    alert('Compra realizada com sucesso!'); // Alerta de compra realizada
  };
  const handleVoltarClick = () => {
    navigate("/home");
};

  return (
    <Stack sx={{ background: '#2B364A', minHeight: '100vh', display: 'flex', alignItems: 'center', p: '10px' }}>
 
  

<Stack sx={{ display: 'flex', width: '100%', background: 'red', position: 'relative' }}>


<Stack sx={{ display: isMediumScreen ? 'none' : 'block' }}>
                <Button onClick={handleVoltarClick} variant="contained" sx={{
                    color: 'white', width: '20px', position: 'absolute', left: '5%', top: '20px', background: '#13C8B5', '&:hover': {
                        backgroundColor: '#13C8B5', color: '#2B364A'
                    }
                }} ><NavigateBeforeIcon />
                </Button>
            </Stack>


</Stack>

      <Stack>
        <Typography variant='h4' sx={{ my: '60px', textAlign: 'center', fontSize: '30px', fontWeight: '600', color: '#13C8B5' }}>Lista de Desejos</Typography>

      </Stack>
     


      <List>

        {items.map(item => (
          <ListItem key={item.id}>
            <Card sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', flexWrap: 'wrap', border:'2px  yellow solid'}}>
              <Grid container spacing={2} >
                <Grid item xs={12} sm={6} md={4} lg={3} sx={{display:'flex', alignItems:'center'}}>
                  <CardMedia
                    component="img" 
                    image={item.image}
                    alt={item.name}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover',  }}
                  />
                </Grid >
                <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} item xs={12} sm={6} md={8} lg={9}>
                  <Card>
                    <CardContent sx={{ maxWidth: '90%' }}>
                      <Typography variant="h5" component="div" sx={{ color: '#13C8B5', py: '10px' }}>
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color='#2B364A' fontWeight='600' sx={{ py: '20px' }}>
                        {item.description}
                      </Typography>
                      <Typography variant="body2" color='#2B364A' fontWeight='600' sx={{ fontSize: '18px', fontWeight: '600', color: '#000', background: 'yellow', width: '160px', p: '10px', borderRadius: '10px', border: 'solid 1px' }}>
                        Preço: R$ {item.price}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'end', width:'100%', mx: '10px' }}>
                <Button sx={{
                  background: '#2B364A', color: '#13C8B5', '&:hover': {
                    backgroundColor: '#13C8B5', color: '#2B364A'
                  }
                }}
                  variant="contained"

                  startIcon={<ShoppingCartIcon />}
                  onClick={() => handleBuy(item.id)}
                >
                  Comprar
                </Button>

                <Button
                  sx={{
                    my: '16px',mx:'10px', background: '#2B364A', color: '#13C8B5', '&:hover': {
                      backgroundColor: '#13C8B5', color: '#2B364A'
                    }
                  }}
                  variant="contained"
                  startIcon={<ShoppingCartIcon />}
                  onClick={() => handleBuy(item.id)}
                >
                  Alugar
                </Button>
                <IconButton onClick={() => removeItem(item.id)}>
                  <DeleteIcon sx={{ color: '#2B364A' }} />
                </IconButton>
              </Box>
            </Card>
          </ListItem>
        ))}
      </List>
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
          border: '2px solid #f2dc60',
          borderRadius: '6px',
          overflowY: 'auto',
          padding: "50px"
        }}>
          <Typography sx={{color:'red', fontWeight:'bold'}}  id="modal-title" variant="h6" component="h2" gutterBottom>
            Finalizar pedido
          </Typography>
          <Typography id="modal-description" sx={{color:'red', fontWeight:'bold', mt: 2 }}>
            descrição do produto.
          </Typography>
          <Stack direction='row'>
           

            <Button onClick={handleConfirmPurchase} sx={{
                      background: '#2B364A', color: '#13C8B5', '&:hover': {
                        backgroundColor: '#13C8B5', color: '#2B364A'
                      }}}>Comprar</Button>
              <Button onClick={handleCloseModal} sx={{
                      background: '#2B364A', color: '#13C8B5',ml:'10px', '&:hover': {
                        backgroundColor: '#13C8B5', color: '#2B364A'
                      }}}>Voltar</Button>
          </Stack>
        </Box>
      </Modal>
    </Stack>

  );
}
