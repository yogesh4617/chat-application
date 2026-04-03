import ratelimit from "express-rate-limit";

import rateLimit from "express-rate-limit";

// Login limiter (5 requests)
export const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: {
    message: "Too many login attempts, please try again later",
  },
});

// Signup limiter (10 requests)
export const signupLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: {
    message: "Too many signup attempts, please try again later",
  },
});

// limiter for update profile (10 requests per hour)
export const updateProfileLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10,
  message: {
    message: "Too many profile update attempts, please try again later",
  },
});

// General API limiter (100 requests per minute)
export const apiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // limit each IP to 100 requests per windowMs
    message: { message: "Too many requests, please try again later" },
});

