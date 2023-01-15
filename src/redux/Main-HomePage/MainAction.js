import {MAIN_TYPE} from './MainType';
import Domesticflight from '../../assets/images/Domesticflight.png';
import internationalflight from '../../assets/images/internationalflight.png';
import train from '../../assets/images/train.png';
import bus from '../../assets/images/bus.png';
import tour from '../../assets/images/tourism.png';
import hotel from '../../assets/images/hotel.png';
import villa from '../../assets/images/villa.png';

const images = [
    { id: 1, title: "Domesticflight", image1: Domesticflight },
    { id: 2, title: "internationalflight", image: internationalflight },
    { id: 3, title: "train", image: train },
    { id: 4, title: "bus", image: bus },
    { id: 5, title: "tour", image: tour },
    { id: 6, title: "hotel", image: hotel },
    { id: 7, title: "villa", image: villa }
]

export const MainAction =() =>{
    return{
         type:MAIN_TYPE.DOMESTICfLIGHT,
         payload:images.image1,
    }
    
}