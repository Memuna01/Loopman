module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],

    "env": {
        "mocha": true,
        "node": true
    },
    "globals": {
        "localStorage": true,
        "sinon": true,
        "$": true,
        "window": true,
        "expect": true
    }
};