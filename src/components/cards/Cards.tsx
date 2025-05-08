import React, { useState } from "react";
import {Card, CardContent, CardMedia, CardActions, Typography} from "@mui/material";
import { FcLike } from "react-icons/fc";
import { IoMdHeartEmpty } from "react-icons/io";
import { CardProps } from "./Cards.type";
import { style } from "./Cards.style";
import CustomButton from "../button/Button";



const Cards: React.FC<CardProps> = ({
  image,
  title,
  price,
  onAddToCart,
  buyNow,
  buttonText1 = "Buy Now",
  buttonText2 = "Add to Cart",
  height = 200,
  showLike = true,
}) => {
  const fallbackImage =
    "https://img.freepik.com/free-vector/abstract-shopping-bag-design_1394-1084.jpg?w=1380";
  const [imgSrc, setImgSrc] = useState(image || fallbackImage);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => setLiked((prev) => !prev);

  return (
    <Card sx={style.root}>
      <CardMedia
        component="img"
        height={height}
        image={imgSrc}
        alt={title}
        onError={() => setImgSrc(fallbackImage)}
        sx={{ objectFit: "fill" }}
      />
      <CardContent sx={style.content}>
        <Typography variant="body1" color="text.secondary" gutterBottom sx={style.title}>{title}</Typography>
        {price !== undefined && (
          <Typography variant="h4">₹{price}</Typography>
        )}
      </CardContent>

      <CardActions sx={{ gap: 1, paddingLeft: 2 }}>
        {showLike && (
          <span
            onClick={toggleLike}
            style={{ cursor: "pointer", paddingTop: 5 }}
          >
            {liked ? <FcLike size={30} /> : <IoMdHeartEmpty size={30} />}
          </span>
        )}

        {buttonText2 && (
           <CustomButton
           label={buttonText2}
           onClick={onAddToCart || (() => {})}
         />
        )}
        {buttonText1 && (
            <CustomButton
            label={buttonText1}
            onClick={buyNow || (() => {})}
          />
        )}
      </CardActions>
    </Card>
  );
};

export default Cards;
