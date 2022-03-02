import { Avatar, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { css } from '@emotion/react'

export default function TooltipAvatar() {
	return (
		<Tooltip title="Open settings">
			<>
				<Typography
					css={css`
						color: #34423d;
						font-family: Poppins;
						font-style: normal;
						font-weight: 600;
						font-size: 14px;
					`}
				>
					LOGO
				</Typography>
				<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
			</>
		</Tooltip>
	)
}
