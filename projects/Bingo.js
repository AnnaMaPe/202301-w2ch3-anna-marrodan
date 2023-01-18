const welcome = () => {
  if (welcomeMessage !== null) {
    if (isNaN(welcomeMessage) === true) {
      const capitalizeFirstLetter = () =>
        welcomeMessage.charAt(0).toUpperCase() + welcomeMessage.slice(1);
      alert(`Welcome, ${capitalizeFirstLetter(welcomeMessage)}`);
    } else if (
      isNaN(welcomeMessage) === false &&
      welcomeMessage !== null &&
      welcomeMessage !== ""
    ) {
      confirm(`Is ${welcomeMessage} your real name?`);
      if (true) {
        alert(`What a lovely (and weird) name. Welcome, ${welcomeMessage}`);
      } else welcome;
    } else if (welcomeMessage === "") {
      alert("Welcome stranger");
    }

    return true;
  }

  if (welcomeMessage === null) {
    alert(`Sorry to see you are leaving! You'll miss a good game, mate!`);
    return false;
  }
};

const bingoCard = () => {
  const selectMaximum = () => {
    if (userMaxNumber < 5 || isNaN(userMaxNumber) || userMaxNumber > 15) {
      alert("Oi! Enter only a number between 5 and 15. ");
      letsPlayBingo();
    } else {
      return userMaxNumber;
    }
  };

  selectMaximum();

  const creatUserBingoCard = () => {
    while (userBingoCard.length < userMaxNumber) {
      const cardBingoRandomNumbers = Number(
        (Math.random() * bingoMaxNumber).toFixed()
      );
      const sameCardNumbers = (sameCardNumber) =>
        sameCardNumber === cardBingoRandomNumbers;
      if (cardBingoRandomNumbers === 0 || userBingoCard.some(sameCardNumbers)) {
        return creatUserBingoCard();
      }

      userBingoCard.push(cardBingoRandomNumbers);
    }

    alert(`Down below you will see your card: `);
    console.log("This is your card:");
    console.log(userBingoCard);
    const newCard = confirm("Do you want to keep it?");
    if (!newCard) {
      userBingoCard = [];
      alert(`No biggie. Let's get a new one`);
      console.clear();
      creatUserBingoCard();
    } else {
      alert(
        `You start with a total of ${initialPunctuation} bingoPoints, for every turn you will be loosing ${turnPunctuation} bingoPoints.`
      );
      alert("The winner will be the player with a higher score. ");
      alert("Let's play Bingo! HERE WE GOOOOOO!");
    }
  };

  creatUserBingoCard();
};

const generateBingoRandomNumbers = () => {
  const randomNumber = (Math.random() * bingoMaxNumber).toFixed();
  const bingoRandomNumber = Number(randomNumber);
  if (bingoRandomNumber === 0 || displayedNumbers.includes(bingoRandomNumber)) {
    generateBingoRandomNumbers();
  } else {
    alert(`And the lucky number is... ${bingoRandomNumber}!!!!`);
    displayedNumbers.push(bingoRandomNumber);
    game();
  }
};

const game = () => {
  const sameNumber = () => {
    const numbersToCompare = userBingoCard.some((e) =>
      displayedNumbers.includes(e)
    );
    if (numbersToCompare) {
      return true;
    }

    return false;
  };

  const checkPunctuation = () => {
    const actualPunctuation =
      initialPunctuation - turnPunctuation * displayedNumbers.length;
    return actualPunctuation;
  };

  const quitBeforeEndGame = () => {
    const confirmation = confirm("Would you like to continue?");
    if (confirmation === true) {
      generateBingoRandomNumbers();
    } else {
      alert("Sorry to see you leaving before finishing your game!");
    }
  };

  const startOver = () => {
    const newGame = confirm("Would you like to start over?");
    if (!newGame) {
      alert("Byeee!");
    } else if (newGame) {
      userBingoCard = [];
      console.clear();
      letsPlayBingo();
    }
  };

  const ranking = () => {
    const userPunctuation = checkPunctuation();
    players.push({
      Name: welcomeMessage.charAt(0).toUpperCase() + welcomeMessage.slice(1),
      Score: userPunctuation,
    });
    const classification = players.sort(({ Score: a }, { Score: b }) => b - a);
    return classification;
  };

  const checkWinner = () => {
    const allX = userBingoCard.every((e) => e === "X");
    if (allX === true) {
      alert(`BINGOOOOOO!!!`);
      alert("This is the final ranking:");
      console.table(ranking());
      startOver();
    } else {
      generateBingoRandomNumbers();
    }
  };

  if (!sameNumber()) {
    alert("Oh, you do not have the number. Better luck next time!");
    alert("Your current punctuation is: " + checkPunctuation());
    quitBeforeEndGame();
  } else {
    const repeatedNumber = Number(displayedNumbers.slice(-1));
    const indexOfRepeatedNumber = userBingoCard.indexOf(repeatedNumber);
    userBingoCard[indexOfRepeatedNumber] = "X";
    alert(
      "Lucky you! You have that number on your card! Check your updated card down below:"
    );
    console.log(`This is your updated card:`);
    console.log(userBingoCard);
    alert("Your current punctuation is: " + checkPunctuation());
    checkWinner();
  }
};

let userMaxNumber = "";
const bingoMaxNumber = 20;
const displayedNumbers = [];
let userBingoCard = [];
const initialPunctuation = 1000;
const turnPunctuation = 10;
const players = [
  {
    Name: "Ted",
    Score:
      initialPunctuation - Math.floor(Math.random() * 10) * turnPunctuation,
  },
  {
    Name: "Roy",
    Score:
      initialPunctuation - Math.floor(Math.random() * 10) * turnPunctuation * 2,
  },
  {
    Name: "Rebecca",
    Score:
      initialPunctuation - Math.floor(Math.random() * 10) * turnPunctuation,
  },
  {
    Name: "Keeley",
    Score:
      initialPunctuation - Math.floor(Math.random() * 10) * turnPunctuation * 3,
  },
];

const welcomeMessage = prompt(`Welcome to LisBingo! What's your name?`);
const letsPlayBingo = () => {
  if (welcome()) {
    userMaxNumber = Number(
      prompt(
        `What's the maximum amount of numbers you would like to play on your card? It has to be between 5 (shorter game) or 15 (which could be a nightmare if you are unlucky, ma'friend!). Choose wisely`
      )
    );
    bingoCard(userMaxNumber);
    generateBingoRandomNumbers();
  } else {
  }
};

letsPlayBingo();
