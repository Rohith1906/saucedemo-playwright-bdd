module.exports = {
    default: {
        require: [
            "step-definitions/*.js",
            "hooks/*.js"
        ],
        format: ["progress", "html:test-results/report.html"],
        paths: ["features/*.feature"]
    }
};