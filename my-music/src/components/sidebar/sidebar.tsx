
import './sidebar.css'
import SidebarOption from './atoms/sidebaroptions'
// import HomeIcon from '@mui/icons-material/Home';
// import SearchIcon from '@mui/icons-material/Search';
// import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
// import { SvgIcon } from '@mui/material';

import { useStateProviderValue } from '../../state/StateProvider'

interface IPlaylist {
  name: string
}


const Sidebar = () => {
  const [{ playlists}, dispatch] = useStateProviderValue();

  console.log({
    playlists
  })

  return (
    <div className='sidebar'>
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />


      <SidebarOption option="Home" />

      <SidebarOption option="Search" />
      <SidebarOption option="Your Library" />



      <strong className='sidebar__title'>PLAYLISTS</strong>
      {playlists?.items?.map((playlist: IPlaylist) => (
        <SidebarOption option={playlist.name} />
      ))}


    </div>
  )
}

export default Sidebar