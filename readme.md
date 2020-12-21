React Node Express Application:

Application execution -> npm run dev

We can use npx to run ngrok and have it forward traffic to port 5000 without installing anything. To do this, open a brand new terminal and run:
npx ngrok http 5000

Add the url generated from ngrok to sendgrid mail setting : For eg => http://9277aa22a637.ngrok.io/api/surveys/webhooks

Deployment done using heroku and git

URL : https://nameless-tor-18279.herokuapp.com/ | https://git.heroku.com/nameless-tor-18279.git (git repo)

Add remote origin :  git remote add heroku https://git.heroku.com/nameless-tor-18279.git

Add remote origin :  git remote add origin https://github.com/vchandwani/reactNodeApp.git

Prigin Push : git push

Heroku Push : git push heroku master

Remote URLS:

git remote -v 
heroku  https://git.heroku.com/nameless-tor-18279.git (fetch)
heroku  https://git.heroku.com/nameless-tor-18279.git (push)
origin  https://github.com/vchandwani/reactNodeApp.git (fetch)
origin  https://github.com/vchandwani/reactNodeApp.git (push)

Passport.js used : authentication middleware for Node.
npm install --save passport passport-google-oauth20

Nodemon
npm install --save nodemon

Cookie Session:
npm install --save cookie-session

React App : npx create-react-app client

Concurrently :  npm install --save concurrently

Stripe : npm install --save stripe
Send grid: npm install --save sendgrid

npm install --save lodash path-parser

In Client folder:
Proxy middleware : npm install http-proxy-middleware

In client: 
npm install --save redux react-redux react-router-dom
npm install --save axios redux-thunk
npm install --save redux-devtools-extension
npm install --save redux-form
Stripe Payment library:
npm install react-stripe-checkout

Material UI : https://material-ui.com/

materialize css: npm install materialize-css@next
