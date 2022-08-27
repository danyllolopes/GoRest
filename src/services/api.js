import axios from "axios";
const token = "74bbf72637b02f4610824722534f0cef0ac435f0688a811971a838cdc1a884e2";


const axiosInstance = axios.create({
  baseURL: "https://gorest.co.in/public/v2",
  headers: {
    "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
   
    
  }
})
export const api = {
  get(endpoint){
    return axiosInstance.get(endpoint)
  },
  delete(id){
    return axiosInstance.delete(id)
  },
  post(endpoint, data){
    return axiosInstance.post(endpoint, data)
  }
}