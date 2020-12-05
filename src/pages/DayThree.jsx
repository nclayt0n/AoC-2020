import React from 'react';
import data from '../resources/mountains.json';
import classnames from 'classnames';

const allDownHillFromHere = (arr) => {
    const list = arr;
    let y = 0;
    let count = 0;
    for (let i = 2; i < arr.length; i+=2) {
        y = y + 1;
        if (y > arr[0].length - 1) {
            y = y - arr[0].length;
        }
        if (arr[i][y] === '#') {
            count = count + 1;
            list[i][y] = 'X';
        }
        if (arr[i][y] === '.') {
            list[i][y] = '0';
        }
    }
    return { list: list, count: count };
};
let { list, count } = allDownHillFromHere(data.map((d) => d.split('')));

const DayThreePuzzleTwo = (arr, coordinates) => {
    let totals = [];
    coordinates.map((coordinate, idx) => {
        let y = 0;
        let count = 0;
        for (let i = coordinate.down; i < arr.length; i = i + coordinate.down) {
            y = y + coordinate.right;
            if (y > arr[0].length - 1) {
                y = y - arr[0].length;
            }
            if (arr[i][y] === '#') {
                count = count + 1;
            }
            if (arr[i][y] === '.') {
            }
        }
        totals.push(count);
    });
    let product=1;
    for(let i=0; i<totals.length;i++){
        product*=totals[i]
    }
    return product;
};

let totals = DayThreePuzzleTwo(
    data.map((d) => d.split('')),
    [
        { right: 1, down: 1 },
        { right: 3, down: 1 },
        { right: 5, down: 1 },
        { right: 7, down: 1 },
        { right: 1, down: 2 }
    ]
);

const DayThree = () => (
        <section className="mb-5">
            <h2 className="mb-0">Day Three</h2>
            <p className="mt-6">Puzzle 1: Trees # {count} #</p>
            <p className="mt-6">Puzzle 2: {totals}</p>
            {list.map((l, idx) => {
                return (
                    <ul className="row list-flat" key={idx}>
                        {l.map((m, index) => {
                            return (
                                <li
                                    style={{ width: '18px' }}
                                    key={`${idx}${index}`}
                                    className={classnames('', {
                                        'txt-gray': m !== '0' && m !== 'X',
                                        'txt-danger': m === 'X',
                                        'txt-blue': m === '0'
                                    })}
                                >
                                    {m}
                                </li>
                            );
                        })}
                    </ul>
                );
            })}
        </section>
);

export default DayThree;
