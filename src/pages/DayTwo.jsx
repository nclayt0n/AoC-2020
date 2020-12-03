import React from 'react';
import passwords from '../resources/passwords.json';

const DayTwo = () => {
    const howManyPasswordsAreValid = (arr) => {
        const inputs = [];
        arr.map((r) => {
            let splitString = r.split(' ');
            inputs.push({
                range: splitString[0].split('-'),
                letter: splitString[1].slice(0, 1),
                password: splitString[2]
            });
        });
        let count = [];
        inputs.map((input) => {
            let range = input.range.map((range) => parseInt(range));
            let occurences = input.password.split('').filter((l) => l === input.letter).length;
            if (occurences > range[0] - 1 && occurences < range[1] + 1) {
                count.push(input);
            }
        });
        return count.length;
    };
    let DayTwoPuzzleOne = howManyPasswordsAreValid(passwords);

    const validPasswordsCount = (arr) => {
        const inputs = [];
        arr.map((r) => {
            let splitString = r.split(' ');
            inputs.push({
                range: splitString[0].split('-'),
                letter: splitString[1].slice(0, 1),
                password: splitString[2]
            });
        });
        let count = [];
        inputs.map((input) => {
            let range = input.range.map((range) => parseInt(range));
            let splitPassword = input.password.split('');
            if (splitPassword[range[0] - 1] === input.letter || splitPassword[range[1] - 1] === input.letter) {
                if (splitPassword[range[0] - 1] === input.letter && splitPassword[range[1] - 1] === input.letter) {
                    return;
                } else {
                    count.push(input);
                }
            }
        });
        return count.length;
    };
    let DayTwoPuzzleTwo = validPasswordsCount(passwords);

    return (
        <section className="row col-xs-12">
            <h2 className="mb-6">Day Two</h2>
                <p className="col-xs-12">Puzzle 1: {DayTwoPuzzleOne}</p>
                <p className="col-xs-12">Puzzle 2: {DayTwoPuzzleTwo}</p>
        </section>
    );
};

export default DayTwo;
