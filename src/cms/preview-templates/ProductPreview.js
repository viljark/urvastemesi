import React from 'react'
import { ProductTemplate } from '../../templates/product'

const ProductPreview = ({ entry, widgetFor }) => (
  <ProductTemplate
    content={widgetFor('body')}
    title={entry.getIn(['data', 'title'])}
    image={entry.getIn(["data", "picture"])}
    description={entry.getIn(['data', 'description'])}
  />
)


export default ProductPreview
