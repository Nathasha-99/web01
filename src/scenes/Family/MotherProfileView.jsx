import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import { InputBase,IconButton} from '@mui/material';
import { Search } from '@mui/icons-material';

export default function SelectedListItem() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box>
        <Box ml="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Mother's Profile" subtitle="Welcome to your dashboard" />

        {/* SEARCH BOX */}
        <Box
          display="flex"
          bgcolor={"#e4e5e2"}
          borderRadius={"3px"}
          marginRight={"20px"}
        >
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search"></InputBase>
          <IconButton type="button" sx={{ p: 1 }}>
            <Search/>
          </IconButton>
        </Box>
      </Box>
      </Box>

    
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        
      <List component="nav" aria-label="secondary mailbox folder">
        <Link to="/fieldClinicForm" style={{ textDecoration: 'none' , color: 'black'}}>
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemText primary="Trash0" />
        </ListItemButton></Link>

        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemText primary="Spam1" />
        </ListItemButton>

        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemText primary="Trash2" />
        </ListItemButton>

        <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemText primary="Spam3" />
        </ListItemButton>
      </List>
    </Box>

    </Box>
  );
}