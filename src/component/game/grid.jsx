import React, { useEffect, useState } from "react";
import "animate.css";

export const GameGrid = ({ gridValue = 2 }) => {
  const [click, setClick] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [secondIndex, setSecondIndex] = useState(-1);
  const [gridArray, setGridArray] = useState([]);
  const [revealed, setRevealed] = useState([]); // Track which grid items are revealed
  const [matchedPairs, setMatchedPairs] = useState([]); // Track matched pairs
  const [gameWon, setGameWon] = useState(false); // Game win state

  const [totalClick,setTotalClick]=useState(0)

  // Function to generate repeated array of shuffled numbers
  function generateRepeatedArray(gridValue) {
    const size = gridValue ** 2;
    const uniqueNumbers = Array.from({ length: Math.ceil(size / 2) }, (_, index) => index + 1);
    let repeatedArray = uniqueNumbers.reduce((arr, num) => arr.concat([num, num]), []);

    // Shuffle the array to mix the repeated numbers
    for (let i = repeatedArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [repeatedArray[i], repeatedArray[j]] = [repeatedArray[j], repeatedArray[i]];
    }

    // Trim the array to the desired size (if necessary)
    repeatedArray = repeatedArray.slice(0, size);
    return repeatedArray;
  }

  // Initialize the grid array on mount or when gridValue changes
  useEffect(() => {
    setGridArray(generateRepeatedArray(gridValue));
    setRevealed(new Array(gridValue * gridValue).fill(false)); // Initialize all as hidden
    setMatchedPairs([]); // Reset matched pairs when gridValue changes
    setGameWon(false); // Reset win state when gridValue changes
    setTotalClick(0)
  }, [gridValue]);

  // Handle clicks on grid items
  const handleClick = (index) => {
    if (revealed[index] || gameWon) return; // Do nothing if the cell is already revealed or game is won
setTotalClick((prev)=>prev+1)
    setRevealed((prevRevealed) => {
      const newRevealed = [...prevRevealed];
      newRevealed[index] = true; // Reveal the clicked number
      return newRevealed;
    });

    if (!click) {
      setCurrentIndex(index); // Set the first index
    } else {
      setSecondIndex(index); // Set the second index
      handleCheckGrid(currentIndex, index); // Check for a match
    }

    setClick((prev) => !prev); // Toggle between first and second click
  };

  // Handle the logic for checking the grid for matches
  const handleCheckGrid = (cI, sI) => {
    // If the two indices match
    if (gridArray[cI] === gridArray[sI]) {
      // Mark matched pairs
      setMatchedPairs((prevMatched) => [...prevMatched, gridArray[cI]]);
    } else {
      // If they don't match, hide them again after a short delay
      setTimeout(() => {
        setRevealed((prevRevealed) => {
          const newRevealed = [...prevRevealed];
          newRevealed[cI] = false; // Hide the first number
          newRevealed[sI] = false; // Hide the second number
          return newRevealed;
        });
      }, 1000); // Wait for 1 second before hiding
    }
  };

  // Check for win condition after matchedPairs is updated
  useEffect(() => {
    // Calculate total number of pairs (half the number of items)
    if (!gridValue){
        return
    }
    const totalPairs = Math.floor(gridArray.length / 2);

    // Win condition: once we have matched all pairs
    if (matchedPairs.length === totalPairs) {
      setGameWon(true); // The player has won
    }
    // if(gridArray.length%2!==0){
    //     setGameWon(true)
    // }
    console.log(matchedPairs,'matched pairs',totalPairs,'total pairs');
    
  }, [matchedPairs, gridArray]); // This runs every time matchedPairs is updated

  // Return the game grid UI
  return (
    <div className="flex flex-col justify-center items-center p-4">
      {/* Game Win Message with animation */}
      {gameWon && (
        <div className="text-2xl font-bold text-green-500 mb-4 animate__animated animate__fadeIn animate__delay-1s">
          You Win! 🎉
        </div>
      )}
      <div className="font-bold bg-blue-400 rounded-2xl p-2  ">Total No of Clicks so far:-{totalClick}</div>

      <div
        className="grid gap-2 items-center"
        style={{
          gridTemplateColumns: `repeat(${gridValue}, 1fr)`,
          gridTemplateRows: `repeat(${gridValue}, 1fr)`,
        }}
      >
        {gridArray.map((item, i) => (
          <div
            key={i}
            onClick={() => handleClick(i)}
            className={`rounded-xl gap-2 w-[60px] h-[60px] border-2 p-2 cursor-pointer transform transition-transform duration-300
              ${revealed[i] ? "bg-blue-300 scale-105" : "bg-gray-300 scale-100"}
              ${matchedPairs.includes(item) ? "bg-green-500 scale-110" : "bg-red-300"}
              hover:scale-105 hover:shadow-lg
            `}
          >
            {/* Show the number if revealed, otherwise show a placeholder */}
            {revealed[i] ? item : "🎶"}
          </div>
        ))}
      </div>
    </div>
  );
};
