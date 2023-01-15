import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const DateBarScrollableTabs = (props) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{
            maxWidth: { xs: 300, sm: 980 },
            bgcolor: 'background.paper',
            py: 3, px: 3, direction: 'ltr',
            boxShadow: "1px 1px 3px 2px #dadada",
            borderRadius: '5px',
            overflow: 'inherit',

        }}
        >
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                aria-label="visible arrows tabs example"
                sx={{
                    [`& .${tabsClasses.scrollButtons}`]: {
                        '&.Mui-disabled': { opacity: 0.3 },
                    },
                }}
            >
                {
                    props.domesticFlightData.map(obj => {return(
                        <Tab label={obj.goDate} />
                    )})
                }


            </Tabs>
        </Box>
    );
}
export default DateBarScrollableTabs;