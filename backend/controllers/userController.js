import User from '../models/userModels.js'

export const createUser = async (req, res) => {

    try {
        const { name, email, password } = req.body
        const user = await User.find({ name, email, password })

        res.status(201).json(user)
    } catch (error) {
        res.status(404).json({ message: "Internal server error." })
    }
}


export const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body
        const user = await User.find({ email, password })

        res.status(201).json(user)
    } catch (error) {
        res.status(404).json({ message: "Internal server error." })
    }
}