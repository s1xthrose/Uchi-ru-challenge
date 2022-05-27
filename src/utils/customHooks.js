import { useEffect, useCallback } from 'react';
import { catsApi } from './CatsApi';

export const useFetch = (data, dispatch) => {
  useEffect(() => {
    dispatch({ type: 'FETCHING_IMAGES', fetching: true });
    catsApi.getCats(data.page)
      .then(images => {
        dispatch({ type: 'STACK_IMAGES', images });
        dispatch({ type: 'FETCHING_IMAGES', fetching: false });
      })
      .catch(e => {
        dispatch({ type: 'FETCHING_IMAGES', fetching: false });
        return e;
      })
  }, [dispatch, data.page])
}

export const useInfiniteScroll = (scrollRef, dispatch, path) => {
  const scrollObserver = useCallback(
    node => {
      new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (en.intersectionRatio > 0) {
            dispatch({ type: 'NEXT_PAGE' });
          }
        });
      }).observe(node);
    },
    [dispatch]
  );
  useEffect(() => {
    if (scrollRef.current) {
      scrollObserver(scrollRef.current);
    }
  }, [scrollObserver, scrollRef, path]);
}