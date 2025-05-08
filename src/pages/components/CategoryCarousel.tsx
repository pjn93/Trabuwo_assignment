import ImageCarousel from "../../components/carousel/Carousel";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { fetchCategories } from "../../redux/slices/categorySlice";



export default function HomePage() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading } = useSelector((state: RootState) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // Assuming each item has an `image` field
  const imageUrls = items
    .map(item => item.image)
    .filter(Boolean); 

  return <ImageCarousel images={imageUrls} autoplayDelay={4000} loading={loading}/>;
}
