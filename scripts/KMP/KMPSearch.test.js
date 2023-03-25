const KMPSearch = require('./KMPSearch.js');
const { test, string } = require('./KMPSearch.test.config');

describe('KMPSearch', () => {
  it('should find the word', () => {
    expect(KMPSearch(string, test[0])).toBe(431);
  });
  it('should find first match of the word', () => {
    expect(KMPSearch(string, test[1])).toBe(119);
  });
  it('should find correct variant of the word', () => {
    expect(KMPSearch(string, test[2])).toBe(32);
  });
});
