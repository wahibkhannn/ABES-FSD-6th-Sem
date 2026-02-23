import {readFile} from "../utils/readfile.js";
const FILE = new URL("../users.json", import.meta.url);
const userLogin = async (userdetails) => {
    const { email, password } = userdetails;

    const users = await readFile(FILE);
    if (!Array.isArray(users) || users.length === 0){
        console.log("No users found. Please register first.");
        return;
    }


    const user = users.filter((u) => u.email === email);
    if (user.length === 0){
        console.log("User not found. Please register first.");
        return;
    }

    user[0].password === password ?
     console.log("Login successful.") :
     console.log("Incorrect password. Please try again.");

}

userLogin({email: "aleguey0@deliciousdays.com", password: "nR8>V!H\\BUL&f4D"});