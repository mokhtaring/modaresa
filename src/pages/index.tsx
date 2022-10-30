import { Header } from '../components/Header';
import { EventsCalendar } from '../components/EventsCalendar';

const Index = () => {
  return (
      <main className="flex w-full flex-col bg-primary scrollbar">
        <Header />
        <div className="flex w-full flex-1 flex-row bg-primary">
          <EventsCalendar />
        </div>
      </main>
  )
}

export default Index
