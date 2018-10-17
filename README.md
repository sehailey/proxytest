Issue: deploying create-react-app with Express backend was working on local development server but causing Invalid Host Header in browser after deployment. I built this minimal working example to troubleshoot and to ask for help.

The official create-react-app [documentation](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#proxying-api-requests-in-development) gives instruction for proxying during development but not for production.

This was finally [solved](https://stackoverflow.com/questions/52845805/deploying-create-react-app-to-heroku-with-express-backend-returns-invalid-host-h) via Stack Overflow.
