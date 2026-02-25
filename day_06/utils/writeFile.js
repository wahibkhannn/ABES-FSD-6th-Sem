import fs from "fs/promises";

export const writeFile = async()=>{
    let message = "";
    let status =0;
    try{
       await fs.writeFile (path, JSON.stringify(Data, null,2));
        message = "user has been registered successfully";
        status = 200;
    }catch(error){
        message = "unable to register"
        status = 500;
    }
    return {message , status};
}