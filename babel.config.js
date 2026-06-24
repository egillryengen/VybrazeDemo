module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@': './src'
          }
        }
      ],
      ['@babel/plugin-proposal-class-properties', { "loose": true }],
      ['@babel/plugin-proposal-private-methods', { "loose": true }]
    ]
  };
};
