import './sidebaroptions.css'

interface ISidebarOptions {
  option: string;
  Icon?: any
}


const SidebarOptions = ({ option, Icon }: ISidebarOptions) => {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{option}</h4> : <p>{option}</p>}
    </div>
  )
}

export default SidebarOptions