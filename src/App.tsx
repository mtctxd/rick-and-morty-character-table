import { useAppDispatch, useAppSelector } from './redux/hooks'

import { increment } from './redux/appSlice';

import './App.css'
import { useGetCharactersQuery } from './redux/rnmApi';

const App = () => {
  const {value} = useAppSelector(store => store.appSlice);
  const { data, error, isLoading} = useGetCharactersQuery('');
 
  if(data) {
    console.log(data);
  }

  const dispatch = useAppDispatch();

  return (
    <div className="App">
      App
      <button
        onClick={() => dispatch(increment())}
      >
        {value}
      </button>
    </div>
  )
}

export default App
