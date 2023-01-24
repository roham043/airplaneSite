import * as React from 'react';
import styles from './btnStyles.module.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';

import { ReactComponent as Expandmore } from '../../../assets/icons/expandmore.svg';

export default function ButtonMore() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
//1px 1px 3px gray
    return (
        <div>
            <Box sx={{boxShadow:'-1px -1px 2px #888888',borderRadius:'3px'}}>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <Expandmore />
                    بیشتر
                </Button>
            </Box>
            <Menu
                className={styles.moreMenu}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <button onClick={handleClose} >علی بابا پلاس</button>
                <hr></hr>
                <button onClick={handleClose}>مجله علی بابا</button>
                <hr></hr>
                <button onClick={handleClose} >بیمه مسافرتی</button>
            </Menu>
        </div>
    );
}