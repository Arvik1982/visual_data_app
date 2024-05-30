
import DataChoose from "../../Components/DataChooseElement/DataChoose"
import { data } from "../../helpers/data/helpData"
import styles from './start.module.css'

export default function StartPage (){




    return (
    <div className={styles.start__container}>
      <h2>Cводные данные по системам:</h2>
      {data.map((el)=>{return(<DataChoose key={el.id} title={el.name}/>)})}
    </div>
    )
}