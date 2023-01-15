import * as React from 'react';
import styles from './sideFilterStyiles.module.css';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SideFilterAccordion = (props) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.result}>
                <span>نتایج :</span>
            </div>
            <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        ساعت حرکت
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <div style={{ display: "flex", justifyContent: 'space-between' }}><span>23:00</span><span>6:00</span></div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>نوع بلیط</Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                <strong style={{ fontSize: "17px" }}>سیستمی</strong>
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                            <label className="form-check-label" for="flexCheckChecked">
                                <strong style={{ fontSize: "17px" }}>چارتر</strong>
                            </label>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        کلاس پروازی
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div class="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                <strong style={{ fontSize: "17px" }}>اکونومی</strong>
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                            <label className="form-check-label" for="flexCheckChecked">
                                <strong style={{ fontSize: "17px" }}>بیزینس</strong>
                            </label>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary 
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{ width: '50%', flexShrink: 0 }}>
                        <strong> شرکت های هواپیمای </strong>
                    </Typography>
                    <Typography sx={{ width: '50%', flexShrink: 0 ,mr:10}}>
                             <span style={{ color: "grey" }}>به ریال</span>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {props.domesticFlightData.map(obj => {
                            return (
                                <div class="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        <strong style={{ fontSize: "17px" }}> {obj.logoName}<img width={20} src={obj.logo} alt="1" /></strong>
                                    </label>
                                </div>
                            )
                        })}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default SideFilterAccordion;