import React, { useEffect, useState } from 'react'
import {
  Box,
  Heading,
  Image,
  Button,
  Select,
  TextInput,
  Text,
  Anchor,
} from 'grommet'
import { useParams } from 'react-router-dom'
import NewsDataService from '../../services/NewsService/NewsService'
import IssueDataService from '../../services/IssueService/IssueService'
import ReactHtmlParser from 'react-html-parser'
import { Facebook, Twitter, Linkedin } from 'grommet-icons'
function News() {
  const [news, setNews] = useState()
  const [message, setMessage] = useState('')
  const [value, setValue] = useState('')
  const [email, setEmail] = useState('')
  const [issue, setIssue] = useState(false)
  const { id } = useParams()
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
          throw err
        }
      })
  }

  const saveIssue = () => {
    const data = {
      email: email,
      issue: value,
      nId: news.id,
    }

    IssueDataService.create(data)
      .then((response) => {
        setMessage('Issue Reported Successfully')
      })
      .catch((err) => {
        if (err) {
          throw err
        }
      })
    setTimeout(() => setMessage(''), 5000)
  }

  return (
    <Box width='full' align='center'>
      <Box background='light-2' width='large'>
        <Heading size='small' alignSelf='center'>
          {' '}
          {news && news.NewsTitle}
        </Heading>
        <Image src={`../images/${news && news.Image}`} fill='horizontal' />
        <Box justify='between' direction='row'>
          <Box direction='row' pad='xsmall'>
            <Anchor
              href={`https://www.facebook.com/sharer.php?u=http://localhost:3000/News/${id}`}
              target='_blank'
              rel='nofollow'
            >
              <Facebook color='#4267B2'></Facebook>
            </Anchor>
            <Anchor
              margin={{ left: '2px' }}
              href={`https://twitter.com/intent/tweet?url=http://localhost:3000/News/${id}&text=News%20Express&via=`}
              target='_blank'
              rel='nofollow'
            >
              <Twitter color='#1DA1F2'></Twitter>
            </Anchor>
            <Anchor
              margin={{ left: '2px' }}
              href={`https://www.linkedin.com/shareArticle?url=http://localhost:3000/News/${id}&title=News%20Express`}
              target='_blank'
              rel='nofollow'
            >
              <Linkedin color='#0e76a8'></Linkedin>
            </Anchor>
          </Box>
          <Text size='xsmall' weight='bold' margin={{ right: '10px' }}>
            Published by {news && news.user.Uname} on{' '}
            {news && news.createdAt.slice(0, 10)}
          </Text>
        </Box>

        <Box alignSelf='center' margin={{ left: '10px', right: '10px' }}>
          {news && ReactHtmlParser(news.News)}
        </Box>
        <Box alignSelf='center' size='small'>
          <Box>
            {issue ? (
              <Button
                primary
                label='Cancel'
                onClick={() => setIssue(false)}
              ></Button>
            ) : (
              <Button
                primary
                label='Report'
                onClick={() => setIssue(true)}
              ></Button>
            )}
          </Box>
          <Box>
            {message && (
              <Box alignSelf='center'>
                <Text color='#00C781'>{message}</Text>
              </Box>
            )}
            {issue ? (
              <Box size='small' align='center'>
                <Heading size='small'>Report Issue</Heading>
                <Select
                  placeholder='Choose Issue'
                  options={[
                    'Child Abuse',
                    'Promotes terrorism',
                    'Hateful content',
                  ]}
                  value={value}
                  size='small'
                  onChange={({ option }) => setValue(option)}
                />
                <br></br>
                <TextInput
                  type='text'
                  name='email'
                  required
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder='Email'
                />
                <Button
                  primary
                  label='Report'
                  onClick={saveIssue}
                  margin={{ bottom: '15px', top: '15px' }}
                ></Button>
              </Box>
            ) : (
              <p></p>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default News
