import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import { Fragment } from 'react'

const heroes = [
  {
    id: 1,
    img_src: "cat1.jpg",
    img_alt: "cat1"
  },
  {
    id: 2,
    img_src: "cat2.jpg",
    img_alt: "cat2"
  },
  {
    id: 3,
    img_src: "cat3.jpg",
    img_alt: "cat3"
  },
  {
    id: 4,
    img_src: "cat4.jpg",
    img_alt: "cat4"
  },
  {
    id: 5,
    img_src: "cat5.jpg",
    img_alt: "cat5"
  },
  {
    id: 6,
    img_src: "cat6.jpg",
    img_alt: "cat6"
  }
]

const MainPage = () => {
  return (
    <Box>
      <Stack spacing={2}>
      <Grid item md={12} sm={12} fontSize={"50px"} textAlign={"center"}>Это главная страница. С котами. Лабы в меню.</Grid>
        {
          heroes.map((hero) => {
            return (
              <Fragment key={hero.id}>
                <Grid container spacing={3}>
                  <Grid item md={1} sm={2}>
                    <Box
                      component="img"
                      sx={{
                        height: 300,
                        width: 400
                      }}
                      alt={hero.img_alt}
                      src={hero.img_src}
                      padding={"20px"}
                      paddingLeft={"300px"}
                    />
                  </Grid>
                </Grid>
              </Fragment>
            )
          })
        }
      </Stack>
    </Box>
  )
}

export default MainPage