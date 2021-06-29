describe('sum', () => {
    it('adds 20 and 10 into 30', () => {
        assert.strictEqual(30, sum([20, 10]));
    });
    it('adds 20, 10 and 14.5 into 44.5', () => {
        assert.strictEqual(44.5, sum([20, 10, 14.5]));
    });
    it('returns 0 to empty array input', () => {
        assert.strictEqual(0, sum([]));
    });
    it('returns undefined to undefined input', () => {
        assert.strictEqual(undefined, sum(undefined));
    });
});

describe('reverse', () => {
    it('reverses a string', () => {
        assert.strictEqual('denifednu', reverse('undefined'));
    });
    it('reverses a number (previous type conversion)', () => {
        assert.strictEqual('321', reverse(123));
    });
    it('returns empty string for empty string input', () => {
        assert.strictEqual('', reverse(''));
    });
    it('returns undefined for undefined input', () => {
        assert.strictEqual(undefined, reverse(undefined));
    });
});

describe('filterLongWords', () => {
    it('returns [\'Hannah Gail\'] for ([\'Hannah Gail\', \'a\', \'\'], 2) input', () => {
        expect(filterLongWords(['Hannah Gail', 'a', ''], 2)).to.have.same.members(['Hannah Gail']);
    });
    it('returns [123] for ([123, \'rands\', \'rickels\'], 2) input', () => {
        expect(filterLongWords([123, 'rands', 'rickels'], 3)).to.have.same.members([123]);
    });
    it('returns empty array for ([123, \'rands\', \'rickels\'], 6) input', () => {
        expect(filterLongWords([123, 'rands', 'rickels'], 6)).to.have.same.members([]);
    });
    it('returns empty array for empty array input', () => {
        expect(filterLongWords([], 5)).to.have.same.members([]);
    });
    it('returns undefined for non-number i input', () => {
        assert.strictEqual(undefined, filterLongWords([123, 'rands', 'rickels'], 'r'));
    });
    it('returns undefined for undefined input', () => {
        assert.strictEqual(undefined, filterLongWords(undefined, 0));
    });
});

function sum(arr) {
    return !arr ? undefined : arr.reduce(function (acc, elem) { return acc + elem; }, 0);
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

