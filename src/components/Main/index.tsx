import React from 'react'
import * as S from './styles'

const Main = ({
	title = 'react avancado',
	description = 'Typescript, NextJS and Styled Components'
}) => {
	return (
		<S.Wrapper>
			<S.Logotype
				src="/img/brand.svg"
				alt="Imagem de um átomo e React Avançado escrito ao lado"
			/>
			<S.Title>{title}</S.Title>
			<S.Description>{description}</S.Description>
		</S.Wrapper>
	)
}

export default Main
