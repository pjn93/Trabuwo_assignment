import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Box, Typography, Card, CardMedia, CardContent, Grid,   Paper, Divider, Button} from "@mui/material";
import { toast } from "react-hot-toast";



export default function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );

  return (
    <Box p={2}>
      <Typography variant="h2" gutterBottom>Your Cart</Typography>
      {cartItems.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <Grid container flexDirection={'row'} justifyContent={'space-around'} gap={2}>
          {/* Left: Cart Items */}
          <Grid>
            {cartItems.map((item) => (
              <Card key={item.id} sx={{ display: "flex", mb: 2, gap: 2 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 500, objectFit: "cover" }}
                  image={item.image}
                  alt={item.title}
                />
                <CardContent>
                  <Typography variant="h5">{item.title}</Typography>
                  <Typography variant="h6">₹{item.price}</Typography>
                  <Typography variant="body1">
                    Quantity: {item.quantity}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Grid>

          {/* Right: Total & Continue */}
          <Grid>
            <Paper elevation={3} sx={{width : 400, padding:3}}>
              <Typography variant="h5" gutterBottom>
                Order Summary
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="body1">
                Total Items: {cartItems.length}
              </Typography>
              <Typography variant="h6" sx={{ mt: 1 }}>
                Total Price: ₹{totalPrice.toFixed(2)}
              </Typography>

              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 3, width: "100%", backgroundColor: "#734d26" }}
                onClick={() => {
                    toast.success('Purchase successful!');
                  }}
              >
                Continue
              </Button>
            </Paper>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}
