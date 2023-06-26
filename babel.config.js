module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module:react-native-dotenv', {
      envName: 'APP_ENV',
      moduleName: '@env',
      path: '.env',
      blocklist: null,
      allowlist: null,
      blacklist: null, // DEPRECATED
      whitelist: null, // DEPRECATED
      safe: false,
      allowUndefined: true,
      verbose: false,
    }],
    'react-native-classname-to-style',
    [
      'react-native-platform-specific-extensions',
      {
        extensions: ['scss', 'sass'],
      },
    ],
    [
      'react-native-reanimated/plugin', {
        relativeSourceLocation: true,
      },
    ],
  ],
};
