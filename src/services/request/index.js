// 二次封装axios
import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'

class MyRequest {
  constructor(baseURL, timeout) {
    // 创建实例属性
    this.instance = axios.create({
      baseURL,
      timeout
    })

    // 添加响应拦截器
    this.instance.interceptors.response.use(
      res => {
        return res.data
      },
      err => {
        return err
      }
    )
  }
  //类的实例方法
  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({ ...config, method: 'get' })
  }

  post(config) {
    return this.request({ ...config, method: 'post' })
  }
}

export default new MyRequest(BASE_URL, TIMEOUT)
