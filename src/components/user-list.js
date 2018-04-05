import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';


class UserList extends Component{

	constructor(){
		super();
		this.state={
			siteList:[]
		}
	}
	

	render(){
		return(
				<div>
					<ul>
						{
							this.props.users.map((ele)=>{
								return (
									<li key={ele.id} onClick={() => this.props.selectUser(ele)}>{ele.firstName} {ele.lastName}</li>
									);
							})
						}
					</ul>
					
				</div>
			);
	}
}

function mapStateToProps(state){
	return {
		users:state.user
	};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		selectUser:selectUser
	},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(UserList);