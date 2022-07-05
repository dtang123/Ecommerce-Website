import "./categories-container.styles.scss"
import CategoryItem from "../category-item/category-item.component.jsx"

const CategoriesContainer = ({categories}) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category}/>
      ))}
    </div>
  );
}

export default CategoriesContainer;
