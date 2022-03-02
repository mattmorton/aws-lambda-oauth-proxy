module.exports = {
  defaults: {
    origin: "https://7ztjdgzh3e.execute-api.ap-southeast-2.amazonaws.com",
    prefix: "/develop/connect",
    transport: "querystring"
  },
  strava: {
    key: process.env.CLIENT_ID,
    secret: process.env.CLIENT_SECRET,
    callback: "/develop/strava/callback",
    overrides: {
      client: {
        dynamic: ["callback"]
      }
    }
  }
}