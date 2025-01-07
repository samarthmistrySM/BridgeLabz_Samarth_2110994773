function countDistinctSubsequences(s) {
    const subsequences = new Set([""]);
  
    for (const char of s) {
      const newSubsequences = new Set();
      for (const sub of subsequences) {
        newSubsequences.add(sub + char);
      }
      for (const sub of newSubsequences) {
        subsequences.add(sub);
      }
    }
  
    return subsequences.size - 1; 
  }
  
  const s = "abcbac";
  console.log(countDistinctSubsequences(s)); 
  