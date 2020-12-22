import React, { useState, useEffect, useContext } from 'react'
import {
  Box,
  Header,
  Anchor,
  Nav,
  ResponsiveContext,
  Menu,
  Select,
  TextInput,
  Grid,
  Card,
  Heading,
  List,
  Text,
  Grommet,
  Carousel,
  Image,
} from 'grommet'
import { Search, Attraction, TreeOption, Car } from 'grommet-icons'
import NewsDataService from '../../services/NewsService/NewsService'
import { Link, NavLink } from 'react-router-dom'

function Home() {
  const options = ['title', 'locality']
  const [searchValue, setSearchValue] = useState('')
  const [value, setValue] = useState('title')
  const [latest, setLatest] = useState()
  const [news, setNews] = useState()
  const [count, setCount] = useState()
  const [topNews, setTopNews] = useState()
  const size = useContext(ResponsiveContext)
  useEffect(() => {
    retrieveNews()
    topTen()
    latestNews()
  }, [])

  const topTen = () => {
    NewsDataService.getTopTen()
      .then((response) => {
        setTopNews(response.data)
      })
      .catch((err) => {
        if (err) {
          console.log(err)
        }
      })
  }

  const latestNews = () => {
    NewsDataService.latestNews()
      .then((response) => {
        setLatest(response.data)
      })
      .catch((err) => {
        if (err) {
          console.log(err)
        }
      })
  }

  const onChangeSearchValue = (e) => {
    const searchValue = e.target.value
    setSearchValue(searchValue)
  }

  console.log(value)
  console.log(searchValue)

  const retrieveNews = () => {
    NewsDataService.getAll()
      .then((response) => {
        setNews(response.data)
      })
      .catch((err) => {
        if (err) {
          console.log(err)
        }
      })
  }

  const updateCount = async (id, c) => {
    var data = {
      Count: c + 1,
    }
    await NewsDataService.update(id, data)
      .then((response) => {
        setNews(response.data)
        console.log(response.data.Count)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const findByTitleAndLocality = () => {
    if (value === 'title') {
      NewsDataService.findByTitle(searchValue)
        .then((response) => {
          console.log('3')
          setNews(response.data)
          console.log(response.data)
        })
        .catch((e) => {
          console.log(e)
        })
    } else {
      NewsDataService.findByLocality(searchValue)
        .then((response) => {
          console.log('4')
          setNews(response.data)
          console.log(response.data)
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }

  return (
    <Box>
      <Header background='dark-1' pad='small'>
        <ResponsiveContext.Consumer>
          {(responsive) =>
            responsive === 'small' ? (
              <Box fill align='start' justify='start' width='3vw'>
                <Select
                  id='select'
                  name='select'
                  placeholder='Select'
                  value={value}
                  options={options}
                  onChange={({ option }) => setValue(option)}
                  size='small'
                />
                <TextInput
                  onKeyUp={findByTitleAndLocality}
                  onChange={onChangeSearchValue}
                  value={searchValue}
                  icon={<Search />}
                  placeholder='search ...'
                />
              </Box>
            ) : (
              <Box
                fill
                align='start'
                justify='start'
                direction='row-responsive'
              >
                <Select
                  id='select'
                  name='select'
                  placeholder='Select'
                  value={value}
                  options={options}
                  onChange={({ option }) => setValue(option)}
                  size='small'
                />
                <TextInput
                  onKeyUp={findByTitleAndLocality}
                  onChange={onChangeSearchValue}
                  value={searchValue}
                  icon={<Search />}
                  placeholder='search ...'
                />
              </Box>
            )
          }
        </ResponsiveContext.Consumer>
      </Header>

      <Box align='center' width='100%'>
        <Carousel fill='true' play='4000'>
          {topNews &&
            topNews.map((news, i) => (
              <Box width='100%' pad={{ left: '3vw', right: '3vw', top: '1vh' }}>
                <Image
                  src={`../images/${news && news.Image}`}
                  fill='horizontal'
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: '1800px',
                    height: '450px',
                  }}
                ></Image>
                <Link
                  to={`/News/${news.id}`}
                  onClick={() => updateCount(news.id, news.Count)}
                  style={{
                    textDecoration: 'none',
                    position: 'absolute',
                    zIndex: '1',
                    alignSelf: 'center',
                    bottom: '5px',
                  }}
                >
                  <Heading size='small' level='3' color='white'>
                    {news.NewsTitle}
                  </Heading>
                </Link>
              </Box>
            ))}
        </Carousel>
      </Box>

      <Box direction='row-responsive'>
        <Box width='medium' pad='medium'>
          <Heading size='small' textAlign='center'>
            Latest News
          </Heading>
          <Grid gap='20px'>
            {latest &&
              latest.map((n, index) => (
                <Card key={index} direction='row' height='10vh'>
                  <NavLink
                    to={`/News/${n.id}`}
                    onClick={() => updateCount(n.id, n.Count)}
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
        <Box basis='full' pad='medium' width='full'>
          <Heading size='small' textAlign='center'>
            All News
          </Heading>
          <Grid gap='20px'>
            {news &&
              news.map((n, index) => (
                <Card key={index} direction='row' height='10vh'>
                  <Image src={`../images/${n && n.Image}`} width='30%'></Image>

                  <NavLink
                    to={`/News/${n.id}`}
                    onClick={() => updateCount(n.id, n.Count)}
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
    </Box>
  )
}

export default Home
