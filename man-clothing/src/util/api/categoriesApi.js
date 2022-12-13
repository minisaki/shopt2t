import axiosClient from "./axiosClient";

const categoryApi = {
  getAll(params) {
    const url = 'categories/'
    return axiosClient.get(url, {params})
  },
  getBySlug(slug) {
    console.log(slug)
    const url = `categories/${slug}`
    return axiosClient.get(url)
  }
}

export default categoryApi;