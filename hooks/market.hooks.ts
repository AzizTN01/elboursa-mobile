// Assuming this fetches data using appropriate authentication
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import {get, post} from '../utils/apiHelpers';
import {getData} from '../utils/storage';

export const useMarkets = () => {
  const BASE_ENDPOINT = 'markets/combined';
  const queryClient = useQueryClient();

  const {
    isLoading: isMarketFetchingLoading,
    error: marketFetchError,
    data: marketsData,
  } = useQuery({
    queryKey: ['market-list'],
    queryFn: async () => {
      const authToken = await getData('access-token');
      const headers = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };
      const fetchedMarkets = await get(BASE_ENDPOINT, headers);
      return fetchedMarkets; // Assuming successful response parsing in get()
    },
  });

  return {
    isMarketFetchingLoading,
    marketFetchError,
    marketsData,
  };
};
