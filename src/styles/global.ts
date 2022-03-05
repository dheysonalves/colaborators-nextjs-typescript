import { css } from '@emotion/core'

const GlobalStyles = css`
	* {
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
