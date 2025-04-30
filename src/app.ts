import './style.scss';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main id="contents">
    <h1>Flip the coin</h1>
    <p>Press the coin or the button to flip the coin</p>
    <figure>
      <img id="side" src="/img/heads.svg?inline" alt="Coin’s Heads">
      <figcaption id="label">Heads</figcaption>
    </figure>
    <button id="flip">Random</button>
  </main>
`;

/**
 * Flip the coin.
 * @returns {void}
 */
const flipCoin = (): void => {
  const result: string = Math.random() < 0.5 ? 'Heads' : 'Tails';
  document.querySelector<HTMLImageElement>('#side')!.src = `/img/${result.toLowerCase()}.svg?inline`;
  document.querySelector<HTMLImageElement>('#side')!.alt = `Coin’s ${result}`;
  document.querySelector<HTMLImageElement>('#label')!.textContent = result;
};

document.querySelector<HTMLImageElement>('#side')!.addEventListener('click', flipCoin, false);
document.querySelector<HTMLButtonElement>('#flip')!.addEventListener('click', flipCoin, false);
