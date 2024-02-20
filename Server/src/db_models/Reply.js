import mongoose, {Schema} from "mongoose";



const ReplySchema = Schema({
    // _id: {
    //     type: String,
    //     required: true
    // },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true
    }
}, {timestamps: true})

export default mongoose.model('Reply', ReplySchema);