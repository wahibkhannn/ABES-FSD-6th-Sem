import { register } from "module";
import {readFile} from "../utils/readFile.js";
import {readFile} from "../utils/writeFile.js";
const FILE = "../users.json";


const register = async(users, usersDetails) => {    
    const updatedData = {...users, usersDetails};
    const response = await writeFile(FILE, JSON.stringify(updatedData));
    console.log(response.message);
    return;
}

const userRegsitration = async(userDetails) => {
    const {name, email, password, gender} = userDetails;

    if(!name || !email || !password || !gender){
        console.log("All fields are required...");
        return;
    }


    const users = await readFile(FILE);
    if(users.length ===0){
        register(users, userDetails);
    }

    const existingUser = users.find((u) => u.email === email);
    if(existingUser){
        console.log("User already exists...");
        return;
    }
    register(users, userDetails);
}