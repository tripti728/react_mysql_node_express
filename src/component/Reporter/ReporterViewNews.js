import React, { useState, useEffect } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { useParams } from 'react-router-dom'
import { Box, Image, Heading } from 'grommet'
import NewsDataService from '../../services/NewsService/NewsService'
function ReporterViewNews() {
  const { id } = useParams()
  const [news, setNews] = useState()
  useEffect(() => {
    retrieveNews()
  }, [])
  const retrieveNews = () => {
    NewsDataService.FindOne(id)
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
    <Box width='full' align='center' responsive='true'>
      <Box background='light-2' width='large'>
        <Heading size='small' alignSelf='center'>
          {' '}
          {news && news.NewsTitle}
        </Heading>
        <Image src={`../../images/${news && news.Image}`} fill='horizontal' />

        <Box alignSelf='center' margin={{ left: '10px', right: '10px' }}>
          {news && ReactHtmlParser(news.News)}
        </Box>
      </Box>
    </Box>
  )
}

export default ReporterViewNews
