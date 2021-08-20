import React from 'react'
import styled from 'styled-components'
import { Text } from '../Text'

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.tertiary};
  padding: 16px;
  ${({ theme }) => theme.mediaQueries.lg} {
    // padding-left: 240px;
  }
`

const VersionBar = () => {
  return (
    <Wrapper>
      <Text mr="16px" color="#FFFFFF">
        &copy; 2021 MoonToken | Community Owned.
      </Text>
    </Wrapper>
  )
}

export default VersionBar
