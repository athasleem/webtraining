const clickUserAction =function(user){
    console.log("Iam action and will receive the user")
    console.log(user);
    console.log(user.first);
    return({

        type:"USER_CLICKED",
        payload:user
    })
}

export default clickUserAction;