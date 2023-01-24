import * as React from 'react';
import buttonHeaderHOC from './ButtonsHeaderHOC';
import styles from './btnStyles.module.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import { ReactComponent as Expandmore } from '../../../assets/icons/expandmore.svg';
//1px 1px 3px gray -1px -2px 5px #888888
const ButtonResidence = (props) => {
    return (
        <div>
            <Box sx={{boxShadow:'-1px -1px 2px #888888',borderRadius:'3px'}}>
                <Button
                    id="basic-button"
                    aria-controls={props.open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={props.open ? 'true' : undefined}
                    onClick={props.handleClick}
                >
                    <Expandmore />
                    اقامت
                </Button>
            </Box>
            <Menu
                className={styles.residenceMenu}
                id="basic-menu"
                anchorEl={props.anchorEl}
                open={props.open}
                onClose={props.handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <button onClick={props.handleClose} id='5' name="hotel">هتل</button>
                <hr></hr>
                <button onClick={props.handleClose} id='6' name='villa'>ویلا و اقامتگاه</button>
            </Menu>
        </div>
    );
}
export default buttonHeaderHOC(ButtonResidence)