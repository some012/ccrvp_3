import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from './Button';
import Box from '@mui/material/Box'
import { THEME_DARK, THEME_LIGHT } from '../contexts/ThemeContext';
import { useContext, useEffect} from 'react';
import { useNavigate } from "react-router-dom"
import ThemeContext from '../contexts/ThemeContext';
import BIconButton from './BIconButton';
import MenuIcon from '@mui/icons-material/Menu'


const Header = ({ pages, onClickMenu }) => {
  const { theme, setTheme } = useContext(ThemeContext)
  const navigate = useNavigate()
  useEffect(() => {}, [theme])
  return (
    <AppBar position="static" >
      <Toolbar>
      <BIconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }} onClick={onClickMenu}><MenuIcon />
      </BIconButton>
        Лабораторные работы
      <Box sx={{ flexGrow: 1, display: 'flex' }}> {pages.map((page) => (
            <Button label={page.title} color="blue"key={page.id} onClick={() => navigate(page.path)} sx={{ my: 1, color: 'white', display: 'block' }}> {page.title}</Button>))}
      </Box>        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: "flex"}}>
            <Button label="Light" color="blue" onClick={() => setTheme(THEME_LIGHT)}></Button>
            <Button label="Dark" color="blue" onClick={() => setTheme(THEME_DARK)}></Button>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header