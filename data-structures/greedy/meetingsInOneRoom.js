/**
 * https://takeuforward.org/data-structure/n-meetings-in-one-room/
 * 
 * TC -> O(2N + NlogN)
 * SC -> O(N) + O(N)
 */

function findMeetingsInOneRoom(start, end) {
  const n = start.length;
  const meetings = [];
  const position = [];
  for (let i = 0; i < n; i++) {
    meetings[i] = { start: start[i], end: end[i], pos: i };
  }

  meetings.sort((a, b) => a.end - b.end);
  let lastMeetingEnd = meetings[0].end;
  position.push(meetings[0].pos);
  let count = 1;

  for (let i = 1; i < n; i++) {
    if (meetings[i].start > lastMeetingEnd) {
      count++;
      lastMeetingEnd = meetings[i].end;
      position.push(meetings[i].pos);
    }
  }

  return [count, position];
}

const start = [1, 3, 0, 5, 8, 5];
const end = [2, 4, 5, 7, 9, 9];
console.log(findMeetingsInOneRoom(start, end));
