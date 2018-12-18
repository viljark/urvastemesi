import CMS from 'netlify-cms'

import GalleryPagePreview from './preview-templates/GalleryPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import BlogPostPreview  from './preview-templates/BlogPostPreview'
import ProductPreview from "./preview-templates/ProductPreview"

CMS.registerPreviewTemplate('avaleht', IndexPagePreview)
CMS.registerPreviewTemplate('tooted', ProductPreview)
CMS.registerPreviewTemplate('uudised', BlogPostPreview)
CMS.registerPreviewTemplate('galerii', GalleryPagePreview)