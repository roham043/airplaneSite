import React from 'react';
import { useDispatch } from 'react-redux';
import Domesticflight from '../../../assets/images/Domesticflight.png';
import internationalflight from '../../../assets/images/internationalflight.png';
import train from '../../../assets/images/train.png';
import bus from '../../../assets/images/bus.png';
import tour from '../../../assets/images/tourism.png';
import hotel from '../../../assets/images/hotel.png';
import villa from '../../../assets/images/villa.png';

const images = [
    { id: 1, title: "Domesticflight", image: Domesticflight },
    { id: 2, title: "internationalflight", image: internationalflight },
    { id: 3, title: "train", image: train },
    { id: 4, title: "bus", image: bus },
    { id: 5, title: "tour", image: tour },
    { id: 6, title: "hotel", image: hotel },
    { id: 7, title: "villa", image: villa }
]

const buttonHeaderHOC = (WrappedComponent) => {
    const ButtonHeaderHOC = () => {
        const [anchorEl, setAnchorEl] = React.useState(null);
        const dispatch = useDispatch();
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };
        const handleClose = (e) => {
            setAnchorEl(null);
            const filterImage = images.filter(data => data.title === e.target.name)
            const filteraddress = filterImage.map(data => { return (data.image) });
            const filterTitle = filterImage.map(data => { return (data.title) })
            dispatch({ type: filterTitle[0], payload: filteraddress[0] })
        };
        return <WrappedComponent
            open={open}
            handleClick={handleClick}
            handleClose={handleClose}
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            />
    }
    return ButtonHeaderHOC
}
export default buttonHeaderHOC;