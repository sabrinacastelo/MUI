import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, CssBaseline, Toolbar, AppBar, Typography, IconButton, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Main = () => {
  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Imobiliária Corrente</Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent">
        <Toolbar />
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Propriedades" />
          </ListItem>
          <ListItem button>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Status dos Aluguéis" />
          </ListItem>
          {/* Adicione mais itens de menu conforme necessário */}
        </List>
      </Drawer>
      <main>
        {/* Conteúdo principal da sua aplicação aqui */}
      </main>
    </div>
  );
};

export default Main;
