/* eslint-disable react/display-name */
import Document, {
	DocumentContext,
	Html,
	Head,
	Main,
	NextScript,
} from 'next/document'

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const originalRenderPage = ctx.renderPage

		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App) => (props) => <App {...props} />,
			})
		const initialProps = await Document.getInitialProps(ctx)
		return {
			...initialProps,
			styles: <>{initialProps.styles}</>,
		}
	}
	render() {
		return (
			<Html lang="pt-BR">
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
