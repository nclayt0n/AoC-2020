import React from 'react';
import data from '../resources/mountains.json';

const allDownHillFromHere = (arr) => {
    const list = arr;
    let y = 0;
    let z = 0;
    let count = 0;
    for (let i = 1; i < arr.length; i++) {
        if (z < 11) {
            z = z + 1;
            y = y + 3;
        }
        if (z === 11) {
            z = 0;
        }
        if(y>arr[0].length){
            y=3
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
const DayThree = () => (
    <>
        <section className="mb-5">
            <h2 className="mb-0">Day Three</h2>
            <p className="mt-6">Trees: # {count} #</p>
            {list.map((l, idx) => {
                return (
                    <ul className="row list-flat" key={idx}>
                        {l.map((m, index) => {
                            return (
                                <li style={{ width: '18px' }} key={`${idx}${index}`}>
                                    {m}
                                </li>
                            );
                        })}
                    </ul>
                );
            })}
        </section>
    </>
);

export default DayThree;
