import { faker } from '@faker-js/faker';
import {Thread, User} from '../types/threads';


export const createRandomFollower = (): User => {
    const id = faker.string.uuid();
    const name = faker.person.firstName() + " " + faker.person.lastName();
    const username = faker.internet.userName();
    const verified = Math.random() >= .5;
    const photo = faker.image.avatar();
    const bio = faker.person.bio();
    const link = faker.internet.url();

    return {
        id, name, username, verified, photo, bio, link
    }
}

export const createRandomUser = (): User => {
    const id = faker.string.uuid();
    const name = faker.person.firstName() + " " + faker.person.lastName();
    const username = faker.internet.userName();
    const verified= Math.random() >= .5;
    const photo= faker.image.avatar();
    const bio = faker.person.bio();
    const link = faker.internet.url();
    const followers = new Array(Math.floor(Math.random() * 10))
    .fill(null)
    .map((_) => createRandomFollower());

    return { id ,name, username, verified, link, photo, bio, followers };
}

export const createRandomThread = (): Thread => {
    const author = createRandomUser();
    const mentionUser = createRandomUser();

    return {
        id: faker.string.uuid(),
        author,
        content: faker.lorem.paragraph(),
        image: Math.random() <= .5 ? faker.image.url() : undefined,
        replies: new Array(Math.floor(Math.random() * 10))
        .fill(null)
        .map((_) => ({
            id: faker.string.uuid(),
            author: createRandomUser(),
            content: faker.lorem.paragraph(),
            likes: Math.floor(Math.random() * 1000),
            createdAt: faker.date.recent().toISOString(),
        })),
        repliesCount: Math.floor(Math.random() * 100),
        likesCount: Math.floor(Math.random() * 1000),
        mention: Math.random() > 0.5,
        mentionUser,
        createdAt: faker.date.recent().toISOString()
    }
}


export const generateThreads = () => {
    return new Array(50).fill(null).map((_) => createRandomThread());
}