import { 
    Typography, 
    ListItemIcon, 
    List, ListItem, 
    ListItemButton,
    ListItemText,
    Drawer,
    Divider
  } from "@mui/material"

import DraftsIcon from "@mui/icons-material/Drafts"
import HomeIcon from '@mui/icons-material/Home'
import AddCircleIcon from '@mui/icons-material/AddCircle'


export default function Sidebar () {

    const items = [
        {
          href: '/',
          icon: <HomeIcon sx={{ color: '#fff'}} />,
          title: 'Home'
        },
        {
          href: '/new',
          icon: <AddCircleIcon sx={{ color: '#fff'}} />,
          title: 'Novo cliente'
        },
        {
          href: '/logs',
          icon: <DraftsIcon sx={{ color: '#fff'}} />,
          title: 'Ver logs'
        }
      ]

    return (
        <>
        <Drawer 
        variant="permanent"
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: 'rgb(17, 24, 39)',
            color: '#fff'
          }
        }}
      >
        <Typography variant="h5" sx={{textAlign: 'center', padding: 2}}>Dashboard</Typography>
        
        <Divider sx={{borderColor: '#2D3748'}} />
        
        <List>
          {items.map((item, key) => (
              <ListItem disablePadding key={key}>
              <ListItemButton>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
            ))}   
        </List>
      </Drawer>
    
      
      </>
    )
}