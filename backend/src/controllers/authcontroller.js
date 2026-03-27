import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { generateToken } from "../configs/jwtUtils.js";
import { sendWelcomeEmail } from "../Emails/emailHandler.js";
import dotenv from "dotenv";
dotenv.config();

export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "all fields are required" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "password must be at least 6 characters" });
    }

    //check if emails valid: regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "invalid email format" });
    }

    //check if email already exists in db
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "email already exists" });
    }

    //hash password

    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);
    // or
    const hasehedpassward = await bcrypt.hash(password, 10);

    //create user
    const newUser = new User({
      fullName,
      email,
      password: hasehedpassward,
    });

    if (newUser) {
      const savedUser = await newUser.save();
      const token = generateToken(newUser._id, res);

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });

      //send welcome email
      try{
        await sendWelcomeEmail(
          savedUser.fullName,
          savedUser.email,
          process.env.WELCOME_EMAIL_LINK
        );
      }catch(error){
        console.log("error in sending welcome email", error);
      }


    }
  } catch (error) {
    console.log("error in signup controller", error);
    res.status(500).json({ message: "internal server error" });
  }
};
