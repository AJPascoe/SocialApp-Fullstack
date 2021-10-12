const router = require("express").Router();
const {
  newPost,
  updatePost,
  delPost,
  likePost,
  timelinePost,
  allPost,
  userPost,
} = require("../controlers/post");
const Post = require("../models/Post");
const User = require("../models/User");

//create a post

router.post("/", newPost);

//update a post

router.put("/:id", updatePost);

//delete a post

router.delete("/:id", delPost);

//like and dislike a post

router.put("/:id/like", likePost);

//get a post

router.get("/:id", userPost );

//get timeline posts

router.get("/timeline/:userId", timelinePost);

//gets all post
router.get("/profile/:username", allPost)

module.exports = router;
