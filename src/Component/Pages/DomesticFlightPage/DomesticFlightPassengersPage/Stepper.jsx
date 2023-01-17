import styles from './Stepper.Styles.module.css';
import { HiOutlineTicket } from "react-icons/hi";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdOutlineConfirmationNumber } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { MdAirplaneTicket } from "react-icons/md";
// import stepper from '../../../../assets/images/stepper-passengers.png';

const StepperPassengers = () => {
  return (
    // <div className={styles.container}>
    //     <img src={stepper} alt='stepper'></img>
    // </div>
    //------------------ use icone and header ----------------------
    <div className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <div>
          <h2 className={styles.firstH2}><HiOutlineTicket className={styles.firstIcon} /></h2>
          <hr className={styles.firstHr}></hr>
        </div>

        <div>
          <h2 className={styles.secondIcon}><BsFillPeopleFill /></h2>
          <hr className={styles.secondHr}></hr>
        </div>

        <div>
          <h2 className={styles.thirdIcon}><MdOutlineConfirmationNumber className={styles.thirdIcon} /></h2>
          <hr className={styles.thirdHr}></hr>
        </div>

        <div>
          <h2 className={styles.fourthIcone}><MdPayment className={styles.fourthIcone} /></h2>
          <hr className={styles.fourthHr}></hr>
        </div>

        <div>
          <h2 className={styles.fifthIcone}><MdAirplaneTicket /></h2>
        </div>
      </div>

      <div className={styles.bottomContainer}>

        <div className={styles.firstDiv}>
          <h5 className={styles.firstH5}>انتخاب پرواز</h5>
        </div>

        <div className="div">
          <h5 className={styles.secondH5}>مشخصات مسافران</h5>
        </div>

        <div className="div">
          <h5 className={styles.thirdH5}>تایید اطلاعات</h5>
        </div>

        <div className="div">
          <h5 className={styles.fourthH5}>پرداخت</h5>
        </div>

        <div className="div">
          <h5 className={styles.fifthH5}>صدور بلیط</h5>
        </div>

      </div>
    </div>
  )
}
export default StepperPassengers;

/* <div className="div">
  <h2 className={styles.firstH2}><HiOutlineTicket className={styles.firstIcon} /></h2>
  <h5>انتخاب پرواز</h5>
</div>
<hr className={styles.firstHr}></hr>
<div className="div">
  <h2 className={styles.BsFillPeopleFill}><BsFillPeopleFill/></h2>
  <h5 className={styles.BsFillPeopleFillH5}>مشخصات مسافران</h5>
</div>
<hr className={styles.secondHr}></hr>
<div className="div">
  <h2 className={styles.thirdIcon}><MdOutlineConfirmationNumber className={styles.thirdIcon}/></h2>
  <h5 className={styles.thirdH5}>تایید اطلاعات</h5>
</div>
<hr></hr>
<div className="div">
  <h2 className={styles.fourthIcone}><MdPayment className={styles.fourthIcone}/></h2>
  <h5 className={styles.fourthH5}>پرداخت</h5>
</div>
<hr></hr>
<div className="div">
  <h2 className={styles.fifthIcone}><MdAirplaneTicket/></h2>
  <h5 className={styles.fifthIcone}>صدور بلیط</h5>
</div> */