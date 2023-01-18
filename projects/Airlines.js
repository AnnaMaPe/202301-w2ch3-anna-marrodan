const flights = [
    { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
    { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
    { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
    { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
    { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
    { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
    { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
    { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
    { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
    { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
  ];


const airlinesPro = () => {
  function quit () {
    const quitQuestion = prompt('Would you like to leave the site? Y/N')
    if (quitQuestion === null) {
      alert ('Byeeeeee') 
    } else if (quitQuestion.toUpperCase() === 'Y') {
      alert ('Byeeeeee') 
    } else if (quitQuestion.toUpperCase() === 'N') {
      adminOrUser()
    } else if (quitQuestion.toUpperCase() !== 'Y' || quitQuestion.toUpperCase() !== 'N') {
      alert ('Please, answer only Y or N!')
      quit()
    }
  }

  const adminOrUser = () => {
    const identityQuestion = prompt ('Please, indicate if you are ADMIN or USER')
    if (identityQuestion === null){
        alert ('We are sorry to see you leaving. Hasta pronto!') 
    } else {
      const upperIdentityQuestion = identityQuestion.toUpperCase()
      while (upperIdentityQuestion !== 'ADMIN' || upperIdentityQuestion !== 'USER' ) {
        if (upperIdentityQuestion === 'ADMIN'){
        superAdmin()
        break
        } else if (upperIdentityQuestion === 'USER'){
        superUser()
        break
        } else {
        alert (`Please, answer only ADMIN or USER. Cheers!`)
        adminOrUser() 
        break
        }
      }
    }
  }
  adminOrUser()

  function superUser () {
    const costQuestion = +prompt ('Enter the maximum amount you would like to spend: ')
    if (costQuestion > 89){
      alert (`Down below you will find the flights that cost ${costQuestion} euros or less: `)
      console.log(`List of flights that cost ${costQuestion} euros or less: `)
      flights.map((flight) => {
        if (flight.cost <= costQuestion) {
        console.log (`Flight with ID ${flight.id} goes from ${flight.from} to ${flight.to} has a cost of ${flight.cost} and it is a direct flight. `) 
       }       
      })
    } else if (costQuestion < 90){
      alert ('We are sorry, but none of our flights match the cost you are looking for.')
    }      
  
     
    const quitUserQuestion = prompt('Would you like to check our prices again? Y/N')
      if (quitUserQuestion === null) {
        quit()
      } else if (quitUserQuestion.toUpperCase() === 'Y') {
        superUser()
      } else if (quitUserQuestion.toUpperCase() === 'N') {
        adminOrUser()
      } else if (quitUserQuestion.toUpperCase() !== 'Y' || quitUserQuestion.toUpperCase() !== 'N') {
        alert ('Please, answer only Y or N!')
        superUser()
      }
} 
  

  function superAdmin () {
    const adminQuestion = prompt ('Would you like to add more flights or delete flights? Please answer CREATE or DELETE.')
    if (adminQuestion === null) {
      alert ('We are sorry to see you leaving. Hasta pronto!')
    } else if ( adminQuestion.toUpperCase() === 'CREATE'){
      alert ('You can introduce up to 15 new flights. Please, proceed: ')
      createFlights()
    } else if( adminQuestion.toUpperCase() === 'DELETE'){
      deleteFlights()
    } else {
      alert ('Please, answer only CREATE or DELETE!')
      superAdmin()
    }

  function createFlights () {
    let id = flights.length 
      const addFLights = () => {
        let newFlight = {
          id,
          to: '' ,
          from: '',
          cost: '',
          scale: ''
        }
        do  {newFlight.to = prompt('Please, to proceed introduce the city of origin:')}     
        while (!isNaN(newFlight.to) || newFlight.to === " " || newFlight.to === null)
        do {newFlight.from = prompt('Please, introduce the city of detination:')}
        while (!isNaN(newFlight.from) || newFlight.from === " " || newFlight.from === null)
        do (newFlight.cost = +prompt('Please, introduce the cost of the flight:'))
        while (isNaN(newFlight.cost)|| newFlight.cost === " " || newFlight.cost === null){
        newFlight.scale = Boolean(confirm('Please, indicate if it has an scale (OK) or no (CANCEL):'))
        flights.push(newFlight)
        }
      }  
    addFLights()

     while (flights.length < 15) {
      const anotherFlight = prompt ('Would you like to introduce another flight? Y/N');
      if (anotherFlight.toUpperCase() === 'N' || anotherFlight === null || anotherFlight === '') {
        alert ('Down below you can see the updated list of flights:')
        console.log('Updated list:')
        flights.map((flight) => {
          if (flight.scale === true) {
            console.log(`Flight with ID ${flight.id} goes from ${flight.from} to ${flight.to} has a cost of ${flight.cost} and it is a direct flight. `)
          } else if (flight.scale === false){
            console.log(`Flight with ID ${flight.id} goes from ${flight.from} to ${flight.to} has a cost of ${flight.cost} and it has a layover. `)
          }
          }) 
          quit()
          break
      } else if (anotherFlight.toUpperCase() === 'Y'){
          id++
          addFLights()
        } 
    }
      
    if (flights.length > 14) {
      alert ('You have reached the maximum.')
      alert ('Down below you can see the updated list of flights:')
      console.log('Updated list:')
      flights.map((flight) => {
              console.log (`Flight with ID ${flight.id} goes from ${flight.from} to ${flight.to} has a cost of ${flight.cost} and it is a direct flight. `)
        }) 
      quit()
    }
  }



  // VM721:57 Uncaught ReferenceError: Cannot access 'createFlights' before initialization


  function deleteFlights () {
    let flightToDelete = prompt('Please, indicate the ID of the flight you would like to delete.')
    const selectFlightsToDelete = () => {
         if (flightToDelete === ''|| flightToDelete === null ) {
          deleteFlights()
        } else if (flightToDelete === ''|| +flightToDelete > flights.length || +flightToDelete < 0 ) {
          alert ('The flight you introduced does not exist.')
          deleteFlights()
        } else {
          for (let i = 0; i < flights.length; i++) {
            if (flights[i].id === +flightToDelete){
              flights.splice(i, 1);
              };
          }
          alert (`Down below you have the updated list for today's flights`)
          console.log('Updated list:')
          flights.map((flight) => {
          console.log(`Flight with ID ${flight.id} goes from ${flight.from} to ${flight.to} has a cost of ${flight.cost} and it is a direct flight. `)
          })
        }
    }
    selectFlightsToDelete()

    const repeatselectFlightsToDelete = () => {
      let questionRepeatselectFlightsToDelete = prompt('Would you like to delete another flight? Y/N')
        if (questionRepeatselectFlightsToDelete === null || questionRepeatselectFlightsToDelete.toUpperCase() === 'N') {
          quit()
        } else if (questionRepeatselectFlightsToDelete.toUpperCase() === 'Y') {
          deleteFlights()
        } else if (questionRepeatselectFlightsToDelete.toUpperCase() !== 'Y' || questionRepeatselectFlightsToDelete.toUpperCase() !== 'N') {
          alert ('Please, answer only Y or N!')
          repeatselectFlightsToDelete()
      }
    }
    repeatselectFlightsToDelete()

  }
  
  }
  

 /*
  
    }  else 

 const flightToDelete = +prompt('INSERT ID TO DELETE')

 flights.splice(flightToDelete - 1, 1)
 .filter (PERO NO MODIFICA ARRAY ORIGINAL)
 console.log('This is the list of the updated flights:')
 */

}


airlinesPro()









