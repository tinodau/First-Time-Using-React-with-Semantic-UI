import React, {Component} from 'react'
import {Menu} from 'semantic-ui-react'
import { Container,  Input, Icon} from 'semantic-ui-react'

export default class NavbarMenu extends Component {
	state = {}
	handleItemClick = (e, { name }) => this.setState({ activeItem: name })
	render() {
	  const { activeItem } = this.state
	  return (
		 <Menu>
		 	<Container>
			   <Menu.Item
				  name='home'
				  active={activeItem === 'home'}
				  onClick={this.handleItemClick}
			   >
					<Icon name="home"/>
				  	Home
			   </Menu.Item>

			   <Menu.Item
				  name='menu1'
				  active={activeItem === 'menu1'}
				  onClick={this.handleItemClick}
			   >
				  Menu 1
			   </Menu.Item>

			   <Menu.Item
				  name='menu2'
				  active={activeItem === 'menu2'}
				  onClick={this.handleItemClick}
			   >
					Menu 2
			   </Menu.Item>

			   <Menu.Item
				  name='menu3'
				  active={activeItem === 'menu3'}
				  onClick={this.handleItemClick}
			   >
					Menu 3
			   </Menu.Item>

				<Menu.Menu position='right'>
	            <Menu.Item>
	              <Input icon='search' placeholder='Search...' />
	            </Menu.Item>
	         </Menu.Menu>
			</Container>
		</Menu>

	  )
	}
}
