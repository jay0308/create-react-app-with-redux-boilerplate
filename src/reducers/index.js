import {combineReducers} from "redux";
import userInfo from './user-reducer';
import selectedUser from './user-info-reducer';

const allReducers = combineReducers(
	{
		user:userInfo,
		selectUser:selectedUser
	}
);

export default allReducers;
