import { increment } from './redux/AppSlice';
import { useAppDispatch, useAppSelector } from './redux/hooks'

import './App.css'

const App = () => {
  const {value} = useAppSelector(store => store.appSlice);
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
