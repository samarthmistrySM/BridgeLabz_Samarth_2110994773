function countDistinctSubsequences(s) {
    const MOD = 1e9 + 7;
    const n = s.length;
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1; 

    const lastOccurrence = {};

    for (let i = 1; i <= n; i++) {
        dp[i] = (2 * dp[i - 1]) % MOD;

        const char = s[i - 1];
        if (lastOccurrence[char] !== undefined) {
            dp[i] = (dp[i] - dp[lastOccurrence[char] - 1] + MOD) % MOD;
        }

        lastOccurrence[char] = i;
    }

    return (dp[n] - 1 + MOD) % MOD;
}

const str = "abc";
console.log(countDistinctSubsequences(str)); 