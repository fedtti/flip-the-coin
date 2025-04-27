import './style.scss';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main id="contents">
    <h1>Flip the coin</h1>
    <p>Press the coin or the button to flip the coin</p>
    <figure>
      <img id="side" src="/img/heads.svg?inline" alt="Heads">
      <figcaption id="label">Heads</figcaption>
    </figure>
    <button id="flip">Random</button>
  </main>
`;

/**
 * 
 */
const flipCoin = () => {


  // coin.innerHTML = `
  //  prova
  // `;
};

document.querySelector<HTMLImageElement>('#side')!.addEventListener('click', flipCoin, false);
document.querySelector<HTMLButtonElement>('#flip')!.addEventListener('click', flipCoin, false);