import 
const changePassword = (userDetails, FILE)=> {
    const { email, password} = userDetails;
    if (!email || !password)
        return { message: "All Fields are required"};

    const users = await readFile(File);
    if(users.length===0) 
        return {message: "User is not existing"};

    const existingUser =
     users.filter((user)=> user.email === userDetails.email)
}