describe('sum', () => {
    it('adds 20 and 10 into 30', () => {
        assert.strictEqual(30, sum([20, 10]));
    });
});

describe('multiply', () => {
    it('multiply 20 and 10 into 200', () => {
        assert.strictEqual(200, multiply([20, 10]));
    });
});


describe('reverse', () => {
    it('reverses a number (previous type conversion)', () => {
        assert.strictEqual('321', reverse(123));
    });
});

describe('filterLongWords', () => {
    it('returns [\'Hannah Gail\'] for ([\'Hannah Gail\', \'a\', \'\'], 2) input', () => {
        expect(filterLongWords(['Hannah Gail', 'a', ''], 2)).to.have.same.members(['Hannah Gail']);
    });
   
});

function sum(arr) {
    return !arr ? undefined : arr.reduce(function (acc, elem) { return acc + elem; }, 0);
}
function multiply(arr)
{
  return !arr ? undefined : arr.reduce(function (acc, elem) { return acc * elem; }, 0);
}
function reverse(str) {
    if (str === undefined) return undefined;
    str = (' ' + str).slice(1);
    return str.split('').map((_, i, array) => array[array.length - i -1]).join('');
}

function filterLongWords(arrayOfWords, i) {
    if (!arrayOfWords || typeof i !== "number") return undefined;
    return arrayOfWords.filter(function (word, idx, array) {
        return ('' + word).length > i;
    }, []);
}

