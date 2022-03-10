module.exports = {
  defaults: {
    origin: process.env.HOST,
    transport: "state",
  },
  strava: {
    key: process.env.STRAVA_CLIENT_ID,
    secret: process.env.STRAVA_CLIENT_SECRET,
    scope: ['read', 'read_all', 'profile:read_all', 'activity:read', 'activity:read_all'],
    custom_params: { "approval_prompt": "force" },
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