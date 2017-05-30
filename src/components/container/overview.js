import React from 'react'
import { Grid, Image, Header, Rating } from 'semantic-ui-react'
import '../../style.css';

const Overview = () => (
	<Grid.Row>
		<Grid.Column width={4}>
			<Image src='avatar.jpg' size='medium' shape='circular' />
		</Grid.Column>
		<Grid.Column width={12} textAlign="left">
			<Header as='h2'>Full Name User</Header>
			<Header.Subheader className="Grey-text">
				Sub Full name user
			</Header.Subheader>
			<Header as='h2'><Rating maxRating={5} defaultRating={3} icon='star' size='massive'/>
				<span className="Rating-number"> 3.0</span>
			</Header>
			<Header.Subheader className="Grey-text">
				Rated by 4890 people
			</Header.Subheader>
			<br />
			<p className="Row-summary">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

			<Grid celled="internally">
				<Grid.Row  textAlign="center">
					<Grid.Column width={6}>
						<p className="Number-summary">6</p>
						<p className="Grey-text">Number</p>
					</Grid.Column>
					<Grid.Column width={5}>
						<p className="Number-summary">25</p>
						<p className="Grey-text">Number</p>
					</Grid.Column>
					<Grid.Column width={5}>
						<p className="Number-summary">5</p>
						<p className="Grey-text">Number</p>
					</Grid.Column>
				</Grid.Row>
			</Grid>

		</Grid.Column>
	</Grid.Row>
)

export default Overview
