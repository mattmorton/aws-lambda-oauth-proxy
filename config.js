module.exports = {
  defaults: {
    origin: "https://7ztjdgzh3e.execute-api.ap-southeast-2.amazonaws.com",
    prefix: "/connect",
    transport: "state"
  },
  strava: {
    key: process.env.CLIENT_ID,
    secret: process.env.CLIENT_SECRET,
    callback: "/callback",
    overrides: {
      client: {
        dynamic: ["callback", "transport"]
      }
    }
  }
}