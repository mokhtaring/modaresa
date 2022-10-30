import { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { IChildren, IEvents, IEventsContext } from '../../core/types';
import { ChangeSet } from '@devexpress/dx-react-scheduler';
import { CRUD , LocalStorage } from '../../core/methods';

const defaultEvents: IEventsContext = {
  events: [],
  setEvents: () => [],
  saveEventStorage: () => null,
  removeEventStorage: () => null,
  updateEventStorage: () => null,
  commitChanges: () => null
}

const EventsContext = createContext(defaultEvents)

const useEventsContext = () => useContext(EventsContext)

const EventProvider = ({ children }: IChildren) => {
  const [events, setEvents] = useState<IEvents[]>([])
  const key = 'events'
  const local = LocalStorage()
  const crud = CRUD()

  const saveEventStorage = (event: IEvents) => {
    const saveEvent = crud.add(events, event)

    local.set(key, JSON.stringify(saveEvent))
    setEvents(saveEvent)
    toast.success(`Event ${event.title} created!`)
  }

  const removeEventStorage = (id: string) => {
    const remove = crud.remove(events, id)

    local.set(key, JSON.stringify(remove))
    setEvents(remove)
    toast.success(`Event removed!`)
  }

  const updateEventStorage = (event: IEvents) => {
    const update = crud.update(event, events)

    local.set(key, JSON.stringify(update))
    setEvents(update)
    toast.success(`Event ${event.title} updated!`)
  }

  const commitChanges = (changes: ChangeSet) => {
    if (changes.changed) {
      const keys = Object.keys(changes.changed);
      const eventOld : IEvents[] = events.filter(({ id }) => id === keys[0]);
      const event0  = eventOld[0];
      const startTime = changes.changed[keys[0]!].startDate ?? new Date(`${event0?.date} ${event0?.startDate}`) ;
      const endTime = changes.changed[keys[0]!].endDate ?? new Date(`${event0?.date} ${event0?.endDate}`);
      const startDate :string  = startTime.getHours() + ':' + (startTime.getMinutes()<10?'0':'') + startTime.getMinutes();
      const endDate :string  = endTime.getHours() + ':' + (endTime.getMinutes()<10?'0':'') + endTime.getMinutes();
      const date :string = endTime.toISOString().split('T')[0];
      const title = changes.changed[keys[0]!].title ?? event0?.title;
      const type = changes.changed[keys[0]!].type ?? event0?.type;
      const buyer = changes.changed[keys[0]!].buyer ?? event0?.buyer;
      const company = changes.changed[keys[0]!].company ?? event0?.company;
      const vendor = changes.changed[keys[0]!].vendor ?? event0?.vendor;

      const newdate  = new Date(`${date} ${startDate}`)
      if(newdate < new Date()){
        toast.error(`You can't update this event on calendar, please choose a date in the future`)
        return
      }

      const event : IEvents ={
        id: event0?.id!,
        buyer: buyer,
        date: date,
        startDate: startDate !== "0:00" ? startDate : event0?.startDate!,
        endDate: endDate !== "0:00" ? endDate : event0?.endDate! ,
        title: title,
        type: type,
        company: company,
        vendor: vendor
      }
      updateEventStorage(event);
    }

    if (changes.deleted) {
      removeEventStorage(String(changes.deleted));
    }
  }

  useEffect(() => {
    const getItems = local.get(key)
    setEvents(getItems)
  }, [setEvents])

  return (
    <EventsContext.Provider
      value={{
        events,
        setEvents,
        saveEventStorage,
        removeEventStorage,
        updateEventStorage,
        commitChanges
      }}
    >
      {children}
    </EventsContext.Provider>
  )
}

export { EventProvider, useEventsContext }
