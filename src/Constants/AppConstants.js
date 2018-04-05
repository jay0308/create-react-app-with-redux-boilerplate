export const appConstants = {
    //staging
   // apiBaseUrl: "http://54.70.164.4:8080/rtitb_staging/api/",

    //QA
    apiIpPort:"http://52.41.195.107:8080",
    apiBaseUrl: "/rtitbserver/api/",

    //Local
    //apiBaseUrl: "http://192.168.1.113:8080/rtitb/api/",

    //UAT
    //apiBaseUrl:"http://54.70.164.4:8080/rtitbserver/api/",

    //APP authentication key
    rtitbAppInfo:"yzWMhEY-XTmS-FLFs0Ko-wUq6laJ3-SwOuNm",
    secretKey:"aqFAt0g-ajzGQnbO3A-1o5KGzj-QlpksJBDy",

    // APIs
    loginApi: "loginadmin",
    forgetPasswordApi: "forgotpassword",
    changePasswordApi: "changeadminpassword",
    compantListApi: "getcompanylist",
    getsuperuserlistApi:"getsuperuserlist",
    superUserViewProfileApi:"viewsuperuserprofile",
    companyProfileApi: "viewcompanydetails",
    companyStatusApi: "getcompanystatusdetails",
    countryListApi: "getcountrylist",
    superUserProfileModifyApi:"modifysuperuser",
    createSuperUserApi:"createsuperuser",
    createCompanyApi: "createcompany",
    ticketListApi:"getticketslist",
    ticketStatusApi:"getticketsstatuslist",
    ticketViewApi:"getticketdetail ",
    ticketUpdateApi:"modifyticketdetail",
    siteListApi: "getsites",
    noteListApi: "getnotes",
    viewNotesApi: "viewnote",
    createNoteApi: "createnote",
    updateCompanyApi: "modifycompany",
    sendSuperUserCredentialApi:"sendsuperusercredentials",
    siteManagerListApi:"getsitemanagerlist",
    siteManagerDetailsApi:"getsitemanagerdetails",
    siteManagerModifyApi:"modifysitemanager",
    createSiteManagerApi:"createsitemanager",
    sendSiteManagerCredentialApi:"sendsitemanagerdentials",
    subscripitionManagementDetailsApi:"getsubscriptioninfo",
    siteStatusListApi: "getsitesstatusoptions",
    createSiteApi: "createsite",
    getInfotoCreateSiteApi : "getinfotocreatesite",
    viewSiteDetailsApi: "viewsitedetail",
    resetPasswordApi:"resetsitemanagerpassword",
    deleteApi:"archivesitemanager",
    wipeoutcandidate :"wipeoutcandidate",
    sendEmailApi:"sendsitemanagerdentials",
    resetSuperUserPasswordApi:"resetsuperuserpassword",
    sendSuperUserEmailApi:"sendsuperusercredentials",
    deleteSuperUserApi:"archivesuperuser",
    updateSiteApi: "modifysite",
    subscripitionManagementModifyApi:"modifysubscriptioninfo",
    adminListApi: "getadminlist",
    emailCertificateApi: "getemailcertificates",
    companyStatusListFilterApi : "getcompanystatuslist",
    siteStatusListFilterApi : "getsitesstatusdetails",
    getFutureCourses: "getfuturecourses",
    getCandidateWipeOut:"getcandidatestowipeout",
    adminLoginCode: "101",
    listSearchStartCharLimit : 2,
    itemsCountPerPage : 10,
    pageRangeDisplayed : 5,
    firstPageText : "First",
    lastPageText : "Last",
    companyIdLength : 9,
    ticketStatusNew : 'new',
    getcoursedetailsforweb: 'getcoursedetailsforweb',
    accreditationCatInCenter : 1,
    accreditationCatInHouse : 2,
    accreditationOnCustPremise : 3,

    successResponseCode: 0,
    passwordIncorrectCode: 7014,
    invalidUserCode: 7013,
    invalidPasswordCode: 7021,
    invalidOldPasswordCode: 4023,
    licenseDetailsErrorCode: 4003,
    forgotPasswordWrongEmail: 4015,
    
    //emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    emailRegex: /^[a-zA-Z0-9-_.]+@[^\s@]+\.[^\s@]+$/,
    alphaSpecialCharRegex: /^[a-zA-Z!”$%&’ ()*\+,\/;\[\\\]\^_`{|}~]+$/,
    numberRegex: /^[0-9]*$/,
    phoneNumberRegex: /^[0-9()+-]+$/,
    // messages
    networkErrorMsg:"You don't seem to be connected to the internet, Please try again!",
    numberNotAllowedErrorMsg : "Oops! We can not have numbers in name",
    numberNotAllowedTitleErrorMsg : "Oops! We can not have numbers in title",
    emailFormatErrorMsg:"Something isn't quite right with this email address - can you check it?",
    emailFormatErrorMsg1: "Oops! It seems there is something wrong with the email you have entered",
    usernameErrorMsg: "Oops! Can we have your username?",
    passwordErrorMsg: "Oops! Can we have your password?",
    emailErrorMsg: "Try again - your username is your email address",
    defaultErrorMsg: "Something went wrong!",
    invalidUserMsg: "Oops! This user does not exist",
    superUserViewProfileApi:"viewsuperuserprofile",
    imageValidationformatMsg:"Oops! It looks like this image won't work, please check the format and try again",
    imageValidationDimensionformatMsg:"Oops! It looks like this image won't work, please check the dimension and try again",
    imageValidationSizeMsg:"Oops! Image Size is greater than 10 Mb",
    imageUploadError:"Oops! there is an error in uploading image",

    detailRequiredMsg: "Oops! We need some details",
    oldPasswordRequiredMsg: "Please let us know your old password",
    newPasswordRequiredMsg: "Please let us know your new password",
    passwordLengthErrorMsg: "Your password needs to be 6 characters or more",
    passwordAlphaNumericMsg: "Your password needs to be alphanumeric",
    newPasswordAgainMsg: "Please enter your new password again",
    passwordDiffErrorMsg: "Your confirmed password does not match",
    invalidOldPasswordMsg: "Oops! Can we have your valid old password",
    invalidNewPasswordMsg: "New Password can't be existing Password !",
    passwordChangeSuccessMsg: "Password has been changed !",

    superUserNameErrMsg:"Oops! The super user does not have a name",
    superUserEmailErrMsg:"Oops! Can we have the super user's Email ID?",
    superUserPhoneErrMsg:"Oops! The super user does not have a phone number",
    superUserJobTitleErrMsg:"Oops! The super user does not have a job title",

    companynameErrorMsg : "Oops! Can we have the company name ?",
    companyIdErrorMsg : "Oops! Can we have the Company ID ?",
    companyIdLengthErrMsg: "Oops! Please re-check the company ID",
    townRequiredMsg: "Oops! Can we have the town?",
    townRecheckdMsg:"Oops! Please re-check the town",
    postcodeRequiredMsg: "Oops! Can we have the postcode?",
    buildingNameErrorMsg: "Oops! Can we have the building name/number?",
    streetErrorMsg: "Oops! Can we have the street?",
    countryErrorMsg: "Oops! Can we have the country?",
    appTypeErrorMsg: "Oops! Please choose Professional/Basic",
    companyStatusErrorMsg: "Oops! Can we have the company status?",
    extranetUserNameErrorMsg: "Oops! Can we have the extranet username?",
    extranetPasswordErrorMsg: "Oops! Can we have the extranet password?",
    norsOptionErrorMsg:"Oops! Can we have NORS option?",
    pocNameErrorMsg: "Oops! Can we have Point of contact's name ?",
    pocNumberErrorMsg: "Oops! Can we have Point of contact's phone ?",
    pocEmailErrorMsg: "Oops! Can we have Point of contact's email ?",
    pocJobTitleErrorMsg: "Oops! Can we have Point of contact's job title ?",

    siteManagerNameErrMsg:"Oops! The site manager does not have a name",
    siteMangerEmailErrMsg:"Oops! Can we have the site manager's Email ID?",
    siteManagerPhoneErrMsg:"Oops! Can we have the site manager's phone number?",
    siteManagerJobTitleErrMsg:"Oops! Can we have the site manager's job title?",

    addNoteAreaErrMsg:"Oops! Can we have note description",

    liscNoErrMsg:"Oops! Please provide licence no.",
    lisceExpiryErrMsg:"Oops! Can we have the expiry date of licences?",
    liscNoExtendErrMsg:"Oops! It seems that you do not have enough licences",
    liscWithZeroErrMsg:"Are you sure this site has 0 licence?",
    companyLiscWithZeroErrMsg:"Are you sure this company has 0 licence?",

    siteNameErrorMsg : "Oops! Can we have the site name?",
    siteIdErrorMsg : "Oops! Can we have the Site ID?",
    siteIdLengthErrMsg: "Oops! Please re-check the site ID",
    siteStatusErrorMsg: "Oops! Can we have the site status?",
    accreCatErrorMsg: "Oops! Can we have the site's accreditation category ?",
    accreCourseErrorMsg : "Oops! Can we have the site's accredited courses ?",
    liscRequiredMsg:"Please provide licence details for company",
    emailCertificateErrorMsg: "Oops! You need to select at least one email cert option",
    recpEmailRequiredMsg:"Oops! Can we have the recipient of training record pdf?",

    categoryCombinationMsg : "Oops! You seem to have selected an incorrect combination of accreditation categories",

    noCompany : "You haven't created any company yet",
    noSite	: "You haven't created any sites for this company yet",
    noSuperUser : "You haven't created a Super User for this company yet",
    noSiteManager : "You haven't created a Site Manager for this site yet",
    noNotes : "You haven't added a Note for this company yet",
    noTickets :"No tickets have been generated at the Instructor's end",
    noResultFoundMsg: "Oops! No results found",

    noLiscenceMsg: "Are you sure want create company with no licence?",
    noLiscenceUpdateMsg: "Are you sure want modify company with no licence?",
    noSiteLiscenceMsg: "Are you sure you want to create a site without any licences?",
    noSiteLiscenceUpdateMsg: "Are you sure you want to modify site without any licences?",
    newTicketStatusNotAllowedMsg: "Oops! You can't change the status of a ticket back to 'New'",

    chagePasswordCnfrmText:"A new password has been sent to your registered Email ID",
    credentialSentText:"Credentials has been sent to the registered Email ID",
    siteManagerResetPasswordConfirmMsg: "Are you sure want to reset site manager password?",

    mobileNumberRecheckdMsg:"Oops! Please re-check the phone number"


};