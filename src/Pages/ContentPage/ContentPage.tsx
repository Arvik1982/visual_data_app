import { useParams } from 'react-router-dom'
import DataList from '../../Components/DataComponent/DataList'
import Footer from '../../Components/FooterComponent/Footer'
import Header from '../../Components/HeaderComponent/Header'
import styles from'./content.module.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentDataId } from '../../store/slices/allDataSlice'

export default function ContentPage (){

    const params = useParams()
    const dispatch = useDispatch()
  
    useEffect(()=>{
        dispatch(setCurrentDataId(params.id))
    },[])

    return (
        <div className={styles.content__container}>
        <Header></Header>
        <DataList></DataList>
        <Footer></Footer>       
        </div>
    )
}