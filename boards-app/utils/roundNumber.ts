function roundNumber(num: number): (string | number)  {
  if (num < 1000) return num;
  if (num < 1000000) {
    // 1k- 999k
    const thousands = Math.floor(num / 1000);
    const hundreds = Math.floor((num % 1000) / 100);
    return `${thousands}.${hundreds}k`;
  }
  const millions = Math.floor(num % 1000000000);
  return `${millions}m`
}

export default roundNumber;
