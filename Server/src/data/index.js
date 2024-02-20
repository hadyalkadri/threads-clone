import {faker} from '@faker-js/faker';

import Thread from "./../db_models/Thread";
import User from "./../db_models/User";
import Reply from './../db_models/Reply';



export default async () => {
    try {
        await Thread.deleteMany();
        await User.deleteMany();
        await Reply.deleteMany();


        // const author = await User.create({
        //     // _id: faker.string.uuid(),
        //     name:  faker.person.firstName() + " " + faker.person.lastName(),
        //     username:  faker.internet.userName(),
        //     verified: Math.random() >= .5,
        //     photo: faker.image.avatar(),
        //     bio:  faker.person.bio(),
        //     link:  faker.internet.url()
        // })

        
          await Array.from({length: 5}).forEach( async () => {
              const author = await User.create({
               name: faker.person.firstName() + " " + faker.person.lastName(),
               username: faker.internet.userName(),
               verified: Math.random() >= .5,
               photo: faker.image.avatar(),
               bio: faker.person.bio(),
               link: faker.internet.url()
              })
              
              await Array.from({length: 3}).forEach(  async () => {
                const replies = await Reply.create({
                  author: author,
                  content: faker.lorem.paragraph(),
                  likes: Math.floor(Math.random() * 1000)
                })
              
     
              

              await Array.from({ length: 1 }).forEach(
                async () =>
                  await Thread.create({
                  //   _id: faker.string.uuid(),
                    author: author,
                    content: faker.lorem.paragraph(),
                    image: Math.random() <= 0.5 ? faker.image.url() : undefined,
                    // replies:   new Array(Math.floor(Math.random() * 10))
                    // .fill(null)
                    // .map((_) => async () => await Reply.create({
                    //   _id: faker.string.uuid().slice(0, 23).split("-").reverse().join(""),
                    //   author: author,
                    //   content: faker.lorem.paragraph(),
                    //   likes: Math.floor(Math.random() * 1000)
                    // })
                    // ),
                    replies: replies,
                    repliesCount: Math.floor(Math.random() * 100),
                    likesCount: Math.floor(Math.random() * 1000),
                    mention: Math.random() > 0.5,
                    mentionUser: author._id,
                  })
              )
                 
            }
            )}
          )
          

     
    }
    catch (err){
        throw err;
    }
}