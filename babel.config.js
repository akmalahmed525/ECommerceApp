module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver', {
        root: ['.'],
        'alias': {
          '@core': './src/core',
          '@features': './src/features',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
