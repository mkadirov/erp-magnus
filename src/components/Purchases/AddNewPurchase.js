import {
    Box,
    Button,
    Card,
    Divider,
    Grid2,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useContext } from "react";
  import PhotoBox from "./PhotoBox";
  import MyContext from "../Context/MyContext";
  
  function AddNewPurchase() {
    const { isUzbek } = useContext(MyContext);
  
    return (
      <Box>
        <Typography variant="h6" textAlign={"center"}>
          {isUzbek ? "Yangi haridni amalga oshirish" : "Оформить новую покупку"}
        </Typography>
        <Divider sx={{ marginY: 1 }} />
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
            <PhotoBox />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, lg: 8 }}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
            >
              <Box>
                <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  label={isUzbek ? "Mahsulot nomi" : "Название продукта"}
                />
                <Box marginY={1}>
                  <Grid2 container spacing={2}>
                    <Grid2 size={6}>
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        label={isUzbek ? "Mahsulot ölchami" : "Размер продукта"}
                      />
                    </Grid2>
                    <Grid2 size={6}>
                      <TextField
                        type="number"
                        variant="outlined"
                        size="small"
                        fullWidth
                        label={isUzbek ? "Mahsulot soni" : "Количество продукта"}
                      />
                    </Grid2>
                  </Grid2>
                </Box>
                <Box marginY={1}>
                  <Grid2 container spacing={2}>
                    <Grid2 size={6}>
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        label={isUzbek ? "Identifikatsiya raqami" : "Номер идентификации"}
                      />
                    </Grid2>
                    <Grid2 size={6}>
                      <TextField
                        type="number"
                        variant="outlined"
                        size="small"
                        fullWidth
                        label={isUzbek ? "Mahsulot narhi" : "Цена продукта"}
                      />
                    </Grid2>
                  </Grid2>
  
                  <TextField
                    label={isUzbek ? "Izoh qoldirish..." : "Оставьте комментарий..."}
                    multiline
                    rows={2}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                  />
                </Box>
              </Box>
              <Box display={"flex"} justifyContent={"end"}>
                <Button variant="contained">
                  {isUzbek ? "Qöshish" : "Добавить"}
                </Button>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    );
  }
  
  export default AddNewPurchase;
  