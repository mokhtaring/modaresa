import { useStateContext } from '../../context/StateContext'
import { FunctionComponent } from 'react';
import DehazeIcon from '@mui/icons-material/Dehaze';

export const Hamburguer :FunctionComponent = () => {
  const { menu, setMenu } = useStateContext()

  return (
    <button onClick={() => setMenu(!menu)} id="_btnHmbg">
      <DehazeIcon fontSize = {'large'} />
    </button>
  )
}
