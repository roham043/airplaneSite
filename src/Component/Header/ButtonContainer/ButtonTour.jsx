import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { ReactComponent as Expandmore } from '../../../assets/icons/expandmore.svg';


export default function ButtomTour() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
  
//1px 1px 3px gray -4px -4px 6px #888888
    return (
        <div>
            <Box sx={{boxShadow:'-3px -3px 6px #888888',borderRadius:'3px'}}>
                <Button 
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                   
                    تور
                </Button>
            </Box>
        
        </div>
    );
}