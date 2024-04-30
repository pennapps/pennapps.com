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
const navItems = ['ABOUT', 'HACKERS', 'ORGANIZERS', 'AMBASSADORS', 'DIVERSITY FELLOWS']

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
    <>
      <Box

  sx={{
    position: 'fixed',
    top: 0,
    width: '100%',
    height: '45px',
    zIndex: 1000,
    bgcolor: '#990000',
    color: '#dce2e8',
    textAlign: 'center',
    padding: '10px',
  }}
>
<Typography variant="body1" sx={{ fontFamily: `'futura-pt', 'Futura', 'Trebuchet MS', 'Arial', 'sans-serif'` }}>
  <b> FILL OUT THIS{' '} </b>
  <b href="https://docs.google.com/forms/d/e/1FAIpQLSemhXtQOOhTzAsz06QA8t9aU-shJs_ZukuU6rW8Nvo2FoiavQ/viewform" style={{ color: '#7fa3c9', textDecoration: 'underline', fontWeight: 'inherit', fontFamily: `'futura-pt', 'Futura', 'Trebuchet MS', 'Arial', 'sans-serif'` }}>
    FORM
  </b>{' '}
  <b>TO BE THE FIRST TO KNOW WHEN THE APPLICATIONS OPEN FOR 2024! </b>
</Typography>

      </Box>

      <AppBar component="nav" sx={{ top: '0', marginTop: '70px', bgcolor: 'rgba(255, 255, 255, 0.8)', position: 'relative', zIndex: 1, display: 'flex', }} elevation={0}>
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
              marginRight: '11px',
              ml: { xs: '0px', sm: '0px', lg: '0px' },
            }}
          >
            PENNAPPS
          </Typography>

          <Box sx={{display: { xs: 'none', sm: 'flex' }, justifyContent: 'flex-end'}}>
            <Button
              href="https://2023f.pennapps.com/"
              key="PENNAPPS XXIV"
              sx={{ color: '#0F2944', fontFamily: 'proxima-nova', mr: '13px' }}
            >
              PENNAPPS XXIV
            </Button>

            {navItems.map(item => (
              <Button
                component={Link}
                to={`/${item.replace(' ', '-')}`.toLowerCase()}
                key={item}
                sx={{
                  bgcolor: item === currPage ? 'rgba(25, 118, 210, 0.1)' : '', color: '#0F2944', fontFamily: 'proxima-nova', mr: '13px',
                }}
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
            keepMounted: true,
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
    </>
  )
}

export default DrawerAppBar
