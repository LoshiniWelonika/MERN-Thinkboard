import rateLimit from "../../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    // Use IP address as identifier
    const identifier = req.ip;

    const { success } = await rateLimit.limit(identifier);

    if (!success) {
      return res.status(429).json({
        message: "Too many requests, please try again later",
      });
    }

    next(); // Allow request to continue
  } catch (error) {
    console.error("Rate limit error:", error);
    res.status(500).json({ message: "Rate limiting failed" });
  }
};

export default rateLimiter;
