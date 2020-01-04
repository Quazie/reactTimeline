module.exports = {
  printWidth: 120,
  trailingComma: "all",
  semi: true,
  singleQuote: true,
  tabWidth: 4,
  overrides: [
    {
      files: "*.yaml",
      options: {
        tabWidth: 2
      }
    },
    {
      files: "*.json",
      options: {
        tabWidth: 2
      }
    }
  ]
};
