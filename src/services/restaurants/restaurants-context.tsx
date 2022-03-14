import React, { useState, createContext, useEffect, useMemo } from 'react';
import {
  restaurantsRequest,
  restaurantsTransform
} from './restaurants-service';

export type RestaurantContextProps = {
  children: React.ReactNode;
};

export const RestaurantsContext = createContext({});

export const RestaurantContextProvider: React.FC<RestaurantContextProps> = ({
  children
}) => {
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants: [
          { key: 1, name: 1 },
          { key: 2, name: 2 },
          { key: 3, name: 3 }
        ]
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
