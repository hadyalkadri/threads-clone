import User from "../../db_models/User";

export default {
    signUp: async (_, { username, name, verified, bio}) => await User.create({username, name, verified, bio})
    // signUp: async (_, args) => await User.create({args})
};