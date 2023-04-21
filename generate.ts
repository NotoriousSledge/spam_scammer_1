import { faker } from '@faker-js/faker';
import { CardInformation } from './post.ts';

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getCardNumber() {
  // Visa starts with 4, MasterCard with 5
  const first = Math.random() > 0.5 ? '4' : '5';

  // Get the card number
  const number = getRandomInt(
    Number(`${first}000000000000000`),
    Number(`${first}999999999999999`)
  );

  // Split it into groups of 4 digits
  return String(number).replace(/^(.{4})(.{4})(.{4})(.*)$/, '$1 $2 $3 $4');
}

function getExpiryDate() {
  return `0${getRandomInt(1, 9)} / ${getRandomInt(23, 28)}`;
}

function getCvv() {
  return getRandomInt(100, 999);
}

export function generateCardInformation(): CardInformation {
  return {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    card_number: getCardNumber(),
    expiration_date: getExpiryDate(),
    cvv: getCvv(),
  };
}
