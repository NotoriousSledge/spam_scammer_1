import { generateCardInformation } from './generate.ts';
import { logSize, pingLog } from './log.ts';
import { postCardInformation } from './post.ts';

const worker = async () => {
  let cardInformation;
  while (true) {
    cardInformation = generateCardInformation();
    try {
      await postCardInformation(cardInformation);
      void pingLog().then(writeProgress);
    } catch (e) {
      console.error(e);
    }
  }
};

const writeProgress = () => {
  console.log('Data posted: ', logSize());
};

await Promise.all([
  worker(),
  worker(),
  worker(),
  worker(),
  worker(),
  worker(),
  worker(),
  worker(),
  worker(),
  worker(),
]);
