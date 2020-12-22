import React, { useState, useEffect } from 'react'
import { Box, Grid, Heading, Card, Text, Image } from 'grommet'
import { NavLink } from 'react-router-dom'
import NewsDataService from '../../services/NewsService/NewsService'
export default function ReporterHome() {
  const [news, setNews] = useState()

  const user = sessionStorage.getItem('user')
  const parsed = JSON.parse(user)
  const id = parsed.id

  useEffect(() => {
    reporterNews()
  }, [])
  const reporterNews = () => {
    NewsDataService.reporterNews(id)
      .then((response) => {
        setNews(response.data)
      })
      .catch((err) => {
        if (err) {
          //log(err)
        }
      })
  }
  return (
    <Box align='center'>
      <Box pad='medium' width='large' align='center'>
        <Heading size='small' textAlign='center'>
          Reporter's News
        </Heading>
        <Grid gap='20px' responsive='true'>
          {news &&
            news.map((n, index) => (
              <Card key={index} direction='row' height='10vh' width='100%'>
                <Image src={`../images/${n && n.Image}`} width='35%'></Image>
                <NavLink
                  to={`/Reporter/News/${n.id}`}
                  style={{
                    textDecoration: 'none',
                    marginTop: '3vh',
                    marginLeft: '1vw',
                  }}
                >
                  <Text color='black' weight='bold'>
                    {n.NewsTitle}
                  </Text>
                </NavLink>
              </Card>
            ))}
        </Grid>
      </Box>
    </Box>
  )
}
