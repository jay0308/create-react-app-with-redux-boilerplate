export const selectUser=(user)=>{
    console.log("User clicked "+user.firstName);
    return{
        type:"USER_SELECTED",
        payload:user
    }
};

