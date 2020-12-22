import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { PieChart } from 'grommet-controls/chartjs'

import {
  Box,
  Grommet,
  Header,
  ResponsiveContext,
  Card,
  CardBody,
  Grid,
  Heading,
} from 'grommet'
import { grommet } from 'grommet/themes'
import { getMostRead } from '../../services/MostReadNewsStatService/MostReadNewsStatService'

export const MostReadNewsStat = () => {
  const [news, setNews] = useState()
  const size = useContext(ResponsiveContext)
  useEffect(() => {
    async function retrieveNews() {
      await getMostRead().then((result) => setNews(result))
    }
    retrieveNews()
  }, [])

  return (
    <Box align='center'>
      <Box width='100vw' height='100vh' alignSelf='center' pad='large'>
        <Grid columns={size !== 'small' ? 'large' : '100%'} gap='small'>
          <Card height='medium' width='large' background='light-1'>
            <Heading alignSelf='center' size='small' level='2'>
              Most Read News Statistic
            </Heading>
            <CardBody pad='large'>
              <PieChart
                data={{
                  labels: news && news.map((ele) => ele.NewsTitle),
                  datasets: [
                    {
                      label: 'Dataset 1',
                      data: news && news.map((ele) => ele.Count),
                    },
                  ],
                }}
                options={{
                  legend: {
                    display: false,
                  },
                  themedData: true,
                }}
              />
            </CardBody>
          </Card>
        </Grid>
      </Box>
    </Box>
  )
}

export default MostReadNewsStat
