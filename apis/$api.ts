/* eslint-disable */
import { AspidaClient, optionToRequest } from 'aspida'
import { Methods as Methods0 } from './api/index'
import { Methods as Methods1 } from './api/experiment/v1/check_existence_tag/index'
import { Methods as Methods2 } from './api/experiment/v1/registered_tags/index'
import { Methods as Methods3 } from './api/rfid/index'
import { Methods as Methods4 } from './api/tag-info/v1/index'
import { Methods as Methods5 } from './api/tag-info/v2/index'

const api = (client: AspidaClient, baseURL?: string) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')

  return {
    api: {
      experiment: {
        v1: {
          check_existence_tag: {
            get: (option: { query: Methods1['get']['query'] }) =>
              client.fetch<Methods1['get']['resData']>(`${prefix}/api/experiment/v1/check_existence_tag`, 'GET', option).json(),
            $get: async (option: { query: Methods1['get']['query'] }) =>
              (await client.fetch<Methods1['get']['resData']>(`${prefix}/api/experiment/v1/check_existence_tag`, 'GET', option).json()).data
          },
          registered_tags: {
            get: (option: { query: Methods2['get']['query'] }) =>
              client.fetch<Methods2['get']['resData']>(`${prefix}/api/experiment/v1/registered_tags`, 'GET', option).json(),
            $get: async (option: { query: Methods2['get']['query'] }) =>
              (await client.fetch<Methods2['get']['resData']>(`${prefix}/api/experiment/v1/registered_tags`, 'GET', option).json()).data
          }
        }
      },
      rfid: {
        post: (option: { data: Methods3['post']['reqData'] }) =>
          client.fetch<Methods3['post']['resData']>(`${prefix}/api/rfid`, 'POST', optionToRequest(option)).json(),
        $post: async (option: { data: Methods3['post']['reqData'] }) =>
          (await client.fetch<Methods3['post']['resData']>(`${prefix}/api/rfid`, 'POST', optionToRequest(option)).json()).data
      },
      tag_info: {
        v1: {
          post: (option: { data: Methods4['post']['reqData'] }) =>
            client.fetch<Methods4['post']['resData']>(`${prefix}/api/tag-info/v1`, 'POST', optionToRequest(option)).json(),
          $post: async (option: { data: Methods4['post']['reqData'] }) =>
            (await client.fetch<Methods4['post']['resData']>(`${prefix}/api/tag-info/v1`, 'POST', optionToRequest(option)).json()).data
        },
        v2: {
          get: () =>
            client.fetch<Methods5['get']['resData']>(`${prefix}/api/tag-info/v2`, 'GET').json(),
          $get: async () =>
            (await client.fetch<Methods5['get']['resData']>(`${prefix}/api/tag-info/v2`, 'GET').json()).data,
          post: (option: { data: Methods5['post']['reqData'] }) =>
            client.fetch<Methods5['post']['resData']>(`${prefix}/api/tag-info/v2`, 'POST', optionToRequest(option)).json(),
          $post: async (option: { data: Methods5['post']['reqData'] }) =>
            (await client.fetch<Methods5['post']['resData']>(`${prefix}/api/tag-info/v2`, 'POST', optionToRequest(option)).json()).data
        }
      },
      get: () =>
        client.fetch<Methods0['get']['resData']>(`${prefix}/api`, 'GET').text(),
      $get: async () =>
        (await client.fetch<Methods0['get']['resData']>(`${prefix}/api`, 'GET').text()).data
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
