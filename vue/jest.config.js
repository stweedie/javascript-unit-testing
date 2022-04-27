module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\.ts$": "ts-jest",
  },
  testMatch: ["**/*.test.ts", "**/*.spec.ts"],
  moduleFileExtensions: ["vue", "js", "ts"],
}
