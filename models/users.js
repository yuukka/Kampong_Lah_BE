const mongoose = require( "mongoose")

const userSchema = mongoose.Schema(
    {
        user_id: String, // clerk id
        fullName: String,
        neighbourhood: String, 
        profileImg: String, 
        profileBannerImg: String,
        bio: String,
        hometown: String, // share if youre not from Singapore
        onboardingComplete: Boolean,
        group_ids: [String], // for fast/easy reasons
    },
    { timestamps: true }
)

const User = mongoose.model('User', userSchema)
module.exports = User