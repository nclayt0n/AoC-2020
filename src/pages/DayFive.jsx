import React from 'react';
import boardingPasses from '../resources/boarding_passes';

//128 seats on the plane. 0-128
const dayFivePuzzleOne = (arr) => {
    let filledArray = new Array(128).fill(['0', '0', '0', '0', '0', '0', '0', '0']);

    let list = [];
    arr.split('\n')
        .map((e) => e.trim())
        .filter((e) => e !== '')
        .map((r) => {
            let rowStart = 0;
            let rowEnd = 128;
            let columnStart = 0;
            let columnEnd = 8;
            r = r.split('');
            let num = 0;
            let length = r.length;
            r.map((s, idx) => {
                if (s === 'F') {
                    rowEnd = rowStart + (rowEnd - rowStart) / 2;
                }
                if (s === 'B') {
                    rowStart = rowStart + (rowEnd - rowStart) / 2;
                }
                if (s === 'L') {
                    columnEnd = columnStart + (columnEnd - columnStart) / 2;
                }
                if (s === 'R') {
                    columnStart = columnStart + (columnEnd - columnStart) / 2;
                }
                if ((idx = length)) {
                    num = rowStart * 8 + columnStart;
                }
            });
            list.push(num);
        });
    console.log();
    return list.sort((a, b) => a - b);
};
let puzzleOne = dayFivePuzzleOne(boardingPasses);
const dayFivePuzzleTwo = (arr) => {
    let num = 0;
    arr.map((a, idx) => a + 1 !== arr[idx + 1] && idx !== arr.length - 1 && (num = a + 1));
    return num;
};
let puzzleTwo = dayFivePuzzleTwo(puzzleOne);
const DayFive = () => {
    return (
        <section className="mb-5">
            <h2 className="mb-0">Day Five</h2>
            <p className="mt-6">Puzzle 1: {puzzleOne[puzzleOne.length - 1]}</p>
            <p className="my-6">Puzzle 2: {puzzleTwo}</p>

            <h5>Unique IDs</h5>
            <ul
                className="list-flat"
                style={{ maxHeight: '300px', overflow: 'hidden', overflowY: 'auto', maxWidth: '150px' }}
            >
                {puzzleOne.map((id) => (
                    <li className="mb-0" key={id}>{id}</li>
                ))}
            </ul>
            <div className="scrollbox-bottom-gradient" style={{ maxHeight: '300px', maxWidth: '160px' }}></div>
        </section>
    );
};

export default DayFive;
