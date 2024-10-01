const path = require('path');

module.exports = {
  mode: 'development', // or 'production'
  entry: './src/index.js', // your entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    fallback: {
      url: require.resolve('url/'), // Use this line for polyfill
      // or use: url: false // Use this line for an empty module
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      // other rules...
    ],
  },
  // other configurations...
};
