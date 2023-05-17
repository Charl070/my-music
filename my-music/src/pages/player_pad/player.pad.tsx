import './player_pad.css'

import Body from '../../components/body/body'
import Sidebar from '../../components/sidebar/sidebar'
import Footer from '../../components/footer/footer'

const PlayerPad = ({ spotify }: any) => {




  return (
    <div className='player'>

      <div className='player-body'>

        <Sidebar />
        <Body />

      </div>

      <Footer />

    </div>

  )

}

export default PlayerPad