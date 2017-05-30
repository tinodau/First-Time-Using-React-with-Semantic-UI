import React, { Component } from 'react'
import { Header, Form, Radio, Button, Icon, Feed, Container } from 'semantic-ui-react'
import '../../style.css';

export default class Pricing extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
		<div>
	      <Form className="Sidebar-margin-top">
				<Form.Field>
					<Header as="h2">
						Pricing
					</Header>
					<span className="Grey-text">You select: <b>{this.state.value}</b></span>
				</Form.Field>
				<Form.Field>
					<div className="Price-sidebar">
						<Radio
							label='On Demand $30 / hour'
							name='radioGroup'
							value='hourly'
							checked={this.state.value === 'this'}
							onChange={this.handleChange}
							/>
						<Radio
							label='Fulltime $500 / month'
							name='radioGroup'
							value='monthly'
							checked={this.state.value === 'that'}
							onChange={this.handleChange}
							/>
					</div>

				</Form.Field>
	      </Form>
			<div className="Button-pricing">
				<Button color='red' fluid>
					BOOK
				</Button>
				<hr/>
				<Button color='green' fluid>
					INTERVIEW
				</Button>
			</div>
			<Feed >
			   <Feed.Event>
			      <Feed.Label>
			        <img src='avatar.jpg' alt="avatar"/>
			      </Feed.Label>
			      <Feed.Content>
			        <Feed.Summary>
			          <Icon disabled name='quote left' size="large" />
						 <span className="Comment-text">
						 	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat (...)
						 </span>
			        </Feed.Summary>
			      </Feed.Content>
			   </Feed.Event>

 			   <Feed.Event>
 			      <Feed.Label>
 			        <img src='avatar.jpg' alt="avatar"/>
 			      </Feed.Label>
 			      <Feed.Content>
 			        <Feed.Summary>
 			          <Icon disabled name='quote left' size="large" />
 						 <span className="Comment-text">
 						 	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat (...)
 						 </span>
 			        </Feed.Summary>
 			      </Feed.Content>
 			   </Feed.Event>

				<hr/>

				<Container textAlign='center'>
					<a href="" className="Comment-view-all">View All </a> <Icon disabled name='angle double right'/>
				</Container>

			</Feed>
		</div>

    )
  }
}
