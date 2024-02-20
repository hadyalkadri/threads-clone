import mongoose, {Schema} from "mongoose";



const UserSchema = Schema({
    //for any errors happening with creating object in mongoDB. Just remove the id and let the db handle it.
    // _id: {
    //     type: String,
    //     // required: true
    // },
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        required: true
    },
    photo: String,
    bio: String,
    link: String,
    followers: [{
        type: mongoose.Schema.Types.Array,
        ref: 'User'
    }],

}, {timestamps: true})

export default mongoose.model('User', UserSchema);