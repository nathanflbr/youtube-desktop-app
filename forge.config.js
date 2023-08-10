module.exports = {
  // ...
  packagerConfig: {
    icon: "./assets/icons/icon", // no file extension required
  },
  makers: [
    {
      name: "@electron-forge/maker-zip",
    },
  ],
  // ...
};
