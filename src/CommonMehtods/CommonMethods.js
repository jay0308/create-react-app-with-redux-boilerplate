import {appConstants} from "../Constants/AppConstants";

export const imageValidation = (file,data) => {

	if (!(file.type === "image/jpeg" || file.type === "image/jpg")) {
        console.log(file.type);
        return {"isError":true, "errorMsg":appConstants.imageValidationformatMsg};
    }

    if ((data.currentTarget.height > "413" || data.currentTarget.width > "531")) {
        console.log(file.type);
        return {"isError":true, "errorMsg":appConstants.imageValidationDimensionformatMsg};
    }

    var size = formatFileSize(file.size);

    if (size.indexOf('MB') !== -1 || size.indexOf('GB') !== -1 || size.indexOf('TB') !== -1 || size.indexOf('PB') !== -1
        || size.indexOf('EB') !== -1 || size.indexOf('ZB') !== -1 || size.indexOf('YB') !== -1
    ) {
        var sp = size.split(' ');
        if (sp[1] === 'MB') {
            if (parseFloat(sp[0]) > 10) {
                
                return { "errorMsg":appConstants.imageValidationSizeMsg ,"isError":true };
            }
        }
        else{
            this.refs.userImgUploaderErr.setAttribute('class', 'error-msg active');
            return { "errorMsg": appConstants.imageValidationSizeMsg,"isError":true };
        }

    }
    return {"isError":false};
};

const formatFileSize = (bytes, decimalPoint) =>{
    if (bytes == 0) return '0 Bytes';
    var k = 1000,
        dm = decimalPoint || 2,
        sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

export function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";path=/";
};

export function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};

export function createAuthToken(requestUri,timestamp,requestMethod){
    var rtitbAppInfo = appConstants.rtitbAppInfo;
    
    // var requestUri = apiUrl.substr(apiUrl.lastIndexOf('/'));
    var tokenstring = rtitbAppInfo + timestamp + requestMethod.toLowerCase() + requestUri;
    var hash = window.CryptoJS.HmacSHA1(tokenstring, appConstants.secretKey);
    var encryptedtext = window.CryptoJS.enc.Base64.stringify(hash);
    return encryptedtext;
}