import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import {
  Button,
  Box,
  Grid,
  CardBody,
  Card,
  ResponsiveContext,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Image,
  Heading,
} from 'grommet'
import { grommet } from 'grommet/themes'
import { Grommet } from 'grommet'
import {
  getAll,
  remove,
} from '../../services/FullNewsServices/FullNewsServices'

import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import ReactHtmlParser from 'react-html-parser'

export const FullNews = (props) => {
  let history = useHistory()

  const [news, setNews] = useState()
  const size = useContext(ResponsiveContext)
  let id = props.match.params.id

  useEffect(() => {
    async function news() {
      await getAll(id).then((result) => setNews(result))
    }
    news()
  }, [])

  function confirm() {
    confirmAlert({
      title: 'Confirm to Delete News',
      message: 'Are you sure to delete this news.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            fullNewsDelete()
          },
        },
        {
          label: 'No',
          onClick: () => {
            fullNewsNoDelete()
          },
        },
      ],
    })
  }
  const fullNewsDelete = async () => {
    let dataRejected = id
    await remove(dataRejected)
    history.push('/')
  }

  const fullNewsNoDelete = async () => {
    history.push(`/FullNews/${id}`)
  }

  return (
    <Grid columns={size !== 'small' ? 'large' : '100%'} gap='small'>
      <Box
        width='100vw'
        height='100vh'
        alignContent='center'
        pad='large'
        overflow='auto'
        direction='row-responsive'
      >
        <Card
          align='left'
          height='large'
          width='large'
          background='light-1'
          overflow='auto'
        >
          <CardBody pad='large'>
            <Heading size='small' level='2'>
              {news && news.NewsTitle}
            </Heading>
            <Image
              src={`../images/${news && news.Image}`}
              fill='horizontal'
            ></Image>
            <p> {news && ReactHtmlParser(news.News)}</p>{' '}
            <Button
              primary
              label='Delete News'
              alignSelf='center'
              margin='10px'
              color='#ff726f'
              onClick={() => confirm()}
            />
          </CardBody>
        </Card>

        <Card align='left' height='large' width='medium' background='light-1'>
          <CardBody pad='large'>
            <Heading alignSelf='center' size='small' level='2'>
              Reported Issues
            </Heading>
            {news &&
              news.issues.map((newslist, index) => (
                <Table>
                  <TableHeader></TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell scope='row'>
                        <li key={index}>{newslist.Issue}</li>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              ))}
          </CardBody>
        </Card>
      </Box>
    </Grid>
  )
}

export default FullNews
