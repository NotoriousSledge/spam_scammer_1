import { faker } from '@faker-js/faker';
import { CardInformation } from './post.ts';
// @ts-ignore
import { GenCC } from 'creditcard-generator';

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getCardNumber() {
  return GenCC(Math.random() > 0.5 ? 'VISA' : 'MASTERCARD', 1)[0];
}

function getExpiryDate() {
  return `0${getRandomInt(1, 9)} / ${getRandomInt(23, 28)}`;
}

function getCvv() {
  return String(getRandomInt(100, 999));
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
