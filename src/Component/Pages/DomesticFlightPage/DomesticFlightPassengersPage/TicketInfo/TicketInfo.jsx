import styles from './TicketInfo.styles.module.css';

const TicketInfo = () =>{
    return(
        <div className={styles.container}>
                <div className={styles.rightInfo}>
                    <div className={styles.dateInfo}></div>
                </div>
                <div className={styles.leftInfo}></div>

        </div>
    )
}
export default TicketInfo;