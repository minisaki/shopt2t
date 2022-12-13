import axiosClient from "./axiosClient";

const blogApi = {
  getAll(params) {
    const url = 'blog/'
    return axiosClient.get(url, {params})
  },
  getItem(slug) {
    const url = `blog/${slug}`
    return axiosClient.get(url)
  }
}

export default blogApi;