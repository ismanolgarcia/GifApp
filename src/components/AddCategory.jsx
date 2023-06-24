import PropTypes from 'prop-types';
import { useState } from 'react';
import { Input } from '../ui';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    setInputValue('');
    onNewCategory(inputValue.trim());
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        name=""
        id=""
        value={inputValue}
        onChange={handleChange}
        placeholder="Search Gif"
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
