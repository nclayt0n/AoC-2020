import React from 'react';
import passports from '../resources/passports.js';
//Puzzle 1:
//must looks like credentials. Must include all 7 keys included in keys array.

const dayFourPuzzleOne = () => {
    const keys = ['byr', 'ecl', 'eyr', 'hcl', 'hgt', 'iyr', 'pid'];
    let data = passports
        .split('\n')
        .map((e) => e.trim())
        .filter((e) => e !== '');

    let puzzleOneResults = [];
    data.map((passport) => passport.split(' ').map((p) => p.split(':')[0])).map((y) => {
        y = y.sort();
        y.length === 7 && !y.map((z) => keys.includes(z)).includes(false) && puzzleOneResults.push(y);

        y.length > 7 && puzzleOneResults.push(y);
    });
    return puzzleOneResults.length;
};

const DayFour = () => {
    return (
        <section className="mb-5">
            <h2 className="mb-0">Day Four</h2>
            <p className="mt-6">Puzzle 1: {dayFourPuzzleOne()}</p>
            <p className="mt-6">Puzzle 2:</p>
        </section>
    );
};

export default DayFour;
