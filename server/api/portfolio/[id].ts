import portfolio from '../../data/portfolio'
export default defineEventHandler((event) => {
  const defaultData = {
    id: null,
    name: null,
    description: null,
    tools: null,
    link: null,
    videos: null
  }
  const item = portfolio.find(item => String(item.id) === event.context.params?.id)
  return {
    ...defaultData,
    ...item
  }
})
