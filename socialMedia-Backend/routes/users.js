const router = require("express").Router();
const {
  updateUser,
  delUser,
  getUser,
  followUser,
  unfollowUser,
  getFriend,
} = require("../controlers/user");
const User = require("../models/User");

//Update user
router.put("/:id", updateUser);

//Delete user

router.delete("/:id", delUser);

//Get user

router.get("/:id", getUser);

//follow a user
router.put("/:id/follow", followUser);

//unfollow a user
router.put("/:id/unfollow", unfollowUser);


//gets friends
router.get("friends/:userId", getFriend);

module.exports = router;
