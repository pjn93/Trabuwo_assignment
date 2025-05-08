// src/components/ProductList.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography, CircularProgress, Box } from "@mui/material";
import Cards from "../../components/cards/Cards";
import toast from "react-hot-toast";
import { fetchProducts } from "../../redux/slices/productSlics";
import { AppDispatch, RootState } from "../../redux/store";
import { addToCart } from "../../redux/slices/cartSlice";



const ProductCard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <CircularProgress />;

  return (
    <Box style={{ paddingInline: "40px" }}>
      <Typography variant="h3" gutterBottom>
        Product List
      </Typography>
      <Grid container spacing={5} mt={5} sx={{ width: "100%" }}>
        {items.map((product) => (
          <Grid
            key={product.id}
            sx={{
              width: {
                xs: "-webkit-fill-available",
                sm: "-webkit-fill-available",
                md: "auto",
              },
              height: {
                xs: 400,
                sm: 400,
                md: "auto",
              },
            }}
          >
            <Cards
              image={product.images?.[0] || ""}
              title={product.title}
              price={product.price}
              buttonText1="Buy Now"
              buttonText2="Add to Cart"
              onAddToCart={() => {
                dispatch(
                  addToCart({
                    id: product.id,
                    image: product.images?.[0] || "",
                    title: product.title,
                    price: product.price,
                    quantity: 1,
                  })
                );
                toast.success(`${product.title} added to cart!`);
              }}
              buyNow={() => console.log(`Buying ${product.title}`)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductCard;
