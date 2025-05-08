import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchCategories } from "../../redux/slices/categorySlice";
import Cards from "../../components/cards/Cards";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";



const Category = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading } = useSelector(
    (state: RootState) => state.categories
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) return <CircularProgress />;

  return (
    <Box p={5}>
      <Typography variant="h3" gutterBottom sx={{textAlign:"center"}}>
        Category List
      </Typography>
      <Grid container spacing={5} mt={5} sx={{ width: "100%" }}>
        {items.map((category) => (
          <Grid
            key={category.id}
          >
            <Cards
              image={category.image}
              title={category.name}
              buttonText2="Explore"
              showLike={false}
              height={300}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Category;
