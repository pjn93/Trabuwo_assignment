import { SxProps, Theme} from "@mui/material";


export interface CardProps {
  image: string;
  title: string;
  price?: number | string;
  onAddToCart?: () => void;
  buyNow?: () => void;
  buttonText1?: string;
  buttonText2?: string;
  width?: number | string;
  height?: number;
  showLike?: boolean;
  sx?: SxProps<Theme>;
}
