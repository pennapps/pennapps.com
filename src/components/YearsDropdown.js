import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const YearsDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="years-dropdown"
        aria-haspopup="true"
        onClick={handleClick}
        sx={{ color: '#0F2944', fontFamily: 'proxima-nova', mr: '13px' }}
      >
        Past Years
      </Button>
      <Menu
        id="years-dropdown"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component="a" href="https://2023f.pennapps.com/">2023</MenuItem>
        <MenuItem onClick={handleClose} component="a" href="https://2022f.pennapps.com/">2022</MenuItem>
        <MenuItem onClick={handleClose} component="a" href="https://2021f.pennapps.com/">2021</MenuItem>
        <MenuItem onClick={handleClose} component="a" href="https://2020f.pennapps.com/">2020</MenuItem>
      </Menu>
    </div>
  );
};

export default YearsDropdown;