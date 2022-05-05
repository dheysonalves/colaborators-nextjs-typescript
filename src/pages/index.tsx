import React, { useCallback, useState, useEffect, useMemo } from 'react'
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Container, Wrapper, ActionContainer, Spacing } from './index.styles'
import NavBar from 'components/NavBar'
import Typography from 'components/Typography'
import SheetInput from 'components/SheetInput'
import BaseInput from 'components/BaseInput'
import AccordionItem from 'components/Accordion/AccordionItem'
import { agents } from 'mocks/agents'
import Media from 'react-media'
import Table from 'components/Table'
import useTextInput from 'hooks/useTextInput/useTextInput'

export default function Home() {
	const [data, setData] = useState(agents.items)
	const { text, updateText } = useTextInput()

	const getAgents = useCallback(async () => {
		const { items } = agents
		setData(items)
	}, [])

	const filterAgentsName = useMemo(() => {
		return data.filter((item) =>
			item.name.toLowerCase().includes(text.toLowerCase()),
		)
	}, [data, text])

	useEffect(() => {
		getAgents()
	}, [getAgents])

	return (
		<Container>
			<NavBar />
			<Wrapper>
				<Typography tag="h1">Colaboradores</Typography>
				<ActionContainer pt={20}>
					<SheetInput title="Colaboradores" />
					<Spacing my={40}>
						<BaseInput
							label="Pesquisar por"
							placeholderText="Pesquise por nome"
							value={text}
							handleChange={updateText}
						/>
					</Spacing>
				</ActionContainer>
				<ActionContainer>
					<Typography tag="h2">Listagem de colaboradores</Typography>
					<Media
						query="(max-width: 1199px)"
						render={() =>
							filterAgentsName.map((item, index) => {
								return (
									<Spacing my={15} key={index}>
										<AccordionItem data={item} />
									</Spacing>
								)
							})
						}
					/>
					<Media
						query="(min-width: 1200px)"
						render={() => (
							<Spacing my={15}>
								<Table data={filterAgentsName} />
							</Spacing>
						)}
					/>
				</ActionContainer>
			</Wrapper>
		</Container>
	)
}
