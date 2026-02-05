import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
    {
        name: String,
        required: true,
    },
    {
        email: String,
        required: true,
        unique: true,
    },
    {
        password: String,
        required: true,
        min: 6,
        max: 15,
    },


 { timeStemps: true, }
)

export const User = mongoose.model("User", userSchema)