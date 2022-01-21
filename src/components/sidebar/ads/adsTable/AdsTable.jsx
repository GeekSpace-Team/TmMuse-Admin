import React from 'react'
import { Table } from 'react-bootstrap'
import './Ads.css'

const AdsTable = () => {
    return (
        <div>
            <Table responsive borderless className='profileTable'>
            <tr>
                <th><center>ID</center></th>
                <th><center>Image</center></th>
                <th><center>Name</center></th>
                <th><center>Comment of admin</center></th>
                <th><center>Profile || Site URL</center></th>
                <th><center>Delete</center></th>
                <th><center>Edit</center></th>
            </tr>
            <tr>
                <td><center>1</center></td>
                <td><center><img src="images/tower.svg" alt="" /></center></td>
                <td><center>Germany</center></td>
                <td><center>On</center></td>
                <td><center>Kino Max...</center></td>
                <td><center>75</center></td>
                <td><center>79</center></td>
                <td><center>777</center></td>
                <td><center><img src="images/Delete.svg" alt="" /></center></td>
                <td><center><img src="images/Edit.svg" alt="" /></center></td>
                </tr>
                
            </Table>
        </div>
    )
}

export default AdsTable
