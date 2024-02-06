import { useMutation, useQuery, useQueryClient } from 'react-query'
import { request } from '../api/apiCore'

const fetchArticle = id => request({ url: `/admin/api/articles/${id}.json` })

const updateArticle = data => request({ url: `/admin/api/articles/${data.id}.json`, body: JSON.stringify(data), method: 'PATCH' })

export const useArticleData = id => useQuery(['gob_user', id], () => fetchArticle(id))

export const useUpdateArticle = () => {
  const queryClient = useQueryClient()

  return useMutation(updateArticle, {
    onSuccess: () => {
      queryClient.invalidateQueries('admin/api/articles.json')
    }
  })
}
