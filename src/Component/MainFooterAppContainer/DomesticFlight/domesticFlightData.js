import IRair from "../../../assets/images/IRair.png";
import Aseman from "../../../assets/images/Aseman.png";
import Ata from "../../../assets/images/Ata.png";
import Karoon from "../../../assets/images/Karoon.png";
import Kaspian from "../../../assets/images/Kaspian.png";

const domesticFlightData = [
    { org: "تهران", dest: "مشهد", logo: IRair, logoName: 'ایران ایر', goDate: '1401/10/30', returnDate: '1401/11/15', gotime: '10:00', arriveTime: '12:00', capacity: 15, cost: 800000, name: 'boeing737' },
    { org: "تهران", dest: "مشهد", logo: IRair, logoName: 'ایران ایر', goDate: '1401/10/29', returnDate: '1401/11/14', gotime: '16:00', arriveTime: '18:00', capacity: 15, cost: 800000, name: 'boeing737' },
    { org: "تهران", dest: "مشهد", logo: IRair, logoName: 'ایران ایر', goDate: '1401/10/28', returnDate: '1401/11/13', gotime: '12:00', arriveTime: '14:00', capacity: 15, cost: 800000, name: 'boeing737' },

    { org: "تهران", dest: "مشهد", logo: Aseman, logoName: "آسمان", goDate: '1401/10/30', returnDate: '1401/11/15', gotime: '4:00', arriveTime: '6:00', capacity: 20, cost: 850000, name: 'Fokker100' },
    { org: "تهران", dest: "مشهد", logo: Aseman, logoName: "آسمان", goDate: '1401/10/29', returnDate: '1401/11/14', gotime: '16:00', arriveTime: '18:00', capacity: 20, cost: 850000, name: 'Fokker100' },
    { org: "تهران", dest: "مشهد", logo: Aseman, logoName: 'آسمان', goDate: '1401/10/28', returnDate: '1401/11/13', gotime: '12:00', arriveTime: '14:00', capacity: 20, cost: 850000, name: 'Fokker100' },
    

    { org: "تهران", dest: "مشهد", logo: IRair, logoName: 'ایران ایر', goDate: '1401/10/27', returnDate: '1401/11/15', gotime: '10:00', arriveTime: '12:00', capacity: 15, cost: 800000, name: 'boeing737' },
    { org: "تهران", dest: "مشهد", logo: IRair, logoName: 'ایران ایر', goDate: '1401/1/26', returnDate: '1401/11/14', gotime: '16:00', arriveTime: '18:00', capacity: 15, cost: 800000, name: 'boeing737' },
    { org: "تهران", dest: "مشهد", logo: IRair, logoName: 'ایران ایر', goDate: '1401/11/25', returnDate: '1401/12/25', gotime: '12:00', arriveTime: '14:00', capacity: 15, cost: 800000, name: 'boeing737' },

    { org: "تهران", dest: "مشهد", logo: Aseman, logoName: "آسمان", goDate: '1401/10/27', returnDate: '1401/11/15', gotime: '4:00', arriveTime: '6:00', capacity: 20, cost: 850000, name: 'Fokker100' },
    { org: "تهران", dest: "مشهد", logo: Aseman, logoName: "آسمان", goDate: '1401/10/26', returnDate: '1401/11/14', gotime: '16:00', arriveTime: '18:00', capacity: 20, cost: 850000, name: 'Fokker100' },
    { org: "تهران", dest: "مشهد", logo: Aseman, logoName: 'آسمان', goDate: '1401/11/25', returnDate: '1401/12/25', gotime: '12:00', arriveTime: '14:00', capacity: 20, cost: 850000, name: 'Fokker100' },

    { org: "شیراز", dest: "تبریز", logo: IRair, logoName: 'ایران ایر', goDate: '1401/10/30', returnDate: '1401/11/15', gotime: '10:00', arriveTime: '12:30', capacity: 15, cost: 800000, name: 'boeing737' },
    { org: "شیراز", dest: "تبریز", logo: Ata, logoName: 'ایران ایر', goDate: '1401/10/30', returnDate: '1401/11/15', gotime: '16:00', arriveTime: '18:00', capacity: 15, cost: 1200000, name: 'boeing737' },
    { org: "شیراز", dest: "تبریز", logo: IRair, logoName: 'ایران ایر', goDate: '10/11/1401', returnDate: '10/11/1401', gotime: '12:00', arriveTime: '14:00', capacity: 15, cost: 800000, name: 'boeing737' },

    { org: "شیراز", dest: "تبریز", logo: Aseman, logoName: "آسمان", goDate: '1401/10/30', returnDate: '1401/11/15', gotime: '4:00', arriveTime: '6:30', capacity: 20, cost: 850000, name: 'Fokker100' },
    { org: "شیراز", dest: "تبریز", logo: Aseman, logoName: "آسمان", goDate: '20/10/1401', returnDate: '20/10/1401', gotime: '16:00', arriveTime: '18:00', capacity: 20, cost: 850000, name: 'Fokker100' },
    { org: "شیراز", dest: "تبریز", logo: Aseman, logoName: 'آسمان', goDate: '10/11/1401', returnDate: '10/11/1401', gotime: '12:00', arriveTime: '14:00', capacity: 20, cost: 850000, name: 'Fokker100' },

]
export default domesticFlightData;