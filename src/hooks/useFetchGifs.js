import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImage = async () => {
    const newImage = await getGifs(category);
    setImage(newImage);
    setIsLoading(false);
  };

  useEffect(() => {
    getImage();
  });

  return {
    image,
    isLoading,
  };
};
