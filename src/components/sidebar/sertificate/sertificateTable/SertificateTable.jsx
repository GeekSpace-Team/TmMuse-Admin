import React from 'react';
import { Table } from 'react-bootstrap';
import './SertificateTable.css'

const SertificateTable = () => {
    let activeButton="activeButton";
    let passiveButton="passiveButton";
    let activeText="activeText";
    let passiveText="passiveText";
  return <div>
       <Table responsive borderless className='profileTable'>
            <tr>
                <th><center>ID</center></th>
                <th><center>Amount</center></th>
                <th><center>Profile</center></th>
                <th><center>User</center></th>
                <th><center>Status</center></th>
                <th><center>Change status</center></th>
                <th><center>Delete</center></th>
                <th><center>Edit</center></th>
            </tr>
            <tr>
                <td><center>1</center></td>
                <td><center>100 TMT</center></td>
                <td><center>Berkarar cinema</center></td>
                <td><center>Shageldi Alyyew/ +99362737222</center></td>
                <td className={activeText}><center>Active</center></td>
                <td className={passiveButton}><center><button>Set passive</button></center></td>
                <td><center><img src="images/Delete.svg" alt="" /></center></td>
                <td><center><img src="images/Edit.svg" alt="" /></center></td>
            </tr>
            <tr>
                <td><center>1</center></td>
                <td><center>100 TMT</center></td>
                <td><center>Berkarar cinema</center></td>
                <td><center>Shageldi Alyyew/ +99362737222</center></td>
                <td className={passiveText}><center>Passive</center></td>
                <td className={activeButton}><center><button>Set active</button></center></td>
                <td><center><img src="images/Delete.svg" alt="" /></center></td>
                <td><center><img src="images/Edit.svg" alt="" /></center></td>
            </tr>
            </Table>
  </div>;
};

export default SertificateTable;
