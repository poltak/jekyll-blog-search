module.exports = {
  npm: {
    styles: {
      bootstrap: ['dist/css/bootstrap.css'],
    },
  },
  files: {
    javascripts: {
      'vendor.js': /^(?!app)/,
      'app.js': /^app/,
    },
    stylesheets: {
      joinTo: {
        'app.css': /^app/,
        'vendor.css': /^node_modules/,
      },
    },
  },
  overrides: {
    production: {
      paths: {
        public: './lib',
      },
      files: {
        javascripts: {
          joinTo: 'app.js',
        },
        stylesheets: {
          joinTo: {
            'app.css': /^app/,
          },
        },
      },
    },
  },
};
