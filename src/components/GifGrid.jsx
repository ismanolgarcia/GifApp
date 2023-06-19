import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {
  const { image, isLoading } = useFetchGifs(category);
  return (
    <>
      <h2>{category}</h2>
      <div className="card-grid">
        {image.map(({ id, title, url }) => (
          <GifItem key={id} title={title} url={url} />
        ))}
      </div>
    </>
  );
};
