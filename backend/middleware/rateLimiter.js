import rateLimit from "../src/config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try {
        const { success } = await rateLimit.limit(userId);
        if (!success) {
            return res.status(429).json({
                message: "Too many requests, please try again later",
            });
        }

        next(); // Allow request to continue
    } catch (error) {
        console.log("Rate limit error:", error);
        next(error);
    }
};


export default rateLimiter;