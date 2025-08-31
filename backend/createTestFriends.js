import mongoose from "mongoose";
import User from "./src/models/User.js";
import "dotenv/config";

async function createTestFriends() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    // Find existing users
    const users = await User.find({}).limit(3);
    if (users.length < 2) {
      console.log("Not enough users to create friends");
      return;
    }

    // Add friends to first user
    const user1 = users[0];
    const friendIds = users.slice(1).map((u) => u._id);

    user1.friends = friendIds;
    await user1.save();

    console.log("Added friends to user:", user1.fullName);
    console.log("Friends:", friendIds);

    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

createTestFriends();
