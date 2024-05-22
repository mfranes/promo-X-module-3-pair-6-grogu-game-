function Dice({setDiceResult, updateGame}) {

  const rollDice = (sides) => {
    const minThrow = 1; // El valor mínimo del dado
    const diceResult = Math.floor(Math.random() * (sides - minThrow + 1) ) + minThrow; // Fórmula provista por Chat GPT
    console.log('rollDice -> diceResult: ' + diceResult);
    return diceResult;
  };

    const handleDice = () => {
      // Obtiene el resultado del lanzamiento de un dado de 4 caras
      const diceResult = rollDice(4);
      // Guarda el resultado del dado en el useState
      setDiceResult(diceResult);
      // Llama a la funcion de App para actualizar el estado del juego
      updateGame();
    }

    return (
        <button className="dice" onClick={handleDice}>Lanzar Dado</button>
    );
}

export default Dice;
