import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Navbar = () => {
  return (
    <> 
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">
            ObjectWays
          </Typography>
          <Box sx={{ display: 'flex', gap: '50px', alignItems: 'center' }}>
            <Typography>Home</Typography>
            <Typography>About</Typography>
            <Typography>Contact</Typography>
            <Typography>Service</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default React.memo(Navbar)
