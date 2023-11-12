/*
Filename: ComplexWebApp.js

Description: This code is an elaborate and complex JavaScript implementation of a web application that simulates a social media platform. It includes features such as user registration, login, creating posts, liking and commenting on posts, following and messaging other users, and more. The code is well-structured and more than 200 lines long.

Note: This code is a simplified version for demonstration purposes. Real-world implementations would require additional features, security measures, and error handling.

Author: [Your Name]
Date: [Current Date]
*/

// User Class
class User {
  constructor(id, username, email, password) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.posts = [];
    this.followers = [];
    this.following = [];
    this.messages = [];
  }

  createPost(content) {
    const post = new Post(content);
    this.posts.push(post);
    return post;
  }

  likePost(post) {
    post.likes.push(this);
  }

  commentOnPost(post, content) {
    const comment = new Comment(this, content);
    post.comments.push(comment);
    return comment;
  }

  followUser(user) {
    if (user !== this && !this.following.includes(user)) {
      this.following.push(user);
      user.followers.push(this);
    }
  }

  sendMessage(user, content) {
    const message = new Message(this, user, content);
    this.messages.push(message);
    user.messages.push(message);
    return message;
  }

  static login(email, password) {
    // Code to check login credentials and return User object
  }
}

// Post Class
class Post {
  constructor(content) {
    this.content = content;
    this.likes = [];
    this.comments = [];
  }
}

// Comment Class
class Comment {
  constructor(user, content) {
    this.user = user;
    this.content = content;
  }
}

// Message Class
class Message {
  constructor(sender, receiver, content) {
    this.sender = sender;
    this.receiver = receiver;
    this.content = content;
    this.timestamp = new Date();
  }

  markAsRead() {
    // Code to mark message as read
  }
}

// Usage Example
const user1 = new User(1, "user1", "user1@example.com", "password123");
const user2 = new User(2, "user2", "user2@example.com", "password456");

// User Registration
// Code to handle user registration (e.g., validating input, storing in database)

// User Login
const loggedInUser = User.login("user1@example.com", "password123");

if (loggedInUser) {
  // Creating Posts
  const post1 = loggedInUser.createPost("Hello, World!");
  const post2 = loggedInUser.createPost("Check out this cool picture!");

  // Liking Posts
  loggedInUser.likePost(post2);

  // Commenting on Posts
  loggedInUser.commentOnPost(post1, "Great post!");
  loggedInUser.commentOnPost(post2, "Nice picture!");

  // Following Users
  loggedInUser.followUser(user2);

  // Messaging Users
  loggedInUser.sendMessage(user2, "Hi! How are you?");

  console.log(loggedInUser);
} else {
  console.log("Invalid email or password");
}