import mongoose, {Schema} from "mongoose";



const ThreadSchema = Schema({
    // _id: {
    //     type: String,
    //     // required: true
    // },
    author: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // required: true
    }],
    content: {
        type: String,
        // required: true
    },
    image: {
        type: String
    },
    replies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reply'
    }],
    repliesCount: {
        type: Number
    },
    likesCount: {
        type: Number
    },
    mention: {
        type: Boolean
    },
    mentionUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: String
    }
}
, {timestamps: true})

export default mongoose.model('Thread', ThreadSchema);