import React from 'react';
import HeaderAppContainer from '../../MainHeaderAppContainer/HeaderAppContainer';
import DomesticFlight from '../../MainFooterAppContainer/DomesticFlight/DomesticFlight';
import styles from './homePage.module.css';

const Main = () => {
    return (
        <div className={styles.MainContainer}>

            <div className={styles.MainContainerHeader}>
                <HeaderAppContainer />
            </div>
            <div className={styles.MainContainerFooter}>
                <DomesticFlight />
            </div>


        </div>
    )
}
export default Main;