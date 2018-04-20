export function portfolioImages (id) {
  // create a new context to get all images in chellenge/slideshow
  const req = require.context('~/assets/portfolio', true, /\.(jp?g|png|gif)$/)
  return req.keys()
  // filter them by folder name (simple check if path contains album name)
  .filter(item => item.includes(`/${id}/`))
  .filter(item => !item.includes(`thumb`))
  // return an Array of require items
  .map(item => req(item))
}
