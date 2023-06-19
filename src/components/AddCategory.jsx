import { useState } from 'react';

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
      <input
        type="text"
        name=""
        id=""
        value={inputValue}
        onChange={handleChange}
        placeholder="Buscar Gif"
      />
    </form>
  );
};
