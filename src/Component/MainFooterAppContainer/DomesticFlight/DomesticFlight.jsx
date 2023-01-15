import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./domesticFlightStyles.module.css";
import domesticFlightData from "./domesticFlightData";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";
import moment from "jalali-moment";
//---------- material ui import -----------------
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const DomesticFlight = () => {
  const [selectedDayback, setSelectedDayback] = useState(null);
  const [selectedDaygo, setSelectedDaygo] = useState(null);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const navigate = useNavigate();
  const minimumDate = {
    year: Number(moment().locale('fa').format('YYYY')),
    month: Number(moment().locale('fa').format('MM')),
    day: Number(moment().locale('fa').format('DD'))
  };

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 14)
  // console.log(moment(maxDate).locale('fa').format('YYYY/MM/DD hh:mm:ss'));
  // const maximumDate = {
  //     year: Number(moment(maxDate).locale('fa').format('YYYY')),
  //     month: Number(moment(maxDate).locale('fa').format('MM')),
  //     day: Number(moment(maxDate).locale('fa').format('DD'))
  // };


  const search = () => {
    let gotime = `${selectedDaygo.year}/${selectedDaygo.month}/${selectedDaygo.day}`;
    let backtime = `${selectedDayback.year}/${selectedDayback.month}/${selectedDayback.day}`;
    const filterDomesticFlightData = domesticFlightData.filter(data =>
      data.org === origin &&
      data.dest === destination &&
      data.returnDate === backtime &&
      data.goDate === gotime);
    const filterDomesticFlightData2 = domesticFlightData.filter(data =>
      data.org === origin &&
      data.dest === destination);
    navigate(
      '/iniran',
      { state: { data: filterDomesticFlightData, domesticFlightData: filterDomesticFlightData2 } }
    )
  }

  const orgHandler = (e) => {
    setOrigin(e.target.value);
  }

  const destHandler = (e) => {
    setDestination(e.target.value);
  }

  return (
    <div className={styles.container}>

      <div className={styles.selectComtainer}>
        <select >
          <option>یک طرفه</option>
          <option>دو طرفه</option>
        </select>
        <select>
          <option>یک طرفه</option>
          <option>دو طرفه</option>
        </select>

      </div>
      <div className={styles.inputContainer}>
        <FormControl sx={{ m: 0, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-autowidth-label">مبدا</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={origin}
            onChange={orgHandler}
            autoWidth
            label="Age"
          >
            <MenuItem value={'تهران'} >تهران</MenuItem>
            <MenuItem value={'مشهد'}>مشهد</MenuItem>
            <MenuItem value={'تبریز'}>تبریز</MenuItem>
            <MenuItem value={'شیراز'}>شیراز</MenuItem>

          </Select>
        </FormControl>
        <FormControl sx={{ mr: 0, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-autowidth-label">مقصد</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={destination}
            onChange={destHandler}
            autoWidth
            label="Age"
          >

            <MenuItem value={'تهران'}>تهران</MenuItem>
            <MenuItem value={'مشهد'}>مشهد</MenuItem>
            <MenuItem value={'تبریز'}>تبریز</MenuItem>
            <MenuItem value={'شیراز'}>شیراز</MenuItem>

          </Select>
        </FormControl>

        <DatePicker
          calendarPopperPosition="bottom"
          value={selectedDaygo}
          onChange={setSelectedDaygo}
          shouldHighlightWeekends
          locale="fa"
          inputPlaceholder='تاریخ رفت'
          colorPrimary='orange'
          minimumDate={minimumDate}
        // maximumDate={maximumDate}
        />
        <DatePicker
          calendarPopperPosition="bottom"
          inputClassName={styles.inputdate}
          value={selectedDayback}
          onChange={setSelectedDayback}
          shouldHighlightWeekends
          locale="fa"
          inputPlaceholder='تاریخ برگشت'
          colorPrimary='orange'
          minimumDate={selectedDaygo}
        // maximumDate={maximumDate}
        />

        <div className="ui input">

          <input type="number" placeholder='تعداد مسافران' style={{ textAlign: "right" }} />
        </div>
        <button onClick={search}
          className="ui yellow button">جستجوی بلیط</button>

      </div>



    </div>
  )
};
export default DomesticFlight;












//=================================================================
// const [origin, setOrigin] = useState("");
// const [dest, setDest] = useState("");
// const [departureDate, setDepartureDate] = useState("");
// const [BackDate, setBackDate] = useState("");
// const [domesticFlightTicket, setDomesticFlightTicket] = useState("");
// //------------------------------------------
// const navigate = useNavigate();

// //------------------------------------------
// const handelCahngeOrigin = (e) => {
//   setOrigin(e.target.value);
// };
// //------------------------------------------
// const handelCahngeDest = (e) => {
//   setDest(e.target.value);
// };
// //--------------------------------------
// const minimumDate = {
//   year: Number(moment().locale("fa").format("YYYY")),
//   month: Number(moment().locale("fa").format("MM")),
//   day: Number(moment().locale("fa").format("DD")),
// };
// //---------------------------------------
// const handleSubmit = (e) => {
//   e.preventDefault();
//   let gotime = `${departureDate.year}/${departureDate.month}/${departureDate.day}`;
//   let backtime = `${BackDate.year}/${BackDate.month}/${BackDate.day}`;
//   const filterValue = (origin, dest) => {
//     const filterDomestic = domesticFlightData.filter(
//       (data) =>
//         data.origin === origin &&
//         data.dest === dest &&
//         data.returnDate === backtime &&
//         data.goDate === gotime
//     );
//     setDomesticFlightTicket(filterDomestic);
//     navigate("/iniran", { state: { data: filterDomestic } });
//     console.log(domesticFlightTicket);
//   };
//   filterValue(origin, dest);
// };
// //---------------------------------------
// return (
//   <div className={styles.footerAppContainer}>
//     <div className={styles.selectFooterAppContainer}>
//       <select>
//         <option>یک طرفه</option>
//         <option>دو طرفه</option>
//       </select>
//       <select>
//         <option>یک طرفه</option>
//         <option>دو طرفه</option>
//       </select>
//     </div>
//     <div className={styles.inputFooterAppContainer}>
//       <form onSubmit={handleSubmit}>
//         {/* <TextField
//           value={origin}
//           onChange={handelCahngeOrigin}
//           id="outlined-search"
//           label="مبدا"
//           type="search"
//         />
//         <TextField
//           value={dest}
//           onChange={handelCahngeDest}
//           id="outlined-search"
//           label="مقصد"
//           type="search"
//         /> */}
//         <FormControl sx={{ minWidth: 200 }}>
//           <InputLabel id="demo-simple-select-label">مبدا</InputLabel>
//           <Select
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             value={origin}
//             label="Age"
//             onChange={handelCahngeOrigin}
//           >
//             <MenuItem value={10}>تهران</MenuItem>
//             <MenuItem value={20}>مشهد</MenuItem>
//             <MenuItem value={30}>تبریز</MenuItem>
//             <MenuItem value={30}>شیراز</MenuItem>
//           </Select>
//         </FormControl>
//         <FormControl sx={{ minWidth: 200 }}>
//           <InputLabel id="demo-simple-select-label">مقصد</InputLabel>
//           <Select
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             value={dest}
//             label="Age"
//             onChange={handelCahngeDest}
//           >
//             <MenuItem value={10}>تهران</MenuItem>
//             <MenuItem value={20}>مشهد</MenuItem>
//             <MenuItem value={30}>تبریز</MenuItem>
//             <MenuItem value={30}>شیراز</MenuItem>
//           </Select>
//         </FormControl>
//         <DatePicker
//           calendarPopperPosition="bottom"
//           // inputClassName={classes.inputdate}
//           value={departureDate}
//           onChange={setDepartureDate}
//           shouldHighlightWeekends
//           locale="fa"
//           inputPlaceholder="تاریخ رفت"
//           colorPrimary="orange"
//           minimumDate={minimumDate}
//         // maximumDate={maximumDate}
//         />
//         <DatePicker
//           calendarPopperPosition="bottom"
//           // inputClassName={classes.inputdate}
//           value={BackDate}
//           onChange={setBackDate}
//           shouldHighlightWeekends
//           locale="fa"
//           inputPlaceholder="تاریخ برگشت"
//           colorPrimary="orange"
//           minimumDate={BackDate}
//         // maximumDate={maximumDate}
//         />

//         <button>جستجو</button>
//       </form>
//     </div>
//   </div>
// );


