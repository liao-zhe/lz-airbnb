import React, { memo } from 'react'
import { HeaderWrapper } from './styles'
import HeaderLeft from './c-cnps/header-left'
import HeaderCenter from './c-cnps/header-center'
import HeaderRight from './c-cnps/header-right'

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  )
})

export default AppHeader
