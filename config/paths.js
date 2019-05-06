const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

module.exports = {
  dist: resolveApp('dist'),
  files: resolveApp('dist/arquivos'),
  src: resolveApp('src'),
  public: resolveApp('public'),
  checkoutJs: resolveApp('src/js/checkout-custom.js'),
  indexJs: resolveApp('src/js/index.js'),
  homeJs: resolveApp('src/js/pages/home.js'),
  minicartJs: resolveApp('src/js/components/minicart.js'),
  countdownJs: resolveApp('src/js/components/countdown.js'),
  authorsJs: resolveApp('src/js/components/authors/index.js'),
  kitsJs: resolveApp('src/js/components/MakeYourKit/app.js'),
  root: appDirectory,
  templates: resolveApp('src/pug/templates'),
  subtemplates: resolveApp('src/pug/subtemplates'),
  shelves: resolveApp('src/pug/shelves')
};
