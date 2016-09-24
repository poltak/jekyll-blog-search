module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/,
      },
    },
    stylesheets: {
      joinTo: {
        'app.css': /^app/,
        'vendor.css': /^node_modules/,
      },
    },
  },
};
