import styles from './cardStyle.module.css';
import arrivedestination from "../../assets/images/arrivedestination.png";
const CardTicket = (props) => {
    return (

        <div className={styles.ticket}>
            <div className={styles.flightinfo}>
                <div className={styles.flightinfoIcon}>
                    <div className={styles.icon}>
                        <img height={45} width={45} src={props.data.logo} alt="1" />
                    </div>
                    <div className={styles.logoName}>
                        {props.data.logoName}
                    </div>
                    <div className={styles.esterdad}>
                        اطلاعات پرواز
                    </div>
                </div>
                <div className={styles.flightinfoSystem}>
                    <div className={styles.system}>
                        <span>سیستمی</span>
                        <span>اکونومی</span>
                        <span>هواپیمایی</span>


                    </div>
                    <div className={styles.cityTime}>
                        <span> {props.data.org}  </span>
                        <span>{props.data.gotime}</span>
                        <span><img src={arrivedestination} alt="1" /></span>
                        <span> {props.data.dest}  </span>
                        <span>{props.data.arriveTime}</span>
                    </div>
                    <div className={styles.law}>
                        قوانین استرداد
                    </div>
                </div>
            </div>

            <div className={styles.costinfo}>
                <div className={styles.costinfospan}>
                    <p>ریال </p>
                </div>
                <button >انتخاب پرواز</button>
                <p>باقی مانده</p>
            </div>
        </div>

    )
}
export default CardTicket;