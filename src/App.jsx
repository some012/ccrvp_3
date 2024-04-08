import { useState } from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Content from './templates/Content'
import LocalContainer from './templates/LocalContainer'
import Grid from '@mui/material/Grid';
import { Outlet } from "react-router-dom";
import { Box } from '@mui/material'
import ThemeContext, { THEME_LIGHT } from './contexts/ThemeContext'

const menuItems = [
  {id: 1, text: "Лаб работа 1", path: "lab/1"},
  {id: 2, text: "Лаб работа 2", path: "lab/2"},
  {id: 3, text: "Лаб работа 4", path: "lab/4"},
  {id: 4, text: "Лаб работа 5", path: "lab/5"},
  {id: 5, text: "Лаб работа 6", path: "lab/6"}
]

function App() {
  const [theme, setTheme] = useState(THEME_LIGHT)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <LocalContainer>
        <Header className="Header"></Header>

        <Box height={"100%"} sx={{ pt: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Menu
                items={menuItems}
              ></Menu>
            </Grid>
            <Grid item xs={10}>
              <Content>
                <Outlet />
              </Content>
            </Grid>
          </Grid>
        </Box>

        <Footer></Footer>
      </LocalContainer>
    </ThemeContext.Provider>
  )
}

export default App
