module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "react-native-reanimated/plugin",
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@components': './src/components',
            '@config': './src/config',
            '@hooks': './src/hooks',
            '@screens': './src/screens',
            '@services': './src/services',
            '@utils': './src/utils',
            '@assets': './src/assets',
            '@types': './src/types',
            '@dtos': './src/dtos',
            '@storage': './src/storage',
            '@context': './src/context',
            '@routes': './src/routes',
          },
        },
      ],
    ],
  };
};
