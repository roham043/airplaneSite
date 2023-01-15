import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './HeaderStyles.module.css';
import Domesticflight from '../../assets/images/Domesticflight.png';
import internationalflight from '../../assets/images/internationalflight.png';
import train from '../../assets/images/train.png';
import bus from '../../assets/images/bus.png';
import tour from '../../assets/images/tourism.png';
import hotel from '../../assets/images/hotel.png';
import villa from '../../assets/images/villa.png';
// import DirectionsBus from '@mui/icons-material/DirectionsBus';
// import Train from '@mui/icons-material/Train';
// import FlightTakeoff from '@mui/icons-material/FlightTakeoff';
// import FlightLand from '@mui/icons-material/FlightLand';
// import Luggage from '@mui/icons-material/Luggage';
// import Apartment from '@mui/icons-material/Apartment';
// import Villa from '@mui/icons-material/Villa';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { GiCommercialAirplane } from "react-icons/gi";
import { ImAirplane } from "react-icons/im";
import { IoTrain } from "react-icons/io5";
import { FaBusAlt } from "react-icons/fa";
import { MdLuggage } from "react-icons/md";
import { FaHotel } from "react-icons/fa";
import { GiVillage } from "react-icons/gi";


const images = [
    { id: 1, title: "Domesticflight", image: Domesticflight },
    { id: 2, title: "internationalflight", image: internationalflight },
    { id: 3, title: "train", image: train },
    { id: 4, title: "bus", image: bus },
    { id: 5, title: "tour", image: tour },
    { id: 6, title: "hotel", image: hotel },
    { id: 7, title: "villa", image: villa }
]

const HeaderAppContainer = () => {
    const imgBackground = useSelector(state => state.imgBackground);
    const value = useSelector(state => state.value);
    /*const [value, setValue] = React.useState(0);*/
    const dispatch = useDispatch()
    //--------------------------------------------
    const handleClick = (e) => {
        const filterImage = images.filter(data => data.title === e.target.name)
        const filteraddress = filterImage.map(data => { return (data.image) });
        const filterTitle = filterImage.map(data => { return (data.title) })
        dispatch({ type: filterTitle[0], payload: filteraddress[0] })
    }
    //----------------------------------------------
    const handleChange = (e, newValue) => {
        // setValue(newValue);
        const filterImage = images.filter(data => data.title === e.target.name)
        const filteraddress = filterImage.map(data => { return (data.image) });
        const filterTitle = filterImage.map(data => { return (data.title) })
        dispatch({ type: filterTitle[0], payload: filteraddress[0] });
        dispatch({ type: e.target.id, payload: newValue });
        console.log(`e.target.id:${e.target.id}`);
        console.log(`newValue:${newValue}`);
        console.log(`value:${value}`);
    };
    //----------------------------------------------
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={imgBackground} alt={1}></img>

            </div>
            <div className={styles.TabsContainer}>
                <Tabs sx={{ color: 'red' }} value={value} onChange={handleChange} className={styles.Tabs} aria-label="icon label tabs example">
                    <Tab sx={{ fontSize: '20px', py: 0, px: 6, m: 1 }} id='0' icon={<GiCommercialAirplane />} label="پرواز داخلی" onClick={handleClick} name="Domesticflight" ></Tab>
                    <Tab sx={{ fontSize: '20px', py: 0, px: 6, m: 1 }} id='1' icon={<ImAirplane />} label="پرواز خارجی" onClick={handleClick} name="internationalflight" ></Tab>
                    <Tab sx={{ fontSize: '20px', py: 0, px: 6, m: 1 }} id='2' icon={<IoTrain />} label="قطار" onClick={handleClick} name="train" />
                    <Tab sx={{ fontSize: '20px', py: 0, px: 6, m: 1 }} id='3' icon={<FaBusAlt />} label="اتوبوس" onClick={handleClick} name="bus" />
                    <Tab sx={{ fontSize: '20px', py: 0, px: 6, m: 1 }} id='4' icon={<MdLuggage />} label="تور" onClick={handleClick} name="tour" />
                    <Tab sx={{ fontSize: '20px', py: 0, px: 6, m: 1 }} id='5' icon={<FaHotel />} label="هتل" onClick={handleClick} name="hotel" />
                    <Tab sx={{ fontSize: '20px', py: 0, px: 6, m: 1 }} id='6' icon={<GiVillage />} label="ویلا و اقامتگاه" onClick={handleClick} name="villa" />
                </Tabs>
            </div>
        </div>
    )
}
export default HeaderAppContainer;