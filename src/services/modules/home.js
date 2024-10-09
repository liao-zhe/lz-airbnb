import myRequest from '..'

export function getHomeGoodPriceData() {
  return myRequest.get({
    url: '/home/goodprice'
  })
}
