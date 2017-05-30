import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import Availibility from './availibility'
import AccordionContent from './accordion'
import Pricing from './sidebar'
import Overview from './overview'
import '../../style.css';

const MainContainer = () => (
  <Container>
	<Grid celled>
	  <Grid.Row>

		 <Grid.Column width={11}>
			<Grid celled="internally">
				<Overview/>
			</Grid>


				<Grid.Row>
					<Availibility/>
				</Grid.Row>

				<hr/>

				<Grid.Row>
				<Grid celled="internally">

					<Grid.Column width={8}>
						Lorem ipsum dolor sit amet
					</Grid.Column>
					<Grid.Column width={8} textAlign="left">
						<AccordionContent/>
					</Grid.Column>
				</Grid>
				</Grid.Row>

		</Grid.Column>


		<Grid.Column width={5} textAlign="left" >
			<Pricing/>
		</Grid.Column>

	  </Grid.Row>
	</Grid>
  </Container>
)

export default MainContainer
