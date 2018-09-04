
const api = {
  dynamics: 'dynamics',
  user: 'user'
}

const getBaseUrl = () => {
  return 'http://127.0.0.1:3000/api/'
}

const getApiUrl = (apiName) => {
  return getBaseUrl() + api[apiName]
}
export const GetData = (apiName, param) => new Promise((resolve, reject) => {
  wx.request({
    url: getApiUrl(apiName),
    method: 'GET',
    data: param || {},
    header: {
      'content-type': 'application/json', // 默认值
      'cookie': wx.getStorageSync('sessionid') || '' // 读取cookie
    },
    success: (res) => {
      resolve(res.data)
    }
  })
})
export const PostData = (apiName, param) => new Promise((resolve, reject) => {
  wx.request({
    url: getApiUrl(apiName),
    method: 'POST',
    data: param || {},
    header: {
      'content-type': 'application/json', // 默认值
      'cookie': wx.getStorageSync('sessionid') || '' // 读取cookie
    },
    success: (res) => {
      if (apiName === 'user') { wx.setStorageSync('sessionid', res.header['Set-Cookie']) }
      resolve(res.data)
    }
  })
})

export default {
  GetData,
  PostData
}
