const { loadConfigFromFile, mergeConfig } = require("vite");
const path = require("path");

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    builder: "@storybook/builder-vite",
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    check: false,
    checkOptions: {},
  },
  // staticDirs: ["../public"],
  async viteFinal(previousConfig) {
    const { config } = await loadConfigFromFile(
      path.resolve(__dirname, "../vite.config.ts"),
    );
    return mergeConfig(previousConfig, { ...config, plugins: [] });
  },
};
export default config;
