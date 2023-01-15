import React from "react";
import { useLocation } from "react-router-dom";
import CardTicket from '../../CardTicket/CardTicket';
import styles from './domesticFlight.module.css';
import DateBarScrollableTabs from './DateBarScrollableTabs';
import SideFilterAccordion from './SideFilterAccordion/SideFilterAccordion';

const DomesticFlightPage = () => {
    const location = useLocation();
    return (
        <div className={styles.container}>
            <div className={styles.sidefilter}>
                <SideFilterAccordion domesticFlightData={location.state.domesticFlightData}/>
            </div>
            <div className={styles.ticketinfo}>
                <div className={styles.datebar}>
                    <DateBarScrollableTabs domesticFlightData={location.state.domesticFlightData} />
                </div>
                {
                    location.state.data.map(obj => {
                        return (
                            <CardTicket data={obj} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default DomesticFlightPage;
