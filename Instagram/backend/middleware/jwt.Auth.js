const Jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtAuth = (req, res, next) => {
    const token = (req.cookies && req.cookies.token);
    // const token = req.headers.authorization && req.headers.authorization.split(' ')[1]; // If using Bearer token in headers
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Access denied. No token provided."
        });
    }

    try {
        const decoded = Jwt.verify(token, process.env.SECRET);
        req.user = decoded; // Attach user info to request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.error("Authentication error:", error);
        return res.status(400).json({
            success: false,
            message: "Invalid token."
        });
    }
}

module.exports = jwtAuth;