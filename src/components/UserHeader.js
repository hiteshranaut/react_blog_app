import React from 'react';
import { connect } from 'react-redux';
// import { fetchUser } from '../actions';

class UserHeader extends React.Component {

	// componentDidMount() {
	// 	// console.log()
	// 	this.props.fetchUser(this.props.userId);
	// }
	render(){
		
		const { user } = this.props;

		if (!user) {
			return null;
		}
		// console.log(user);
		return <div className="header">{user.name}</div>;
	}
}

const mapStateToProps = (state , ownProps) => {
	// console.log(state);
	const user = state.users.find((user) => {
			return user.id === ownProps.userId
		});

	return {user: user};

}

export default connect(mapStateToProps)(UserHeader);