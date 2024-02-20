import Thread from '../../db_models/Thread';
import User from '../../db_models/User';



export default  {
    getThread: async (_, {_id}) => await Thread.findById(_id),
    getThreads: async () => await Thread.find({}).populate('replies').sort({createdAt: -1}),
    createThread: async (_, args) => await Thread.create(args),
    updateThread: async(_, {_id, ...rest}) => {
        // try {
        //     const thread = await Thread.findOne({_id, author: author._id})
            
        //     if (!thread){
        //         throw new Error('Thread Cannot be Found!')
        //     }

        //     Object.entries(rest).forEach( ([key, value]) => {
        //         thread[key] = value;
        //     })

        //     return thread.save();
        // }
        try {
         
            const thread = await Thread.findById(_id);
            const author = await User.findById(thread.author)

            // ** I am stuck in video Part 5 in the series. 6th video from playlist. ** //

            if (thread.author.toString() == author._id.toString()) { 
                // Object.entries(rest).forEach( ([key, value]) => { thread[key] = value });
                
               thread.content = rest.content.toString();
            }
            else {
                throw new Error('Not Allowed!')
            }
           
            
            
            return thread.save();            
            
            
        }
        catch(err){
            throw err;
        }
    },
    removeThread: async(_, {_id}) => {
        try {
            const thread = await Thread.findById(_id);
            const author = await User.findById(thread.author)

            if (thread.author.toString() == author._id.toString()) { 
                await Thread.findByIdAndDelete(_id);
            }
            else {
                throw new Error('Not Allowed!')
            }

            return {
                message: 'Deleted Successfully!'
            }
        }
        catch (err){
            throw err;
        }
    } 
};

//...rest spread operator allows for additional attributes to be added into the graphql schems without 
//any modifications to the resolvers or typedefs