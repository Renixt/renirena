import React from 'react'
import '../styles.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='footer'>
      <p className='footer-text'>
        © {currentYear} renirena, All rights reserved.
      </p>
    </footer>
  )
}

/*
//write flexible functions...
function test(firstArgument, secondA, ...otherA){
    console.log(firstArgument);
    console.log(secondA);
    console.log(otherA);
}

//SPREAD OP, expand or combine arrays
const fruits = ["apple", "bannana"];
const moreFruits = ["cherry", "melon"];

//both arrays merge
const allFruits = [...fruits, ...moreFruits];

//New state, add smntng to the fruits
const fruits2 = ["apple", "bannana"];
//create a new array instead of modifying fruits
//state is inmutable, you have to add to a new state
const newState = [...fruits2, "melon"];
 */
