import { useSelector } from 'react-redux';

export const useGetError = () => {
  const showError = useSelector((state) => state.show.error);
  const episodeError = useSelector((state) => state.episode.error);
  return showError || episodeError;
};
