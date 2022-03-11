import { css } from '@emotion/core'

const GlobalStyles = css`
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		font-size: 62.5%;
	}

	html,
	body,
	#__next {
		height: 100%;
	}

	body {
		font-family: 'Poppins', sans-serif;
	}

	select {
		// A reset of styles, including removing the default dropdown arrow
		appearance: none;
		// Additional resets for further consistency
		background-color: transparent;
		border: none;
		padding: 0 1em 0 0;
		margin: 0;
		width: 100%;
		font-family: inherit;
		font-size: inherit;
		cursor: inherit;
		line-height: inherit;
		outline: none;

		&::-ms-expand {
			display: none;
		}
	}

	::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: #587169;
		font-weight: 500;
		font-size: 16px;
		opacity: 1; /* Firefox */
	}

	:-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		color: #587169;
		font-weight: 500;
		font-size: 16px;
	}

	::-ms-input-placeholder {
		/* Microsoft Edge */
		color: #587169;
		font-weight: 500;
		font-size: 16px;
	}
`
export default GlobalStyles
