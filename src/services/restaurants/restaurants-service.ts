import { mocks } from './mock/mockIndex';

export const restaurantsRequest = (
  location: string = '37.7749295,-122.4194155'
) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];

    if (!mock) {
      reject('not found');
    }

    resolve(mock);
  });
};