import { mocks } from './mock/mockIndex';
import camelize from 'camelize-ts';

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

export const restaurantsTransform = async () => {
  try {
    const result: { [key: string]: any } = camelize(await restaurantsRequest());

    return result;
  } catch (e) {
    console.log(e);
  }
};
