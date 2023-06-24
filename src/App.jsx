import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
import { Title } from './ui';
const App = () => {
  const [categories, setCategories] = useState(['Naruto']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <Title>GIFAPP</Title>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((category, i) => (
        <GifGrid key={i} category={category} />
      ))}
    </>
  );
};

export default App;
