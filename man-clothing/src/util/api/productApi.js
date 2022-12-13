import axiosClient from "./axiosClient";

const productApi = {
  getPreview(params) {
    const url = 'products/'
    return axiosClient.get(url, {params})
  },
  getList(params) {
    const url = 'products/get_list/'
    return axiosClient.get(url, {params})
  },
  getDetail(slug) {
    const url = `products/${slug}/`
    return axiosClient.get(url)
  }
}

export default productApi;