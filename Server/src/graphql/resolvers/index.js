import threadResolver from "./threadResolver";
import userResolver from "./userResolver";
import GraphQLDate from 'graphql-date';
import User from "../../db_models/User";
import Reply from "../../db_models/Reply";
import mongoose from "mongoose";

export default {
    Thread: {
     
        author: async ({author}) => await User.findById(author),
    },
    Reply: {
        author: async ({author}) => await User.findById(author)
    }
    ,
    Date: GraphQLDate,
    Query: {
        getThread: threadResolver.getThread,
        getThreads: threadResolver.getThreads,
    },
    Mutation: {
        createThread: threadResolver.createThread,
        updateThread: threadResolver.updateThread,
        removeThread: threadResolver.removeThread,
        signUp: userResolver.signUp
    }
}

//npm i apollo-server-express grahqpl graphql-tools {yo install those when connection imporves!}s