import PropTypes from 'prop-types';
import { Card, Image, Label } from '../ui';

export const GifItem = ({ title, url }) => {
  return (
    <Card>
      <Image src={url} alt={title} />
      <Label>{title}</Label>
    </Card>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
