import mongoose from 'mongoose';
import constants from './constants';



mongoose.Promise = global.Promise;

mongoose.set('debug', true);

try{
    mongoose.connect(constants.db_url);
}
catch (err){
    mongoose.createConnection(constants.db_url)
}

mongoose.connection
    .once('open', () => console.log('Db is connected'))
    .on('error', e => {
        throw e;
    });