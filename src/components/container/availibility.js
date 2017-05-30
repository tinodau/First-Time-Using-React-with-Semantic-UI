import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import '../../style.css';


export default class Availibility extends Component {
  state = { activeItem: 'availibility1' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className="Margin-top">
        <Menu attached='top' tabular>
          <Menu.Item name='availibility1' active={activeItem === 'availibility1'} onClick={this.handleItemClick}>
			 	Availibility 1
			 </Menu.Item>
			 <Menu.Item name='availibility2' active={activeItem === 'availibility2'} onClick={this.handleItemClick}>
			 	Availibility 2
			 </Menu.Item>
			 <Menu.Item name='availibility3' active={activeItem === 'availibility3'} onClick={this.handleItemClick}>
			 	Availibility 3
			 </Menu.Item>

        </Menu>

        <Segment attached='bottom' className="Borderless" textAlign="left">
          <p className="">
			 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			 	<br/>
			Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
			<br/>
			Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
			 </p>
        </Segment>
      </div>
    )
  }
}
