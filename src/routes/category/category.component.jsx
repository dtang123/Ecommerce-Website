import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState, Fragment} from 'react'
import { useSelector } from 'react-redux'
import { CategoryTitle, CategoryContainer } from './category.styles'
import ProductCard from '../../components/product-card/product-card.component'
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/category.selectors'
import Spinner from '../../components/spinner/spinner.component'

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])


  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {
        isLoading ? (<Spinner />) :
        (
          <CategoryContainer>
            {
              products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            }
          </CategoryContainer>
        )
      }

    </Fragment>
  )
}


export default Category;
