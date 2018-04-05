import React,{Component} from 'react';
import {connect} from 'react-redux';

class UserInfo extends Component{
	
	render(){
		return(
                this.props.selectUser!=null?
				<div>
                    <h2>{this.props.selectUser.firstName} {this.props.selectUser.lastName}</h2>
                    <p><b>Age: </b> {this.props.selectUser.age}</p>
                    <p>{this.props.selectUser.bio}</p>
                </div>
                :
                <div>
                    Oops, no user selected...
                </div>
			);
	}
}

function mapStateToProps(state){
	return {
		selectUser:state.selectUser
	};
}



export default connect(mapStateToProps)(UserInfo);