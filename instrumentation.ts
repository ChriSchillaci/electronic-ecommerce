import dbConnect from "./utils/db";

export async function register() {
    try {
        await dbConnect();
        console.log("registered")
    } catch (error) {
        console.error(error);
    }
}