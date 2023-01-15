import styles from './Header.module.css';
import ButtonTicket from './ButtonContainer/ButtonTicket';
import ButtonResidence from './ButtonContainer/ButtonResidence';
import ButtonMore from './ButtonContainer/ButtonMore';
import ButtomTour from './ButtonContainer/ButtonTour';

import { BsFileEarmarkPerson } from "react-icons/bs";
import { IoReceipt } from "react-icons/io5";
import { MdOutlineLiveHelp } from "react-icons/md";

import { ReactComponent as Alibaba } from '../../assets/icons/alibaba.svg'
// import { ReactComponent as Person } from '../../assets/icons/person.svg';
// import { ReactComponent as Receipt } from '../../assets/icons/receipt.svg';
// import { ReactComponent as Help } from '../../assets/icons/help.svg';
const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <Alibaba className={styles.logoContainerAlibabaIcon} />
                <div className={styles.logoContainerContent}>
                    <span style={{fontSize:'20px'}}>alibaba.ir</span>
                    <span>خرید بلیط, هتل,تور</span>
                </div>

            </div>
            <div className={styles.buttonContainer}>
                <ButtonTicket/>
                <ButtonResidence/>
                <ButtomTour/>
                <ButtonMore/>
            </div>
            <div className={styles.linkContainer}>
                <div>
                    <BsFileEarmarkPerson className={styles.personIcon}/>
                    <p>ورود یا ثبت نام</p>

                </div>
                <div>
                    <IoReceipt  className={styles.ReceiptIcon}/>
                    <p>پیگیری خرید</p>

                </div>
                <div>
                    <MdOutlineLiveHelp className={styles.HelpIcon}/>
                    <p>پشتیبانی آنلاین</p>

                </div>
            </div>
        </div>
    )
}
export default Header;