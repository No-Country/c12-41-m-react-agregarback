import User from "../models/user.js";

export const postUser = async (req, res) => {
    const body = req.body;
    console.log(body);
    try {
        const user = new User(body);
        await user.save();
        res.json(user);
    } catch (error) {
        throw new Error(error);
    }
}