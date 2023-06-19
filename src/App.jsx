import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

const App = () => {
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h2>GifApp</h2>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((category, i) => (
        <GifGrid key={i} category={category} />
      ))}
    </>
  );
};

export default App;
