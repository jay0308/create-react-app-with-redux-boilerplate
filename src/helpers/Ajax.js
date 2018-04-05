
import axios from 'axios';
import {createAuthToken} from '../CommonMehtods/CommonMethods'
import {appConstants} from '../Constants/AppConstants';

export function getImage(data){
	let timestamp = new Date().getTime();
    let apiUri = appConstants.apiBaseUrl+'getprofilelogoimages/';
    let apiUrl = appConstants.apiIpPort + apiUri;
    let authToken = createAuthToken(apiUri , timestamp, "post");
    let headers={
        authentication:authToken,
        timestamp:timestamp,
        rtitbclienttype:"Web"
    };
    console.log("Ajax");
    return axios.post(apiUrl,data ,{headers:headers} , {timeout :120000});
}