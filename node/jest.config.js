// https://jestjs.io/docs/configuration

const config = {
  verbose: true,
	preset: "ts-jest",
	rootDir: "src",
	testEnvironment: "node",
	testMatch: ["<rootDir>/**/*.spec.ts"],

};

module.exports = config;
