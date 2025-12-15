export const levenshtein = (a: string, b: string) => {
  console.log(a, b)
  const matrix = Array.from({ length: b.length + 1 }, (_, i) => [i])
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b[i - 1] === a[j - 1]) matrix[i][j] = matrix[i - 1][j - 1]
      else matrix[i][j] = Math.min(matrix[i - 1][j - 1], matrix[i][j - 1], matrix[i - 1][j]) + 1
    }
  }
  return matrix[b.length][a.length]
}

export const similarityScore = (realText: string, userText: string): number => {
  const distance = levenshtein(realText, userText)

  return (1 - distance / Math.max(realText.length, 1)) * 100
}
