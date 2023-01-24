import styles from './TicketInfo.styles.module.css';

const TicketInfo = () => {
    return (
        <div className={styles.container}>
            <div className={styles.rightInfo}>
                <div className={styles.dateInfo}></div>
                <div className={styles.flightInfo}></div>
            </div>
            <div className={styles.leftInfo}>
                <button className={styles.button}>تغییر بلیط</button>
                <div className={styles.detailes}>
                    <div className={styles.title}>
                        <span>بزرگسال</span>
                        <span>کودک</span>
                        <span>نوزاد</span>
                        <span>مجموع</span>
                    </div>
                    <div className={styles.amount}>
                        <span>30,000,000</span>
                        <span>7,526,000</span>
                        <span>1,060,000</span>
                        <span>38,586,000</span>
                    </div>
                    <div className={styles.rial}>
                        <span>ریال</span>
                        <span>ریال</span>
                        <span>ریال</span>
                        <span>ریال</span>
                    </div>
                </div>
                {/* <div className={styles.adult}>
                    <span>بزرگسال</span>
                    <span>30,000,000</span>
                    <span>ریال</span>
                </div>
                <div className={styles.child}>
                    <span>کودک</span>
                    <span>7,526,000</span>
                    <span>ریال</span>
                </div>
                <div className={styles.baby}>
                    <span>نوزاد</span>
                    <span>1,060,000</span>
                    <span>ریال</span>
                </div>
                <div className={styles.sum}>
                    <span>مجموع</span>
                    <span>38,586,000</span>
                    <span>ریال</span>
                </div> */}
            </div>

        </div>
    )
}
export default TicketInfo;