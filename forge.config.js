module.exports = {
  // ...
  packagerConfig: {
    icon: "./assets/icons/icon", // no file extension required
  },
  makers: [
    {
      name: "@electron-forge/maker-zip",
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        background: './assets/github/ProjectGithubThumbnail.png',
        format: 'ULFO'
      }
    }
  ],
  // ...
};
