/**
 Simple Number Generator
 */

const { log } = require("console");

function* simpleGenerator() {
    yield 1;
    yield 2;
    yield 3;
    yield 100;

}

const generator = simpleGenerator();

// log(generator.next());
// log(generator.next());
// log(generator.next());
// log(generator.next());


let itr = generator.next();
while (!itr.done) {
    log(itr);
    itr = generator.next();
}

function* interactiveGenerator() {
    const input = yield 'Give me a number';
    log(`Received: ${input}`);
    yield input * 2;
}

const gen = interactiveGenerator();
log(gen.next());
log(gen.next(10));


function* rangeGenerator(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

const range = rangeGenerator(1, 3);

// log(range.next());
// log(range.next());
// log(range.next());

for (const num of range) {
    log(num)
}

/**
 Stream Processing in Node.js
 */
const fs = require('fs').promises;

async function* readFileChunks(filePath) {

    const file = await fs.open(filePath);
    const stream = file.createReadStream({ encoding: 'utf-8' });
    for await (const chunk of stream) {
        yield chunk;
    }

    await file.close();
}

(async () => {
    for await (const chunk of readFileChunks(`${__dirname}/file.txt`)) {
        log(chunk)
    }
})();
