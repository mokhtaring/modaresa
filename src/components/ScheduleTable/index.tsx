import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  DayView,
  WeekView,
  MonthView,
  Toolbar,
  EditRecurrenceMenu,
  DragDropProvider,
  CurrentTimeIndicator,
  Resources,
} from '@devexpress/dx-react-scheduler-material-ui'
import Paper from '@mui/material/Paper'
import Scheduler from '../../devexpress/dx-react-scheduler-material-ui'
import { useStateContext } from '../../context/StateContext'
import { ISchedulerView } from '../../core/types';
import { resources } from '../../mocks/dataResouces';
import { useState } from 'react';
import { useEventsContext } from '../../context/EventsContext';

export const ScheduleView: React.FC<ISchedulerView> = ({
  events,
  currentDate
}) => {
  const { search } = useStateContext()
  const { commitChanges } = useEventsContext()
  const [view, setView] = useState<string>("Day")

  const filtered = events.filter(({ title }) =>
    title?.toLocaleLowerCase().includes(search?.toLocaleLowerCase())
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setView(e.target.value)
  }

  return (
      <div>
        <FormControl>
          <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Day"
              name="radio-buttons-group"
              onChange={(e)=>handleChange(e)}
          >
            <FormControlLabel className="_day" value="Day" control={<Radio />} label="Day" />
            <FormControlLabel className="_week" value="Week" control={<Radio />} label="Week" />
            <FormControlLabel className="_month" value="Month" control={<Radio />} label="Month" />
          </RadioGroup>
        </FormControl>
        <Paper>
          <Scheduler data={filtered}>
            <ViewState currentDate={currentDate} currentViewName={view} />
            <EditingState onCommitChanges={commitChanges}/>
            <DayView startDayHour={9} endDayHour={18} cellDuration ={15}/>
            <WeekView startDayHour={9} endDayHour={18} cellDuration ={15}/>
            <MonthView />
            <Appointments />
            <Toolbar />
            <Resources data={resources} />
            <EditRecurrenceMenu />
            <DragDropProvider />
            <AppointmentTooltip
                showOpenButton
                showDeleteButton
            />
            <AppointmentForm />
            <CurrentTimeIndicator
                shadePreviousCells
                shadePreviousAppointments
            />
          </Scheduler>
        </Paper>
      </div>
  )
}
