# Work Test

[Live Demo](https://work-test-felix.netlify.app/)

## Local Installation

```
  npm install -g gulp
  npm install 
  gulp watch # for development server
```

If there is a `node-sass`: `Failed at the node-sass@4.5.0 postinstall script.` error while installing with npm just run 

```
  rm -rf package-lock.json node_modules
  npm cache clean --force
  npm i --unsafe-perm node-sass
```
