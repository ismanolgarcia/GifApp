import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';
import { Container, Title } from '../ui';

export const GifGrid = ({ category }) => {
  const { image, isLoading } = useFetchGifs(category);
  return (
    <>
      <Title as="h2">{category}</Title>
      <Container>
        {image.map(({ id, title, url }) => (
          <GifItem key={id} title={title} url={url} />
        ))}
      </Container>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
