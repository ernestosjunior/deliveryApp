import React from 'react'
import { Pressable, Image } from 'react-native'
import { StyledContainer } from './styles'

function FavoriteButton({ onClick }) {
  return (
    <Pressable onPress={onClick}>
      <StyledContainer>
        <Image source={require('../../assets/starWhite.png')} />
      </StyledContainer>
    </Pressable>
  )
}

export default FavoriteButton
