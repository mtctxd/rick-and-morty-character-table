// import { useAppDispatch, useAppSelector } from './redux/hooks'
// import { useGetCharactersQuery } from './redux/rnmApi';

import Characters from './conponents/Characters';

const App = () => {
  // const {value} = useAppSelector(store => store.appSlice);
  // const { data, error, isLoading} = useGetCharactersQuery('');
 
  // if(data) {
  //   console.log(data);
  // }

  // const dispatch = useAppDispatch();

  return (
    <Characters />
  )
}

export default App
