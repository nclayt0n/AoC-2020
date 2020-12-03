import React from 'react';
import expenses from '../resources/expenses.json'
const DayOne = () => {
    const findSum = (arr) => {
        let list = [];
        arr.map((r) => {
          if (arr.includes(2020 - r)) {
            list.push(r);
          }
        });
        return list[0] * list[1];
      };
      let DayOnePuzzleOne = findSum(expenses);
      
      //Puzzle 2
      //find the 3 numbers that equal 2020, then multiply them together.
      const findThree = (arr) => {
        let results;
        arr.map((r) => {
          arr.map((s) => {
            arr.map((t) => {
              if (r + s + t === 2020) {
                results = r * s * t;
              }
            });
          });
        });
        return results;
      };
      let DayOnePuzzleTwo = findThree(expenses);
    return (
        <section className="row col-xs-12">
        <h2 className="mb-6">Day One</h2>
            <p className="col-xs-12">Puzzle 1: {DayOnePuzzleOne}</p>
            <p className="col-xs-12">Puzzle 2: {DayOnePuzzleTwo}</p>
    </section>
    );
};

export default DayOne;
