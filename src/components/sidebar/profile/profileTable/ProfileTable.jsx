import React from 'react'
import { Table } from 'react-bootstrap'
import DeleteProfileModal from '../profileModal/deleteProfileTable/DeleteProfileModal'
import EditProfileModal from '../profileModal/editProfileModal/EditProfileModal'
import './ProfileTable.css'

const ProfileTable = () => {
    return (
        <div>
            <Table responsive borderless className='profileTable'>
            <tr>
                <th><center>ID</center></th>
                <th><center>Name</center></th>
                <th><center>Category</center></th>
                <th><center>VIP status</center></th>
                <th><center>Status</center></th>
                <th><center>View count</center></th>
                <th><center>Like</center></th>
                <th><center>Dislike</center></th>
                <th><center>Delete</center></th>
                <th><center>Edit</center></th>
            </tr>
            <tr>
                <td><center>1</center></td>
                <td><center>Berkarar</center></td>
                <td><center>Germany</center></td>
                <td><center>On</center></td>
                <td><center>Kino Max...</center></td>
                <td><center>75</center></td>
                <td><center>79</center></td>
                <td><center>777</center></td>
                <center><DeleteProfileModal/></center>
                <center><EditProfileModal/></center>
            </tr>
            </Table>
        </div>
    )
}

export default ProfileTable
