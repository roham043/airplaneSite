import Domesticflight from '../../assets/images/Domesticflight.png';

const INITIAL_STATE = {
    imgBackground: Domesticflight,
    value: 0
}

const MainReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "Domesticflight":
            return {
                ...state,
                imgBackground: action.payload
            }
        case "internationalflight":
            return {
                ...state,
                imgBackground: action.payload
            }
        case "train":
            return {
                ...state,
                imgBackground: action.payload
            }
        case "bus":
            return {
                ...state,
                imgBackground: action.payload
            }
        case "tour":
            return {
                ...state,
                imgBackground: action.payload
            }
        case "hotel":
            return {
                ...state,
                imgBackground: action.payload
            }
        case "villa":
            return {
                ...state,
                imgBackground: action.payload
            }
    //==============================================
        case "0":
            return {
                ...state,
                value: action.payload
            }
        case "1":
            return {
                ...state,
                value: action.payload
            }
        case "2":
            return {
                ...state,
                value: action.payload
            }
        case "3":
            return {
                ...state,
                value: action.payload
            }
        case "4":
            return {
                ...state,
                value: action.payload
            }
        case "5":
            return {
                ...state,
                value: action.payload
            }
        case "6":
            return {
                ...state,
                value: action.payload
            }

        default:
            return state;
    }
}
export default MainReducer;