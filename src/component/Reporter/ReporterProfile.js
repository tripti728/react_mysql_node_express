import React, { useState, useEffect } from 'react'
import { Box, Grid, Heading, Avatar } from 'grommet'
import NewsDataService from '../../services/NewsService/NewsService'
import { User } from 'grommet-icons'

export default function ReporterProfile() {
  const [user, setUser] = useState()
  const u = sessionStorage.getItem('user')
  const parseduser = JSON.parse(u)
  const rId = parseduser.id

  useEffect(() => {
    retrieveReporter()
  }, [])
  const retrieveReporter = () => {
    NewsDataService.getReporter(rId)
      .then((response) => {
        setUser(response.data)
      })
      .catch((err) => {
        if (err) {
          //log(err)
        }
      })
  }

  return (
    <Box align='center'>
      <Box
        width='large'
        pad='small'
        align='center'
        margin={{ top: '5vh' }}
        background='#DADADA'
      >
        <Box direction='row' gap='small' align='center'>
          <Avatar background='#777777' size='large'>
            <User color='accent-1' />
          </Avatar>
        </Box>
        <Grid
          fill='true'
          columns={{
            count: 2,
            size: 'auto',
          }}
          rows={['auto', 'flex']}
          gap='small'
          align='center'
        >
          <Box align='center'>
            <Heading size='small' level='4'>
              User Id
            </Heading>
          </Box>
          <Box align='center'>
            <Heading size='small' level='4'>
              {user && user.Uid}
            </Heading>
          </Box>
          <Box align='center'>
            <Heading size='small' level='4'>
              User Name
            </Heading>
          </Box>
          <Box align='center'>
            {' '}
            <Heading size='small' level='4'>
              {user && user.Uname}
            </Heading>
          </Box>
          <Box align='center'>
            <Heading size='small' level='4'>
              User Email
            </Heading>
          </Box>
          <Box align='center'>
            {' '}
            <Heading size='small' level='4'>
              {user && user.EmailId}
            </Heading>
          </Box>
          <Box align='center'>
            <Heading size='small' level='4'>
              Locality
            </Heading>
          </Box>
          <Box align='center'>
            {' '}
            <Heading size='small' level='4'>
              {user && user.Locality}
            </Heading>
          </Box>
          <Box align='center'>
            <Heading size='small' level='4'>
              Phone No
            </Heading>
          </Box>
          <Box align='center'>
            {' '}
            <Heading size='small' level='4'>
              {user && user.MobNo}
            </Heading>
          </Box>
          <Box align='center'>
            <Heading size='small' level='4'>
              Addhar No
            </Heading>
          </Box>
          <Box align='center'>
            {' '}
            <Heading size='small' level='4'>
              {user && user.AadharId}
            </Heading>
          </Box>
        </Grid>
      </Box>
    </Box>
  )
}
