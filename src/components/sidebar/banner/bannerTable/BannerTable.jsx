import React from 'react'
import { Table } from 'react-bootstrap'
import UpdateBannerModal from '../bannerModal/updateBannerModal/UpdateBannerModal'
import './BannerTable.css'

const BannerTable = () => {
    return (
        <div>
            <Table responsive borderless className='profileTable'>
            <tr>
                <th><center>ID</center></th>
                <th><center>Image</center></th>
                <th><center>Link</center></th>
                <th><center>Profile Name</center></th>
                <th><center>Order</center></th>
                <th><center>Delete</center></th>
                <th><center>Edit</center></th>
            </tr>
            <tr>
                <td><center>1</center></td>
                <td><center><img src="images/tower.svg" alt="" /></center></td>
                <td><center>www.saylanan.com</center></td>
                <td><center>Berkarar sowda dync alys merkezi</center></td>
                <td><center>1</center></td>
                <td><center><img src="images/Delete.svg" alt="" /></center></td>
                <td><center><UpdateBannerModal/></center></td>
            </tr>
            </Table>
        </div>
    )
}

export default BannerTable
