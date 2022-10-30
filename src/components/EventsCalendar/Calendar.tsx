import { Calendar } from 'react-calendar'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { ICalendarComponent } from '../../core/types'

export const CalendarComponent = ({ getDate }: ICalendarComponent) => {
  const date = new Date()

  return (
    <Calendar
      onChange={(value: Date) => {
        const calendarCurrentDate = new Date(value)
        getDate(calendarCurrentDate)
      }}
      value={date}
      className="flex w-full flex-col items-center rounded-lg border border-slate-300 p-4 text-xs"
      onClickDecade={undefined}
      locale="en"
      next2Label={null}
      prev2Label={null}
      prevLabel={<KeyboardArrowLeftIcon />}
      nextLabel={<KeyboardArrowRightIcon />}
    />
  )
}
