import React from 'react'
import { useState, useEffect, useContext } from 'react'

import {
  getAll,
  update,
  remove,
} from '../../services/UserRequestsService/UserRequestsService'
import {
  Box,
  Grommet,
  ResponsiveContext,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Card,
  CardBody,
  Grid,
} from 'grommet'
import { grommet } from 'grommet/themes'
import { confirmAlert } from 'react-confirm-alert'

export const UserRequests = () => {
  const [users, setUsers] = useState()
  const size = useContext(ResponsiveContext)

  useEffect(() => {
    async function users() {
      await getAll().then((result) => setUsers(result))
    }
    users()
  }, [])

  function confirm(id) {
    let getId = id
    confirmAlert({
      title: 'Confirm to Delete News',
      message: 'Are you sure to delete this news.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            userReject(getId)
          },
        },
        {
          label: 'No',
          onClick: () => {
            userNoDelete()
          },
        },
      ],
    })
  }

  const isApprovedTrue = async (uid) => {
    let data = { email: users.EmailId, uid: uid }
    await update(data)
    await getAll().then((result) => setUsers(result))
  }

  const userReject = async (uid) => {
    let dataRejected = { id: uid }
    await remove(dataRejected)
    await getAll().then((result) => setUsers(result))
  }

  const userNoDelete = async () => {
    await getAll().then((result) => setUsers(result))
  }

  return (
    <Grommet theme={grommet}>
      <Box
        width='100vw'
        height='100vh'
        alignContent='center'
        pad='large'
        overflow='auto'
      >
        <Grid columns={size !== 'small' ? 'large' : '100%'} gap='small'>
          <Card
            alignSelf='center'
            height='large'
            width='100%'
            background='light-1'
          >
            <CardBody pad='large' overflow='auto'>
              <Table width='100%'>
                <TableHeader>
                  <TableRow>
                    <TableCell scope='col' border='bottom'>
                      <strong> Name</strong>
                    </TableCell>
                    <TableCell scope='col' border='bottom'>
                      <strong> Locality</strong>
                    </TableCell>
                    <TableCell scope='col' border='bottom'>
                      <strong> AadharId</strong>
                    </TableCell>

                    <TableCell scope='col' border='bottom'>
                      <strong> Mob No</strong>
                    </TableCell>

                    <TableCell scope='col' border='bottom'>
                      <strong> Approve</strong>
                    </TableCell>
                    <TableCell scope='col' border='bottom'>
                      <strong> Reject</strong>
                    </TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users &&
                    users.map((userslist, i) => (
                      <TableRow>
                        <TableCell scope='row'>{userslist.Uname}</TableCell>
                        <TableCell scope='row'>{userslist.Locality}</TableCell>
                        <TableCell scope='row'>{userslist.AadharId}</TableCell>
                        <TableCell scope='row'>{userslist.MobNo}</TableCell>
                        <TableCell scope='row'>
                          <Button
                            primary
                            label='Approve'
                            alignSelf='start'
                            onClick={() => isApprovedTrue(userslist.Uid)}
                          />
                        </TableCell>
                        <TableCell scope='row'>
                          <Button
                            primary
                            label='Reject'
                            color='#ff726f'
                            alignSelf='start'
                            onClick={() => confirm(userslist.Uid)}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardBody>
          </Card>
        </Grid>
      </Box>
    </Grommet>
  )
}

export default UserRequests
