import { useNavigate } from 'react-router-dom'
import styles from'./footer.module.css'

export default function Footer (){
    const navigate = useNavigate()
    const returnClickHandler=()=>{
        navigate('/')
    }
    return (
        <div className={styles.header}>
            <button onClick={returnClickHandler}>Назад</button>
        </div>
    )
}