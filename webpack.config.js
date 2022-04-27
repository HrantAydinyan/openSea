module.exports = {
    resolve: { 
        fallback: { 
            "stream": require.resolve("stream-browserify"), 
            "os": require.resolve("os-browserify/browser"),
            "crypto": require.resolve("crypto-browserify"),
            "http": require.resolve("stream-http"),
        }
    }
}