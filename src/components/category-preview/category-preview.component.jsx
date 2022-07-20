import { Link } from 'react-router-dom'

import './category-preview.styles.scss'
import ProductCard from '../product-card/product-card.component'


const CategoryPreview = ({ title, products}) => {
  return (
    <div className='category-preview-container'>
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className='preview'>
        {
          products.filter((_, idx) => idx < 4)
          .map((product) => <ProductCard id={product.id} product={product} />)
        }
      </div>
      <div className="see-more">
        <Link className="see-more-link" to={title}>See More</Link>
      </div>
    </div>
  )
}

export default CategoryPreview;
