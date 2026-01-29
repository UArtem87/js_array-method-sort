'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const compare =
      compareFunction ||
      ((a, b) => {
        const sA = String(a);
        const sB = String(b);

        if (sA > sB) {
          return 1;
        }

        if (sA < sB) {
          return -1;
        }

        return 0;
      });

    let temp;

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        const num = compare(this[j], this[j + 1]);

        if (num > 0) {
          temp = this[j];
          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
