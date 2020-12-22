import React from 'react'

import { useState, useEffect, useContext } from 'react'

import { Link } from 'react-router-dom'

import { getAll } from '../../services/NewsServicep/NewsServicep'

import { Box, Grommet, ResponsiveContext, Image, Heading, Card } from 'grommet'
import { grommet } from 'grommet/themes'

export const NewsList = () => {
  const [news, setNews] = useState()
  const size = useContext(ResponsiveContext)

  useEffect(() => {
    async function retrieveNews() {
      await getAll().then((result) => setNews(result))
    }
    retrieveNews()
  }, [])

  return (
    <Box alignSelf='center'>
      <Box
        basis='full'
        pad='medium'
        width={size !== 'small' ? 'large' : '100%'}
        align='center'
        gap='20px'
      >
        <Heading size='small' textAlign='center'>
          All News
        </Heading>

        {news &&
          news.map((newslist, index) => (
            <Card
              key={index}
              direction='row'
              height='10vh'
              width='large'
              alignSelf='center'
            >
              <Image
                src={`../images/${newslist && newslist.Image}`}
                width='30%'
              ></Image>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Link
                style={{ textDecoration: 'none' }}
                to={`/FullNews/${newslist.id}`}
              >
                {newslist.NewsTitle}
              </Link>
            </Card>
          ))}
      </Box>
    </Box>
  )
}

export default NewsList
