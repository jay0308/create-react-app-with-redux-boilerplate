export default function(state=null,action){

	switch(action.type){
        case "USER_SELECTED":
            return action.payload
        break;
        default:
            console.log("Wrong action");
        break;
    }

    return state;
}