import { DirectoryContainer } from "./categories-container.styles"
import DirectoryItem from "../directory-item/directory-item.component.jsx"
import React from 'react';

const CategoriesContainer = ({categories}) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category}/>
      ))}
    </DirectoryContainer>
  );
}

export default CategoriesContainer;
