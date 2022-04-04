var GoogleStrategy = require('passport-google-oauth20').Strategy;

const passport = require("passport");

const GOOGLE_CLIENT_ID = "436291002732-81v7rqibv0l1amf00etama6s0ndkde1b.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile)
  }
));