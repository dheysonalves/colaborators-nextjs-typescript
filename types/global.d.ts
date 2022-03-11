import '@emotion/react'

declare module '@emotion/react' {
	export interface Theme {
		light: {
			brand: {
				blue: string
			}
			neutral: {
				background: string
				light: string
				black: string
				neutral_1: string
				neutral_2: string
				neutral_3: string
				neutral_5: string
			}
			primary: {
				default: string
				green: string
			}
			feedback: {
				success: string
			}
			tertiary: {
				disabled: string
			}
		}
		dark: {
			brand: {
				blue: string
			}
			neutral: {
				background: string
				light: string
				black: string
				neutral_2: string
				neutral_3: string
				neutral_5: string
			}
			primary: {
				default: string
				green: string
			}
			feedback: {
				success: string
			}
			tertiary: {
				disabled: string
			}
		}
	}
}
