import { Link } from 'react-router-dom'

import { CategoryPreviewContainer, Title, Preview, SeeMore, SeeMoreLink } from './category-preview.styles'
import ProductCard from '../product-card/product-card.component'


const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>
          {title.toUpperCase()}
        </Title>
      </h2>
      <Preview>
        {
          products.filter((_, idx) => idx < 4)
          .map((product) => <ProductCard id={product.id} product={product} />)
        }
      </Preview>
      <SeeMore>
        <SeeMoreLink to={title}>See More</SeeMoreLink>
      </SeeMore>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview;
