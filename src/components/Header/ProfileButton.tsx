import PermIdentityIcon from '@mui/icons-material/PermIdentity'

export const ProfileButton = () => {

  return (
    <span className="ml-4 flex-row gap-x-4 xl:flex">
      <button className="flex items-center rounded-lg bg-search p-4 transition-colors hover:bg-navHover" id="_btnProfil">
        <PermIdentityIcon fontSize={'large'} color = {'disabled'}/>
      </button>
    </span>
  )
}
