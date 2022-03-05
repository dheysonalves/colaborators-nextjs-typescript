import React from 'react'
import UserDetails from '../UserDetails'
import * as S from './styles'
import Media from 'react-media'
import Image from 'next/image'

const NavBar = () => {
	return (
		<S.Wrapper>
			<Media
				query="(max-width: 1199px)"
				render={() => (
					<>
						<S.LeftBorder>
							<UserDetails name="Dheyson Alves" status="Testing" />
						</S.LeftBorder>
						<S.RightBorder>
							<Image alt="logo" src="/img/logo.svg" width={32} height={32} />
						</S.RightBorder>
					</>
				)}
			/>
			<Media
				query="(min-width: 1200px)"
				render={() => (
					<>
						<S.RightBorder>
							<Image alt="logo" src="/img/logo.svg" width={32} height={32} />
						</S.RightBorder>
						<S.LeftBorder>
							<UserDetails name="Dheyson Alves" status="Testing" />
						</S.LeftBorder>
					</>
				)}
			/>
		</S.Wrapper>
	)
}

export default NavBar
