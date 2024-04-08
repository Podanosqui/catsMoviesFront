import React, { useState } from 'react';
import { Card, CardContent, Stack, Typography, useMediaQuery } from '@mui/material';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import HomemAranha from '../../assets/miranha.png';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}`;
}

interface ProductCardProps {
  title: string;
  subtitle: string;
  description: string;
  price: number;
  sinopse: string;
}

export default function Cards({ title, subtitle, description, price, sinopse }: ProductCardProps) {
  const isMediumScreen = useMediaQuery('(max-width: 768px)');
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const [open, setOpen] = useState(false);

  const [value, setValue] = React.useState<number | null>(2);
  const [_hover, setHover] = React.useState(-1);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBuy = () => {
    alert("Compra realizada com sucesso!");
    handleClose(); // Fecha o modal após realizar a compra
  };

  const handleRent = () => {
    alert("Aluguel realizado com sucesso!");
    handleClose(); // Fecha o modal após realizar o aluguel
  };

  const handleFav = () => {
    alert("Adicionado ao favoritos!!");
    handleClose(); // Fecha o modal após realizar o aluguel
  };

  return (
    <>
      <Card onClick={handleOpen}>
        <CardContent sx={{ border: '2px  yellow solid' }}>
          <img src={HomemAranha} alt={title} style={{ width: '100%', height: '200px' }} />
          <Typography sx={{ color: '#13C8B5', fontWeight: 'bold' }} variant="h5" component="h2">
            {title}
          </Typography>
          <Typography sx={{ fontWeight: 'bold', py: '4px' }} gutterBottom>
            {subtitle}
          </Typography>
          <Typography sx={{ fontWeight: 'bold', py: '4px' }} variant="body2" component="p">
            {description}
          </Typography>
          <Typography sx={{ fontSize: '18px', fontWeight: '600', color: '#000', background: 'yellow', width: '100px', p: '10px', borderRadius: '10px', border: 'solid 1px' }} variant="h6" component="p" style={{ fontSize: isMediumScreen ? '14px' : undefined }}>
            R$ {price.toFixed(2)}
          </Typography>
        </CardContent>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Stack
          sx={{
            display: 'flex',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: isSmallScreen ? '80%' : '80%',
            height: isMediumScreen ? '60%' : (isSmallScreen ? '55%' : '80%'),
            bgcolor: 'white',
            border: '2px solid #f2dc60',
            borderRadius: '6px',
            overflowY: isSmallScreen ? 'scroll' : 'none'
          }}
        >
          <Stack direction={isMediumScreen ? 'column' : 'row'} height='100%'>


            <Stack
              sx={{
                width: isMediumScreen ? '100%' : '50%',
                height: '100%',
                padding: '20px',
                display: "flex",
                justifyContent: isMediumScreen ? 'space-around' : 'space-around',
                alignItems: isMediumScreen ? 'space-between' : 'space-around',
                direction: isMediumScreen ? 'row' : 'column',
              }}
            >


              <Typography variant='h4' id="modal-title" style={{ color: '#13C8B5', fontWeight: 'bold', fontSize: isMediumScreen ? '16px' : undefined }}>
                {title}
              </Typography>



              <Typography variant="body1" id="modal-description" gutterBottom style={{ fontWeight: 'bold', fontSize: isMediumScreen ? '14px' : undefined }}>
                {sinopse}
              </Typography>

              <Box
                sx={{
                  width: 200,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Rating
                  name="hover-feedback"
                  value={value}
                  precision={0.5}
                  getLabelText={getLabelText}
                  onChange={(_event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(_event, newHover) => {
                    setHover(newHover);
                  }}
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
              </Box>

              <Stack>
                <Stack direction='row' justifyContent='space-between' sx={{ padding: "10px, 0" }}>
                  <Button

                    sx={{
                      textTransform: "none",
                      background: '#2B364A',
                      fontSize: isMediumScreen ? '14px' : undefined,
                      marginBottom: '20px',
                      width: '45%',
                      color: '#13C8B5',
                      '&:hover': {
                        backgroundColor: '#13C8B5', color: '#2B364A',
                      }
                    }}
                    onClick={handleBuy}
                  >
                    Comprar por R$ {price.toFixed(2)}
                  </Button>
                  <Button

                    sx={{
                      textTransform: "none",
                      background: '#2B364A',
                      fontSize: isMediumScreen ? '14px' : undefined,
                      marginBottom: '20px',
                      width: '45%',
                      color: '#13C8B5',
                      '&:hover': {
                        backgroundColor: '#13C8B5', color: '#2B364A',
                      }
                    }}
                    onClick={handleRent}
                  >
                    Alugar por R$ {price.toFixed(2)}
                  </Button>
                </Stack>
                <Stack alignItems='center'>
                  <Button

                    sx={{
                      textTransform: "none",
                      background: '#2B364A',
                      fontSize: isMediumScreen ? '14px' : undefined,
                      marginBottom: '20px',
                      width: '100%',
                      color: '#13C8B5',
                      '&:hover': {
                        backgroundColor: '#13C8B5', color: '#2B364A',
                      }
                    }}
                    onClick={handleFav}
                  >
                    Adicionar aos favoritos
                  </Button>
                </Stack>
              </Stack>
            </Stack>

            {!isMediumScreen && (
              <Stack sx={{ width: "50%" }}>
                <img
                  src={HomemAranha}
                  alt={title}
                  style={{
                    width: '100%',
                    height: '79.5vh',
                    objectFit: 'cover',
                    position: "relative"
                  }}
                />
                <Button onClick={handleClose} variant="contained" sx={{
                  width: '5px',
                  backgroundColor: 'transparent',
                  fontSize: "18px",
                  padding: "0",
                  position: 'absolute',
                  boxShadow: 'none',
                  right: '0',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    boxShadow: 'none'
                  }
                }}>
                  X
                </Button>
              </Stack>
            )}
          </Stack>
        </Stack>
      </Modal>
    </>
  );
}
