module.exports = {
    "roots": [
      "<rootDir>/src"
    ],
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ],
    "setupTestFrameworkScriptFile": "./src/setupEnzyme.js",
    "moduleNameMapper": {
        "\\.(scss|sass|css|jpg|png)$": "<rootDir>/src/__tests__/__mocks__/mock-module.js"
    },
    "reporters": [
    "default",
          [
         "jest-junit", { "suiteName":"jest tests",
                         "output":"./reports/junit.xml",
                         "classNameTemplate":"{classname}-{title}",
                         "titleTemplate":"{classname}-{title}",
                         "ancestorSeparator": " > ",
                         "usePathForSuiteName": "true"
                                  }
       ]
    ],
    "collectCoverage": true,
    "collectCoverageFrom": [
      "<rootDir>/src/**/*.tsx",
      "!**/node_modules/**",
      "!**/vendor/**"
    ]
  }
