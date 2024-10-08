import styled from 'styled-components'

// react中导入静态资源的方式
// import coverImg from "@/assets/img/cover_01.jpeg"
// export const BannerWrapper = styled.div`
//   height: 529px;
//   background: url(${coverImg});
// `

export const BannerWrapper = styled.div`
  height: 529px;
  background: url(${require('@/assets/img/cover_01.jpeg')}) center/cover;
`
