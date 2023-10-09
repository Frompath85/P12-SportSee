import "./KeyData.css"
import CaloriesIcon from "../../assets/calories-icon.png"
import CarbsIcon from "../../assets/carbs-icon.png"
import FatIcon from "../../assets/fat-icon.png"
import ProteinIcon from "../../assets/protein-icon.png"

export default function KeyData() {
  return (
    <aside className='KeyData'>
    <div className='KeyItem'>
      <img src={CaloriesIcon} alt="icone calories" />
      <div className='KeyValue'>
        <p className='Value'></p>
        <p className='Title'>Calories</p>
      </div>
    </div>
    <div className='KeyItem'>
      <img src={ProteinIcon} alt="icone proteins" />
      <div className='KeyValue'>
        <p></p>
        <p className='Title'>Proteins</p>
      </div>
    </div>
    <div className='KeyItem'>
      <img src={CarbsIcon} alt="icone glucides" />
      <div className='KeyValue'>
        <p className='Value'></p>
        <p className='Title'>Glucides</p>
      </div>
    </div>
    <div className='KeyItem'>
      <img src={FatIcon} alt="Icone lipides" />
      <div className='KeyValue'>
        <p className='Value'></p>
        <p className='Title'>Lipides</p>
      </div>
    </div>
  </aside>
  )
}
