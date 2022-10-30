import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'

export const controls = [
  { name: 'Agenda', href: '/', icon: <CalendarMonthIcon fontSize={'medium'} sx={{mb: 0.2}}/> },
  { name: 'Messages', href: '/', icon: <SmsOutlinedIcon fontSize={'medium'} sx={{mb: 0.2}}/> },
  { name: 'Reports', href: '/', icon: <TrendingUpIcon fontSize={'medium'} sx={{mb: 0.2}}/> }
]

export const systems = [
  { name: 'Configuration', href: '/', icon: <SettingsIcon fontSize={'medium'} sx={{mb: 0.2}}/> },
  { name: 'LogOut', href: '/', icon: <LogoutIcon fontSize={'medium'} sx={{mb: 0.2}}/> }
]
