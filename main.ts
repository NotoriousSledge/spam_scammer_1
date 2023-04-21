import { generateCardInformation } from './generate.ts';
import { postCardInformation } from './post.ts';
let iteration = 0;

let cardInformation;
while (true) {
  cardInformation = generateCardInformation();
  await postCardInformation(cardInformation);
  iteration++;

  console.log('Iteration: ', iteration, 'Card: ', cardInformation);
}
