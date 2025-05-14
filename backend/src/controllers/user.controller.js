import User from "../models/User";

export async function getRecommendedUsers(req,res) {
  try {
    const currentUserId = req.user.id;
    const currentUser = req.user;
    
    const recommendedUsers = await User.find({
      $and: [
        {_id: {$ne: currentUserId}}, //exclude current user
        {$id: {$nin: currentUser.friends}}, //exclude current user's friends
        {isOnboarded: true}
      ]
    })

    res.status(200).json({success: true, recommendedUsers}) 
  } catch(error) {
    console.log("Error in getRecommendedUsers controller",error);
    res.status(500).json({message: "Internal server error"})
  }
}

export async function getMyFriends(req,res) {
  try {

  } catch(error) {

  }
}
