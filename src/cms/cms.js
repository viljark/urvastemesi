import CMS from 'netlify-cms'

import GalleryPagePreview from './preview-templates/GalleryPagePreview'
import ProductsPagePreview from './preview-templates/ProductsPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import BlogPostPreview  from './preview-templates/BlogPostPreview'

CMS.registerPreviewTemplate('galerii', GalleryPagePreview)
CMS.registerPreviewTemplate('ajalugu', ProductsPagePreview)
CMS.registerPreviewTemplate('avaleht', IndexPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
window.UPLOADCARE_LOCALE = 'et';