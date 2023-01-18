const info = [
  {
    letter: "a",
    answer: ["abducir", 'alfabeto', 'ahorrar'],
    status: 0,
    question:
      ["CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien", "CON LA A. Conjunto de las letras de un idioma puestas en orden.", "CON LA A. Guardar dinero como previsión para necesidades futuras "],
  },
  {
    letter: "b",
    answer: ["bingo", "babero", "beca" ],
    status: 0,
    question:
      ["CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso", "CON LA B. Tela que se pone a los bebés en el pecho para que no se manchen al comer", "CON LA B. Subvención para realizar estudios o investigaciones "],
  },
  {
    letter: "c",
    answer: ["churumbel", "cabeza", "culpar" ],
    status: 0,
    question: ["CON LA C. Niño, crío, bebé", "CON LA C. Parte superior del cuerpo que está sobre el cuello", "CON LA C. Atribuir o echar la culpa a alguien "],
  },
  {
    letter: "d",
    answer: ["diarrea", "dormir", "deportar"],
    status: 0,
    question:
      ["CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida", "CON LA D. Forma de descanso que hacemos por las noches o en la siesta, con los ojos cerrados,sin darnos cuenta de nada", "CON LA D. Desterrar a alguien de algún lugar, por lo regular extranjero, y confinarlo allí por razones políticas o como castigo."] ,
  },
  {
    letter: "e",
    answer: ["ectoplasma","envoltorio", "elefante"],
    status: 0,
    question:
     [ "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación", "CON LA E.Capa exterior que cubre natural o artificialmente una cosa ", "CON LA E. Animal mamífero enorme, de color marrón o gris, que vive en Asia o África, y que tiene trompa y grandes orejas."],
  },
  {
    letter: "f",
    answer: ["facil","fiebre", "frenar"],
    status: 0,
    question: ["CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad", "CON LA F. Aumento de la temperatura del cuerpo que tenemos cuando estamos enfermos. ", "CON LA F. Moderar o parar el movimiento de algo "],
  },
  {
    letter: "g",
    answer: ["galaxia","grupo", "globo"],
    status: 0,
    question:
      ["CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas", "CON LA G. Pluralidad de seres o cosas que forman un conjunto ", "CON LA G. Especie de pelota de goma, que se hincha con aire, y que a veces los niños llevan flotando atado con una cuerda."],
  },
  {
    letter: "h",
    answer: ["harakiri", "humo", "huelga"],
    status: 0,
    question: ["CON LA H. Suicidio ritual japonés por desentrañamiento", "CON LA H. Lo que sale cuando se hace un fuego. ", "CON LA H. Interrupción colectiva de la actividad laboral por parte de los trabajadores con el fin de reivindicar ciertas condiciones o manifestar una protesta "],
  },
  {
    letter: "i",
    answer: ["iglesia","irritar", "iman"],
    status: 0,
    question: ["CON LA I. Templo cristiano", "CON LA I. Irritar, enfadar vehementemente a alguien ", "CON LA I. Mineral de hierro de color negruzco, opaco, casi tan duro como el vidrio, cinco veces más pesado que el agua, y que tiene la propiedad de atraer el hierro, el acero y en grado menor algunos otros cuerpos."],
  },
  {
    letter: "j",
    answer: ["jabali","jubilado", "jardin"],
    status: 0,
    question:
      ["CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba", "CON LA J.  Persona que ha dejado de trabajar y percibe una pensión", "CON LA J.  Zona que rodea algunas casas o edificios y que está lleno de césped, flores, árboles… "],
  },
  {
    letter: "k",
    answer: ["kamikaze","kilo", "koala"],
    status: 0,
    question:
     [ "CON LA K. Persona que se juega la vida realizando una acción temeraria", "CON LA K. Medida de peso que es igual que 1000 gramos.", "CON LA K. Mamífero marsupial arborícola parecido a un oso pequeño, propio de los eucaliptales australianos."],
  },
  {
    letter: "l",
    answer: ["licantropo","liberar", "luna"],
    status: 0,
   question: ["CON LA L. Hombre lobo", "CON LA L.Hacer que alguien o algo quede libre, eximir a alguien de una obligación", "CON LA L.Satélite de la Tierra, de color blanco, que se ve por la noche."],
  },
  {
    letter: "m",
    answer: ["misantropo","mantel", "manifiesto"],
    status: 0,
    question:
     [ "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas", "CON LA M. Tela que se pone en las mesas a la hora de comer. ", "CON LA M. Escrito en que se hace pública declaración de doctrinas, propósitos o programas."],
  },
  {
    letter: "n",
    answer: ["necedad","nacioanlidad", "nido"],
    status: 0,
    question: ["CON LA N. Demostración de poca inteligencia", "CON LA N. Estado propio de la persona nacida o naturalizada en una nación", "CON LA N. Tipo de casa que construyen los pájaros para poner sus huevos."],
  },
  {
    letter: "ñ",
    answer: ["señal","ñu", "soñar"],
    status: 0,
    question:
      ["CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.", "CON LA Ñ. Mamífero africano de color marrón parecido a un toro con los cuernos curvos. ", "CONTIENE LA Ñ.  Representarse en la fantasía imágenes o sucesos mientras se duerme "],
  },
  {
    letter: "o",
    answer: ["orco","organizar", "ojo"],
    status: 0,
    question:
     [ "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien", "CON LA O. Preparar una cosa pensando detenidamente en todos los detalles necesarios para su buen desarrollo.", "CON LA O. Órgano del sentido de la vista. Lo que usamos para ver. "],
  },
  {
    letter: "p",
    answer: ["protoss","peces", "promover"],
    status: 0,
    question:
     [ "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft", "CON LA P. Animales que viven en el agua, cubiertos de escamas, con aletas para nadar. ", "CON LA P.  Iniciar o impulsar una idea o proyecto procurando su logro"],
  },
  {
    letter: "q",
    answer: ["queso","delinquir", "qr"],
    status: 0,
    question:
      [ "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche", "CONTIENE LA Q. Cometer delito.", "CON LA Q. Código de barras bidimensional que solo se puede leer con teléfonos u otros dispositivos inteligentes."],
  },
  { 
    letter: "r", 
    answer: ["raton","reciclar", "roer"],
    status: 0, 
    question: ["CON LA R. Roedor", "CON LA R. Someter material usado a un proceso para que se pueda volver a utilizar", "CON LA R. Desgastar la superficie de un alimento u otra cosa con los dientes o con un instrumento duro de manera que se vaya rebajando lentamente y a trozos pequeños."]
  },
  {
    letter: "s",
    answer: ["stackoverflow","suprimir", "sacapuntas"],
    status: 0,
    question: ["CON LA S. Comunidad salvadora de todo desarrollador informático", "CON LA S. Hacer cesar, hacer desaparecer, anular.", "CON LA S. Utensilio para sacar o afilar la punta a los lápices; está provisto de una cuchilla que afila la mina al tiempo que rebaja la madera. "],
  },
  {
    letter: "t",
    answer: ["terminator","tenedor", "tasa"],
    status: 0,
    question:
      ["CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984", "CON LA T. Utensilio para pinchar o recoger los alimentos sólidos y llevarlos a la boca que consiste en un mango con tres o cuatro púas iguales en uno de sus extremos.", "CON LA T. Tributo que se impone a la utilización de ciertos servicios, o al ejercicio de ciertas actividades."],
  },
  {
    letter: "u",
    answer: ["unamuno","urgencia", "uña"],
    status: 0,
    question:
      ["CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914", "CON LA U.  Necesidad o falta apremiante, inmediata obligación de hacer algo.", "CON LA U. Parte dura que está en la punta de los dedos, que cortamos cuando crece y se puede pintar. "],
  },
  {
    letter: "v",
    answer: ["vikingos","verano", "vivienda"],
    status: 0,
    question:
      ["CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa", "CON LA V.  Estación del año en la que hace mucho calor.", "CON LA V.Lugar cerrado y cubierto construido para ser habitado por personas. "],
  },
  {
    letter: "w",
    answer: ["sandwich","whisky", "windsurf"],
    status: 0,
    question:
     [ "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso", "CON LA W. Licor alcóholico que se obtiene del destilado del grano de algunas plantas.", "CON LA W. Deporte que se practica en el mar, de pie sobre una tabla alargada que lleva una vela triangular."],
  },
  {
    letter: "x",
    answer: ["botox","taxi", "exaltar"],
    status: 0,
    question: ["CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética", "CONTIENE LA X. Coche con conductor que lleva a las personas donde quieren ir y les cobra según los kilómetros recorridos.", "CONTIENE LA X. Avivar o aumentar un sentimiento o pasión, realzar el mérito o las cualidades de alguien."],
  },
  {
    letter: "y",
    answer: ["peyote", "yugo", "yegua"],
    status: 0,
    question:
     [ "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos", "CON LA Y. Dominio u opresión que una o varias personas ejercen despóticamente sobre otras.", "CON LA Y. Mamífero équido, hembra, de tamaño mediano o grande, pelo corto de color generalmente uniforme y orejas cortas; se domestica con facilidad y suele usarse para la monta; hay muchas especies diferentes."],
  },
  {
    letter: "z",
    answer: ["zen","zurdo", "zanahoria"],
    status: 0,
    question:
      ["CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional", "CON LA Z. Que usa con mayor habilidad las extremidades del lado izquierdo.", "CON LA Z. Planta que tiene una raíz comestible alargada de color anaranjado, y que les gusta mucho a los conejos."],
  },
];

let players = [
    {Name: 'Butcher', Score: [100]  },
    {Name: 'Annie', Score: [100] },
    {Name: 'Hughie', Score: [100] },
    {Name: 'Maeve', Score: [100]}
]

let guessedQuestions = [];
let nonGuessedQuestions = [];

let userActualScore = [100]
let generalRandomScore = [-5, -2, 5]
let totalPoints = ''
let timer = 120
let startTime = ''
let endTime = ''
let timeLeft = ''


const welcome = () => {
    if (welcomeMessage !== null) {
        if (isNaN(welcomeMessage) === true) {
            const capitalizeFirstLetter = () => {
                return welcomeMessage.charAt(0).toUpperCase() + welcomeMessage.slice(1)
            }
            alert(`Welcome, ${capitalizeFirstLetter(welcomeMessage)}`)
        } else if (isNaN(welcomeMessage) === false && welcomeMessage !== null && welcomeMessage !== ''){
            confirm(`Is ${welcomeMessage} your real name?`)
                if (true) {
                alert(`What a lovely (and weird) name. Welcome, ${welcomeMessage}`)
                } else welcome
        } else if (welcomeMessage === ''){
            alert ('Welcome Stranger');
        } 
    return true
    } 
    else if (welcomeMessage === null) {
        alert(`Sorry to see you are leaving! You'll miss a good game, mate!`)
        return false
    }
}

const rules = () => {
  alert('Rules for the game are the following ones.')
  alert(`Game consists on guessing all the words in less than ${timer} seconds.`+ '\nIf you do not know a word, you can skip (hit esc or intro) or indicate pasapalabra and the question will be kept for later.\n')
  alert('Each player starts with 100 points. \nFor each correct word you will get 5 points.\n \n For each incorret word you will loose 5 points.\n \n For each question you skip you will loose 2 points.\n')
  alert('You can stop the game at any time by writing end.')
  alert(`🎉LET'S PLAY!🎉`)
}

const randomScoreForEachPlayer = () => {
    let individualRandomScore = generalRandomScore[Math.floor(Math.random() * generalRandomScore.length)]
return individualRandomScore
}

const ranking = () => {
    for (let i = 0; i<players.length; i++){
        totalPoints = players[i].Score.reduce((acc,cv) => acc + cv)
        players[i].Score = Number([totalPoints])    
    }
    if (welcomeMessage !== ''){
      players.push({Name: welcomeMessage.charAt(0).toUpperCase() + welcomeMessage.slice(1) , Score: finalScore})
    } else if (welcomeMessage === ''){
      players.push({Name: 'Stranger' + welcomeMessage.slice(1), Score: finalScore})
    }
    let classification = players.sort(({Score:a}, {Score:b}) => b-a)
    return classification
} 

const startTimer = () => {
    return startTime = new Date()
}

const endTimer = () => {
    return endTime = new Date()
}

const modifyToStartAgain = () => {
  userActualScore = [100]
  guessedQuestions = []
  nonGuessedQuestions = []
  for( let i = 0; i < players.length; i++){  
    if ( players[i].Name === welcomeMessage.charAt(0).toUpperCase() + welcomeMessage.slice(1) || players[i].Name === 'Stranger') { 
      players.splice(i, 1); 
    }
  }
  players.forEach(element => element.Score = [100])
  console.clear
}

const playAgain = () => {
  let playAgainAnswer = Boolean(confirm('Would you like to play again?'))
  if (playAgainAnswer){
    modifyToStartAgain()
    welcomeMessage = prompt(`Welcome back to Pasapalabra! What was your name?`)
    throw letsPlayPasapalabra()
  } else if (!playAgainAnswer) {
    throw alert('Thanks for playing and hope to see you soon :)')

  }
}

const yourTimeIsOver = () => {
    alert(`Your final punctuation is....  ${finalScore} points!`)
    alert('The final scores are as follow:')
    document.write(ranking())
    playAgain()
}

const finalTime = () => {
    let timeDifference = Math.floor((endTime - startTime)/1000)
    let timeLeft = timer - timeDifference
    if (timeLeft > 0){
        alert (`You have ${timeLeft} seconds left and your actual score is ${finalScore}.`)
        return true
    } else if (timeLeft <= 0){
        alert(`⏲️Your time is up!⏲️`)
        return false
    }
}

const capitalizeFirstLetter = (wordToCapitalize) => {
  return wordToCapitalize.charAt(0).toUpperCase() + wordToCapitalize.slice(1);
};

const goodbye = () => {
    if (guessedQuestions.length !== 0){
        alert ('You are leaving before finishing the game. You have guessed ' + guessedQuestions.length + " words! Your final score is " + finalScore + ' points.' + `\nAnd the final ranking is as follows:\n`)
        console.table(ranking())
        return
    } else if (guessedQuestions.length === 0){
        alert ('You are leaving before finishing the game. \nYou have not guessed a single word. Better luck next time! \nYour final score is: ' + finalScore + ' points.' + `\nAnd the final ranking is as follows:`) 
        console.table(ranking())
        return
    }
alert ('Byeeee!')
}

const checkScore = (points) =>{
    switch(points){
    case -2: 
    userActualScore.push(points);
    break;
    case 5:
    userActualScore.push(points);
    break;
    case -5:
    userActualScore.push(points);
    break;
    }
}

const generateQuestion = (turn) => {
startTimer()
  turn.forEach(function (onlyQuestion) {
    let randomQuestion = Math.floor(Math.random()*3)
    const userAnswerRaw = prompt(onlyQuestion.question[randomQuestion]);
    let findIndex = info.map((element) => element.question[randomQuestion]).indexOf(onlyQuestion.question[randomQuestion]);
    if (userAnswerRaw === null) {
      checkScore(-2) 
        finalScore = userActualScore.reduce((acc,cv) => acc + cv)
        alert('⏭️ You will skip this question for now and loose 2 points.')
        if (!(nonGuessedQuestions.includes(info[findIndex]))) {
            nonGuessedQuestions.push(info[findIndex])
        } 
    } else if (userAnswerRaw != null) {
      const userAnswer = userAnswerRaw.toLowerCase();
      if (userAnswer === 'end') {
      finalScore = userActualScore.reduce((acc,cv) => acc + cv)
      throw goodbye() 
      } else if (userAnswer === "pasapalabra") {
        checkScore(-2) 
        finalScore = userActualScore.reduce((acc,cv) => acc + cv)
        alert("⏭️ PASAPALABRA ⏭️ \n You will skip this question for now and loose 2 points.");
        if (!(nonGuessedQuestions.includes(info[findIndex]))) {
            nonGuessedQuestions.push(info[findIndex])
        } 
      } else if ( userAnswer === ''){
        checkScore(-2) 
        finalScore = userActualScore.reduce((acc,cv) => acc + cv)
        alert('⏭️ You will skip this question for now and loose 2 points.')
        if (!(nonGuessedQuestions.includes(info[findIndex]))) {
            nonGuessedQuestions.push(info[findIndex])
        } 
      } else {
        const checkingAnswers = () => {
          if (info[findIndex].answer[randomQuestion] === userAnswer) {
            checkScore(5)
            finalScore = userActualScore.reduce((acc,cv) => acc + cv)
            alert("✅ Correct! ✅" + `\n ${capitalizeFirstLetter(info[findIndex].answer[randomQuestion])} is the correct answer. \n You won 5 points!`);
            guessedQuestions.push(info[findIndex])
            if ((info.length - guessedQuestions.length) !== 0){
                alert("You have " + (info.length - guessedQuestions.length) + " words left to finish the game")
            } else if (((info.length - guessedQuestions.length) === 0)){
                alert ('🎊 YOU HAVE GUESSED ALL THE WORDS! ')
                yourTimeIsOver()

            }
          } else {
            checkScore(-5)
            finalScore = userActualScore.reduce((acc,cv) => acc + cv) 
            alert("❌ Incorrect! ❌ " + `\n ${capitalizeFirstLetter(userAnswer)} is not the correct answer. \nYou loose 5 points`);
            if (!(nonGuessedQuestions.includes(info[findIndex]))) {
                nonGuessedQuestions.push(info[findIndex])
            } 
            alert("You have " + (info.length - guessedQuestions.length) + " words left to finish the game!" );
          }
       
        };
        checkingAnswers();
      }
    }
    players.forEach(element => element.Score.push(randomScoreForEachPlayer()))
    endTimer()
    if (!finalTime()) {
      yourTimeIsOver()
      return
    }
  });
return
};

let welcomeMessage = prompt(`Welcome to Pasapalabra! What's your name?`)
const letsPlayPasapalabra = () => {
  if (welcome()) {
    rules()
    generateQuestion(info)
    while (guessedQuestions.length !== info.length){
    generateQuestion(nonGuessedQuestions)
    }
  } else {
    return
  }
}


letsPlayPasapalabra();
