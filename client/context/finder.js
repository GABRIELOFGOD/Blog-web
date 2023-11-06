import { datas } from '../utils/dummy'

export const findBlog = (idc) => {
  datas.map(data => {
    if(data.id == idc) return data
  })
}