import React from 'react';

function Guess({ guess, setGuess }) {
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        console.log({ guess });
        setGuess('');
      }}
    >
      <label htmlFor="guess-input">Guess: </label>
      <input
        required
        maxLength={5}
        id="guess-input"
        type="text"
        pattern="^[a-zA-Z]{5}$"
        title="You must enter exactly 5 letters"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toLocaleUpperCase())}
      />
    </form>
  );
}

export default Guess;
