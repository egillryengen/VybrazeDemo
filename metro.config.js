const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);
const { transformer, resolver } = config;

module.exports = {
  ...config,
  transformer: {
    ...transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    ...resolver,
    assetExts: resolver.assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...resolver.sourceExts, 'svg', 'cjs'],
    extraNodeModules: {
      '@': path.resolve(__dirname, 'src'),
      ...resolver.extraNodeModules
    }
  },
  watchFolders: [
    path.resolve(__dirname, 'src')
  ],
};
