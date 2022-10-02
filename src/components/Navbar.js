import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'gatsby'

const drawerWidth = 240
const navItems = ['HACKERS', 'ORGANIZERS', 'AMBASSADORS']

function DrawerAppBar({ currPage }) {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: '#F0F7FF' }}>
      <List>
        <ListItem key="HOME" disablePadding>
          <ListItemButton component={Link} to="/" sx={{ textAlign: 'left' }}>
            <ListItemText primary="HOME" />
          </ListItemButton>
        </ListItem>
        <ListItem key="PENNAPPS XXIII" disablePadding>
          <ListItemButton href="https://2022f.pennapps.com/" sx={{ textAlign: 'left' }}>
            <ListItemText primary="PENNAPPS XXIII" />
          </ListItemButton>
        </ListItem>
        {navItems.map(item => (
          <ListItem key={item} disablePadding>
            <ListItemButton component={Link} to={`/${item}`.toLowerCase()} sx={{ textAlign: 'left' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{ bgcolor: 'rgba(255, 255, 255, 0.8)' }} elevation={0}>
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              display: { xs: 'block', sm: 'block' },
              fontFamily: `'futura-pt', 'Futura', 'Trebuchet MS', 'Arial', 'sans-serif'`,
              fontWeight: 800,
              letterSpacing: 2,
              color: '#0F2944',
              textDecoration: 'none',
              ml: '11px',
            }}
          >
            PENNAPPS
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button
              href="https://2022f.pennapps.com/"
              key="PENNAPPS XXIII"
              sx={{ color: '#0F2944', fontFamily: 'proxima-nova', mr: '13px' }}
            >
              PENNAPPS XXIII
            </Button>
            {navItems.map(item => (
              <Button
                component={Link}
                to={`/${item}`.toLowerCase()}
                key={item}
                sx={{ bgcolor: item === currPage ? 'rgba(25, 118, 210, 0.1)' : '', color: '#0F2944', fontFamily: 'proxima-nova', mr: '13px' }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { sm: 'none' }, color: '#0F2944' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ flexGrow: 1 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: {
              xs: 'block', sm: 'none', marginLeft: 'auto',
            },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box', width: drawerWidth, bgcolor: '#F0F7FF', color: '#6593C1',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </Box>
  )
}

export default DrawerAppBar
