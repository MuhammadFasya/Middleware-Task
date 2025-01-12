const validApiKey = "12345";

const userAuth = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (!apiKey) {
    return res.status(401).json({ message: "Access Denied" });
  }

  if (apiKey !== validApiKey) {
    return res.status(403).json({ message: "Invalid API Key" });
  }

  next();
};

module.exports = userAuth;
