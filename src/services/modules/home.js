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
