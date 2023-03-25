const test = ['potential', 'branch', 'loopi'];

const string =
  'This fact implies that the loop loopi can execute at most 2n times. For, in each iteration, it ' +
  'executes one of the two branches in the loop. The first branch invariably increases i and does not ' +
  'change m, so that the index m + i of the currently scrutinized character of S is increased. The second ' +
  'branch adds i - T[i] to m, and as we have seen, this is always a positive number. Thus the location m ' +
  'of the beginning of the current potential match is increased. Now, the loop ends if m + i = n; ' +
  'therefore each branch of the loop can be reached at most k times, since they respectively increase ' +
  'either m + i or m, and m = m + i: if m = n, then certainly m + i = n, so that since it increases by ' +
  'unit increments at most, we must have had m + i = n at some point in the past, and therefore either ' +
  'way we would be done.';

module.exports = {
  test,
  string,
};
