import { clerkClient } from "@clerk/express";

//Middleware TODO: adicionar o clerk
export const authMiddleware = async (req, res, next) => {
  try {
    const userId = req.auth.userId;
    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    const response = await clerkClient.users.getUser(userId); //get user from clerk

    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
    console.log("Error in authMiddleware,", error.message);
  }
};
