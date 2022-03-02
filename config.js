module.exports = {
  defaults: {
    origin: process.env.HOST,
    prefix: "/connect",
    transport: "state",
  },
  strava: {
    key: process.env.STRAVA_CLIENT_ID,
    secret: process.env.STRAVA_CLIENT_SECRET,
    overrides: {
      redirect: {
        transport: "querystring",
        response: ["tokens"],
        dynamic: ["callback"]
      }
    }
  },
  github: {
    key: process.env.GITHUB_CLIENT_ID,
    secret: process.env.GITHUB_CLIENT_SECRET,
    overrides: {
      redirect: {
        transport: "querystring",
        response: ["tokens"],
        dynamic: ["callback"]
      }
    }
  }
}