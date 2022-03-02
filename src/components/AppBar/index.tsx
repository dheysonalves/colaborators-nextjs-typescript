import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Container } from '@mui/material'
import TooltipAvatar from '../TooltipAvatar'

const ResponsiveAppBar = () => {
	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1, mr: 2, display: { xs: 'none', md: 'flex' } }}
					>
						LOGO
					</Typography>

					<Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
						<TooltipAvatar />
					</Box>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<TooltipAvatar />
					</Box>

					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}
					>
						LOGO
					</Typography>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
export default ResponsiveAppBar
