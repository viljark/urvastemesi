import React from 'react'
import PropTypes from 'prop-types'
import { GalleryPageTemplate } from '../../templates/gallery-page'

const GalleryPagePreview = ({ entry, widgetFor }) => (
  <GalleryPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    fluidImgs={[]}
    footer={{}}
  />
)

GalleryPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default GalleryPagePreview
