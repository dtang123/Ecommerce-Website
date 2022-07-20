import "./categories-container.styles.scss"
import DirectoryItem from "../directory-item/directory-item.component.jsx"
import React from 'react';

const CategoriesContainer = ({categories}) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category}/>
      ))}
    </div>
  );
}

export default CategoriesContainer;
