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
    return puzzleOneResults;
};
let puzzleOne = dayFourPuzzleOne();
//Puzzle 2
/*byr (Birth Year) - four digits; at least 1920 and at most 2002.
iyr (Issue Year) - four digits; at least 2010 and at most 2020.
eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
hgt (Height) - a number followed by either cm or in:
If cm, the number must be at least 150 and at most 193.
If in, the number must be at least 59 and at most 76.
hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
pid (Passport ID) - a nine-digit number, including leading zeroes.
cid (Country ID) - ignored, missing or not.
*/

const dayFourPuzzleTwo = (passports) => {
    let data = passports
        .split('\n')
        .map((e) => e.trim())
        .filter((e) => e !== '');

    let puzzleTwoResults = [];

    const keys = ['byr', 'ecl', 'eyr', 'hcl', 'hgt', 'iyr', 'pid'];

    data.map((passport) =>
        passport
            .split(' ')
            .map((p) => {
                let arr = p.split(':');
                return { [arr[0]]: arr[1] };
            })
            .reduce(function (result, current) {
                return Object.assign(result, current);
            }, {})
    ).map((obj) => {
        let objKeys = Object.keys(obj).sort();
        objKeys.length === 7 && !objKeys.map((key) => keys.includes(key)).includes(false) && puzzleTwoResults.push(obj);

        objKeys.length > 7 && puzzleTwoResults.push(obj);
    });
    let list = [];
    puzzleTwoResults.map((result) => {
        if (
            typeof parseInt(result.pid) === 'number' &&
            result.pid.length === 9 &&
            parseInt(result.byr) >= 1920 &&
            parseInt(result.byr) <= 2002 &&
            ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(result.ecl) &&
            parseInt(result.eyr) >= 2020 &&
            parseInt(result.eyr) <= 2030 &&
            parseInt(result.iyr) >= 2010 &&
            parseInt(result.iyr) <= 2020 &&
            result.hcl.charAt(0) === '#' &&
            result.hcl.length === 7
        ) {
            let hgt = parseInt(result.hgt.slice(0, -2));
            if (
                `${result.hgt.charAt(result.hgt.length - 2)}${result.hgt.charAt(result.hgt.length - 1)}` === 'cm' &&
                hgt >= 150 &&
                hgt <= 193
            ) {
                list.push(result);
            }
            if (
                `${result.hgt.charAt(result.hgt.length - 2)}${result.hgt.charAt(result.hgt.length - 1)}` === 'in' &&
                hgt >= 59 &&
                hgt <= 76
            ) {
                list.push(result);
            }
        }
    });
    return list;
};
let puzzleTwo = dayFourPuzzleTwo(passports);
//have tried 8 and 14
const DayFour = () => {
    return (
        <section className="mb-5">
            <h2 className="mb-0">Day Four</h2>
            <p className="mt-6">Puzzle 1: {puzzleOne?.length}</p>
            <p className="mt-6">Puzzle 2: {puzzleTwo.length}</p>
            <ul>
                <li>byr (Birth Year) - four digits; at least 1920 and at most 2002.</li>
                <li>ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth. </li>
                <li>eyr (Expiration Year) - four digits; at least 2020 and at most 2030.</li>
                <li>hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f. </li>
                <li>
                    hgt (Height) - a number followed by either cm or in: If cm, the number must be at least 150 and at
                    most 193. If in, the number must be at least 59 and at most 76.
                </li>
                <li>iyr (Issue Year) - four digits; at least 2010 and at most 2020. </li>
                <li>pid (Passport ID) - a nine-digit number, including leading zeroes.</li>
                <li>cid (Country ID) - ignored, missing or not.</li>
            </ul>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>BYR</th>
                        <th>ECL</th>
                        <th>EYR</th>
                        <th>HCL</th>
                        <th>HGT</th>
                        <th>IYR</th>
                        <th>PID</th>
                    </tr>
                </thead>
                <tbody>
                    {puzzleTwo?.map((passport) => (
                        <tr key={passport.pid}>
                            <td>{passport.byr}</td>
                            <td>{passport.ecl}</td>
                            <td>{passport.eyr}</td>
                            <td>{passport.hcl}</td>
                            <td>{passport.hgt}</td>
                            <td>{passport.iyr}</td>
                            <td>{passport.pid}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default DayFour;
