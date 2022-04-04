var GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

const passport = require("passport");

const GOOGLE_CLIENT_ID = "436291002732-81v7rqibv0l1amf00etama6s0ndkde1b.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "934f8b77cc0f00202c14";
GITHUB_CLIENT_SECRET = "5c4454674a7659e37aaf88a4482b3b8a9bb5d8ea";


FACEBOOK_APP_ID = "495624141468588";
FACEBOOK_APP_SECRET = "1b649cba49484e5664179e9b63572f11";
 
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile)
  }
));

passport.use(
    new GithubStrategy(
      {
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: "/auth/github/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        done(null, profile);
      }
    )
  );

passport.use(new FacebookStrategy({
clientID: FACEBOOK_APP_ID,
clientSecret: FACEBOOK_APP_SECRET,
callbackURL: "http://localhost:3000/auth/facebook/callback"
},
function(accessToken, refreshToken, profile, done) {
    done(null, profile)
}
));

passport.serializeUser((user, done) => {
    done(null, user);
  });
  
passport.deserializeUser((user, done) => {
done(null, user);
});