import 'react-calendar/dist/Calendar.css'
import '../styles/global.css'
import '../styles/typography.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { ModalContent } from '../components/Modal'
import { EventProvider } from '../context/EventsContext'
import { StateProvider } from '../context/StateContext'
import Index from './index';

const PreApp = () => {
  return (
      <div>
      <EventProvider>
        <StateProvider>
            <Index/>
            <ModalContent />
            <ToastContainer className="text-sm" />
        </StateProvider>
      </EventProvider>
      </div>
  )
}

export default PreApp
