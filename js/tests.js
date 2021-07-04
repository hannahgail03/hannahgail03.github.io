    // Exercise 1
    describe('String.filter', () => {
        it('Define a filter function on the String object. The function accepts an array of strings that specifies a list of banned words', () => {
            assert.strictEqual('This house is nice!', 'This house is not nice!'.filter('not'));
        });
    });

    // Exercise 2
    describe('Array.bubbleSort', () => {
        it('Write a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted.', () => {
                     assert.deepEqual([-2,0,1,3,4,6], [6,4,0,3,-2,1].bubbleSort());
        });
    });

    // Exercise 3
    describe('Teacher.teach', () => {
        it('Create an object called Teacher derived from the Person class, and implement a method called teach which receives a string called subject, and returns', () => {
            const Obina = new Teacher();
            Obina.initialize('Obina', 50);
            assert.strictEqual(Obina.teach('SE'), 'Obina is teaching SE');
        });

    });

  