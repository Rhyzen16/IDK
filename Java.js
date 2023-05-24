// ES6 Modules

import { fetchUser, fetchPosts } from './api.js';

// Async/Await

async function getUserPosts(userId) {

  try {

    const user = await fetchUser(userId);

    const posts = await fetchPosts(userId);

    return { user, posts };

  } catch (error) {

    console.error(error);

    throw error;

  }

}

// Destructuring Assignment

const { user, posts } = await getUserPosts(123);

// Optional Chaining

const username = user?.name;

// Nullish Coalescing Operator

const postCount = posts?.length ?? 0;

// Spread Operator

const mergedArray = [...user.hobbies, ...user.skills];

// Template Literal

console.log(`User ${username} has ${postCount} posts.`);

// Arrow Function

const filteredPosts = posts.filter(post => post.likes > 10);

// Array Methods: Map, Filter

const postTitles = filteredPosts.map(post => post.title);

const popularPosts = filteredPosts.filter(post => post.views > 1000);

// Object Literal Enhancements

const newPost = {

  title: 'New Post',

  content: 'This is a new post content.',

  userId,

  date: new Date(),

};

// Set

const uniqueTags = new Set(posts.flatMap(post => post.tags));

// Promise.all

const fetchData = async () => {

  const [userData, postData] = await Promise.all([fetchUser(userId), fetchPosts(userId)]);

  console.log(userData, postData);

};

fetchData();

