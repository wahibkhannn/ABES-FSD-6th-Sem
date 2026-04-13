import dbConnect from "../db.js";

const updateOne = async () => {
    try {
        const db = await dbConnect();
        const userCollection = db.collection("users");

        const updateUser = await userCollection.updateOne(
            { email: "abc@gmail.com" },
            { $set: { password: "123456@abcde" } }
        );

        console.log("Updated Count:", updateUser.modifiedCount);
    } catch (error) {
        console.error("Error in updateOne:", error);
    }
};

const findOne = async () => {
    try {
        const db = await dbConnect();
        const userCollection = db.collection("users");

        const user = await userCollection.findOne({ email: "abc@gmail.com" });

        console.log("User Found:", user);
    } catch (error) {
        console.error("Error in findOne:", error);
    }
};

const deleteOneUser = async () => {
    try {
        const db = await dbConnect();
        const userCollection = db.collection("users");

        const result = await userCollection.deleteOne({
            email: "abc@gmail.com"
        });

        console.log("Deleted Count (One):", result.deletedCount);
    } catch (error) {
        console.error("Error in deleteOne:", error);
    }
};

const deleteManyUsers = async () => {
    try {
        const db = await dbConnect();
        const userCollection = db.collection("users");

        const result = await userCollection.deleteMany({
            password: "123456@abcde"
        });

        console.log("Deleted Count (Many):", result.deletedCount);
    } catch (error) {
        console.error("Error in deleteMany:", error);
    }
};


updateOne();
findOne();
deleteOneUser();
deleteManyUsers();