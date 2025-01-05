/**
 * https://takeuforward.org/data-structure/allocate-minimum-number-of-pages/
 *
 * TC -> O(log(sum - max + 1)) x O(N)
 * SC -> O(1)
 */

function findStudents(books, maxPages) {
  const n = books.length;
  let students = 1;
  let currentStudentPage = 0;
  for (let i = 0; i < n; i++) {
    if (currentStudentPage + books[i] <= maxPages) {
      currentStudentPage += books[i];
    } else {
      students++;
      currentStudentPage = books[i];
    }
  }
  return students;
}

function bookAllocation(books, m) {
  const n = books.length;
  if (m > n) return -1;

  let low = Math.max(...books);
  let high = books.reduce((a, b) => a + b, 0);
  let ans = high;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const students = findStudents(books, mid);
    if (students === m) {
      ans = Math.min(ans, mid);
    }
    if (students > m) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
}

const input = [25, 46, 28, 49, 24];
const students = 4;
console.log(bookAllocation(input, students));
