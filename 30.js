




//"scissors", "paper" --> "Player 1 won!"
//"scissors", "rock" --> "Player 2 won!"
//"paper", "paper" --> "Draw!"
const rps = (p1, p2) => {
    let result = ''
    if (p1 === 'rock' && p2 === 'rock') {
      return result + "Draw!"
    }
    if (p1 === 'scissors' && p2 === 'scissors') {
      return result + "Draw!"
    }
    if (p1 === 'paper' && p2 === 'paper') {
      return result + "Draw!"
    }
  
  
    if (p1 === 'rock' && p2 === 'scissors') {
      return result + "Player 1 won!"
    }
  
    if (p1 === 'rock' && p2 === 'paper') {
      return result + "Player 2 won!"
    }
  
    if (p1 === 'paper' && p2 === 'rock') {
      return result + "Player 1 won!"
    }
  
    if (p1 === 'paper' && p2 === 'scissors') {
      return result + "Player 2 won!"
    }
  
    if (p1 === 'scissors' && p2 === 'paper') {
      return result + "Player 1 won!"
    }
  
    if (p1 === 'scissors' && p2 === 'rock') {
      return result + "Player 2 won!"
    }
    return result
  };