import  { useState, useEffect } from 'react';
import { List, ListItem, Typography, Button, Card, CardMedia, CardContent, Stack, Grid, useMediaQuery } from '@mui/material';
import miranha from  '../../assets/miranha.png'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useNavigate } from 'react-router-dom';



interface Item {
  id: number;
  name: string;
  description: string;
  date: string;
  image: string; // URL da imagem do item
}

export default function HistoricoDeCompras(): JSX.Element {
  const [items, setItems] = useState<Item[]>([]);
  const isMediumScreen = useMediaQuery('(max-width: 768px)');
  const navigate = useNavigate();


  useEffect(() => {
    // Simulação de chamada de API para buscar os dados
    const fetchData = async () => {
      // Supondo que você tenha obtido os dados da API em forma de array de itens
      const apiData: Item[] = [
        { id: 1, name: "Item 1", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam maxime quam velit at, in, aliquam quidem porro veniam quod ipsum, ipsa similique cumque! Labore fugit delectus eius rem totam", date:'12/12/2024', image: miranha},
        { id: 2, name: "Item 2", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam maxime quam velit at, in, aliquam quidem porro veniam quod ipsum, ipsa similique cumque! Labore fugit delectus eius rem totam",date:'12/12/2024', image:  miranha},
        { id: 3, name: "Item 3", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam maxime quam velit at, in, aliquam quidem porro veniam quod ipsum, ipsa similique cumque! Labore fugit delectus eius rem totam",date:'12/12/2024', image:  miranha },
        { id: 4, name: "Item 4", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam maxime quam velit at, in, aliquam quidem porro veniam quod ipsum, ipsa similique cumque! Labore fugit delectus eius rem totam",date:'12/12/2024', image:  miranha },
        { id: 5, name: "Item 5", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam maxime quam velit at, in, aliquam quidem porro veniam quod ipsum, ipsa similique cumque! Labore fugit delectus eius rem totam",date:'12/12/2024', image:  miranha},
        { id: 6, name: "Item 6", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam maxime quam velit at, in, aliquam quidem porro veniam quod ipsum, ipsa similique cumque! Labore fugit delectus eius rem totam",date:'12/12/2024', image:  miranha },
      ];
      setItems(apiData);
    };

    fetchData();
  }, []);



 
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
        <Typography variant='h4' sx={{ my: '60px', textAlign: 'center', fontSize: '30px', fontWeight: '600', color: '#13C8B5' }}>Histórico de compras
        </Typography>
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
                      <Typography variant="body2" color='#2B364A' fontWeight='600' sx={{ fontSize: '18px', fontWeight: '600', color: '#000', width: '300px', p: '10px' }}>
                         Compra feita em : {item.date}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            
            </Card>
          </ListItem>
        ))}
      </List>
      {/* Modal */}
     
    </Stack>

  );
}
