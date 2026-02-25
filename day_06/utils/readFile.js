import fs from "fs/promises";

export const readFile = async (path) => {
    try {
        const data = await fs.readFile(path, "utf-8");
        return JSON.parse(data);
    } catch(error){
        console.log("Unable to read data.", error); 
    }
}