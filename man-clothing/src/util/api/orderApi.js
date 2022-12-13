import axiosClient from "./axiosClient";

const orderApi = {
  get(id) {
    const url = `order/${id}`
    return axiosClient.get(url)
  },
  create(data) {
    const url = `order/`
    return axiosClient.post(url, data)
  },
  update(data, id) {
    const url = `order/${id}/`
    return axiosClient.put(url, data)
  }
}

export default orderApi;