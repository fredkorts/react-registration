import useWindowSize from '../../../helpers/getWindowSize';
import Confetti from 'react-confetti'

const Surprise = () => {
  const size = useWindowSize();
  return (
    <Confetti
      width={size.width}
      height={size.height}
      numberOfPieces={300}
    />
  )
}

export default Surprise;