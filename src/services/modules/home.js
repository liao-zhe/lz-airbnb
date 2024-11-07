import myRequest from '..'

export function getHomeGoodPriceData() {
  return myRequest.get({
    url: '/home/goodprice'
  })
}

export function getHomeHighscoreData() {
  return myRequest.get({
    url: '/home/highscore'
  })
}

export function getHomeDiscountData() {
  return myRequest.get({
    url: '/home/discount'
  })
}

export function getHomeHotRecommendData() {
  return myRequest.get({
    url: '/home/hotrecommenddest'
  })
}

export function getHomeLongforData() {
  return myRequest.get({
    url: '/home/longfor'
  })
}
