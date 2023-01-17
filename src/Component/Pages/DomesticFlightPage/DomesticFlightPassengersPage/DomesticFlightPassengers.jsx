import styles from './Passengers.styles.module.css';
import StepperPassengers from './Stepper';

const DomesticFlightPassengersPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.stepper}>
                <StepperPassengers />
            </div>
            <div className={styles.ticketInfo}></div>
            <div className={styles.passengersInfo}></div>
            <div className={styles.sendEmail}></div>
            <div className={styles.buttonContainer}>
                <button>پرداخت</button>
            </div>


        </div>
    )
}
export default DomesticFlightPassengersPage;