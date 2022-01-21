import React, { useState } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap';
import Stack from '@mui/material/Stack';
import './profileModal.css'
import LeftSIdeModal from './LeftSideModal/LeftSIdeModal';
import RightSideModal from './RightSideModal/RightSideModal';
import { Player } from '@lottiefiles/react-lottie-player';
import axios from 'axios';



const ProfileModal = () => {
    const [show, setShow] = useState(false);
    const [nameTM, setNameTM] = useState('');
    const [nameRU, setNameRU] = useState('');
    const [shortdescTM, setshortdescTM] = useState('');
    const [shortdescRU, setshortdescRU] = useState('');
    const [descTM, setdescTM] = useState('');
    const [descRU, setdescRU] = useState('');
    const [instagram, setinstagram] = useState('');
    const [site, setsite] = useState('');
    const [location, setlocation] = useState('');
    const [address, setaddress] = useState('');
    const [workhours, setworkhours] = useState('');
    const [freetime, setfreetime] = useState('');
    const [isVIP, setisVIP] = useState(false);
    const [orderInList, setorderInList] = useState(0);
    const [status, setstatus] = useState(1);
    const [tmmusecard, settmmusecard] = useState(0);
    const [owncard, setowncard] = useState(0);
    const [category, setcategory] = useState(1);
    const [delivery, setdelivery] = useState(false);
    const [avaragecheck, setavaragecheck] = useState(0);
    const [kitchenTM, setkitchenTM] = useState('');
    const [kitchenRU, setkitchenRU] = useState('');
    const [cash, setcash] = useState(false);
    const [terminal, setterminal] = useState(false);
    const [required_promotion, setrequired_promotion] = useState(false);
    const [isActiveCard, setisActiveCard] = useState(false);
    const [insertedProfileId, setinsertedProfileId] = useState(0);
    const [insertedCategoryId, setinsertedCategoryId] = useState(0);
    const [loading, setLoading] = useState(false);
    const [arrayOfTopSliderImages, setarrayOfTopSliderImages] = useState({});
    const [serverUrl,setServerUrl]=useState("http://10.192.168.16:5000/");

    

    const onFileChangeTopSlider = event => {
    
      // Update the state
      setarrayOfTopSliderImages(event.target.files)
    
    };

        // On file upload (click the upload button)
        const onFileUploadTopSliderImages = async() => {
        
          // Create an object of formData
          let formData = new FormData();
        
          // Update the formData object
          for(let i=0;i<arrayOfTopSliderImages.length;i++){
            await formData.append("files", arrayOfTopSliderImages[i],arrayOfTopSliderImages[i].name);
            console.log(arrayOfTopSliderImages[i].name);
          }
        
          // Details of the uploaded file
          
        
          // Request made to the backend api
          // Send formData object
           
          
          await axios({
            method: "POST",
            url: "http://10.192.168.16:5000/add-sliders?"+insertedProfileId,
            data: formData,
            headers: {
              'Accept': 'application/json',
              "Content-Type": "multipart/form-data",
              'Authorization': 'Bearer 12213'
            }
          })
          .catch(function (error) {
              alert(error.message);
              setLoading(false)
          })
        };

        

        

    

    const addProfile=()=>{
      if(owncard===''){
        setowncard(0);
        setisActiveCard(false);
      } else if(owncard==0){
        setisActiveCard(false);
      }
       else{
        setisActiveCard(true);
      }

      setLoading(true);
        fetch('http://10.192.168.16:5000/add-profile', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 12213'
        },
        body: JSON.stringify({
          nameTM: nameTM,
          short_descTM: shortdescTM,
          nameRU: nameRU,
          short_descRU: shortdescRU,
          like: 0,
          dislike: 0,
          instagram: instagram,
          site: site,
          location: location,
          address: address,
          is_cash: cash,
          is_terminal: terminal,
          work_hours: workhours,
          delivery: delivery,
          cousineTM: kitchenTM,
          cousineRU: kitchenRU,
          average_check: avaragecheck,
          is_active_card: isActiveCard,
          tm_muse_card: tmmusecard,
          is_certificate: false,
          is_promo: false,
          status: status,
          category_id: category,
          view_count: 0,
          promo_count: 0,
          descriptionTM: descTM,
          descriptionRU: descRU,
          order_in_list: orderInList,
          free_time: freetime,
          tenants_id: 1,
          required_promotion: required_promotion
        })
      })
      .then(response => response.json())
      .then(data => {
        setinsertedProfileId(data.body.profile_id);
        setinsertedCategoryId(data.body.category_id)
        onFileUploadTopSliderImages()
      })
      .catch(err => {
        setLoading(false);
        alert(err);
      })
    }

    return (
        <div>
      <button variant="primary" onClick={() => setShow(true)}>+ Add profile</button>
      <Modal
        className='modal'
        show={show}
        fullscreen={true}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            <p className='addProfileTitle'>Add profile</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <form method="post" enctype="multipart/form-data"> */}
              <Row>
                  <Col lg={6} md={12} sm={12} xs={12}>
                  <Row className='leftinputItem'>
                  <Col lg={6} md={6} sm={12} xs={12}>
                      <p className='inputTitle'>Name TM:</p>
                      <input className='inputModal' value={nameTM} onInput={e => setNameTM(e.target.value)} type="text" />
                  </Col>
                  <Col lg={6} md={6} sm={12} xs={12}>
                      <p className='inputTitle'>Name RU:</p>
                      <input className='inputModal' value={nameRU} onInput={e => setNameRU(e.target.value)} type="text" />
                  </Col>
                  <Col lg={6} md={6} sm={12} xs={12}>
                      <p className='inputTitle'>Short description TM:</p>
                      <input value={shortdescTM} onInput={e => setshortdescTM(e.target.value)} className='inputModal' type="text" />
                  </Col>
                  <Col lg={6} md={6} sm={12} xs={12}>
                      <p className='inputTitle'>Short description RU:</p>
                      <input value={shortdescRU} onInput={e => setshortdescRU(e.target.value)} className='inputModal' type="text" />
                  </Col>
                  <Col lg={6} md={6} sm={12} xs={12}>
                      <p className='inputTitle'>Description TM:</p>
                      <textarea value={descTM} onInput={e => setdescTM(e.target.value)} name="" id="" cols="20" rows="4"></textarea>
                  </Col>
                  <Col lg={6} md={6} sm={12} xs={12}>
                      <p className='inputTitle'>Description RU:</p>
                      <textarea value={descRU} onInput={e => setdescRU(e.target.value)} name="" id="" cols="20" rows="4"></textarea>
                  </Col>
                  <Col lg={6} md={6} sm={12} xs={12}>
                      <p className='inputTitle'>Instagram(only username):</p>
                      <input value={instagram} onInput={e => setinstagram(e.target.value)} className='inputModal' type="text" />
                  </Col>
                  <Col lg={6} md={6} sm={12} xs={12}>
                      <p className='inputTitle'>Site URl:</p>
                      <input value={site} onInput={e => setsite(e.target.value)} className='inputModal' type="text" />
                  </Col>
                  <Col lg={6} md={6} sm={12} xs={12}>
                      <p className='inputTitle'>Location...</p>
                      <input value={location} onInput={e => setlocation(e.target.value)} className='inputModal' type="text" />
                  </Col>
                  <Col lg={6} md={6} sm={12} xs={12}>
                      <p className='inputTitle'>Address:</p>
                      <input value={address} onInput={e => setaddress(e.target.value)} className='inputModal' type="text" />
                  </Col>

                  <Col lg={6} md={6} sm={12} xs={12}>
                      <p className='inputTitle'>Work hours(09:00-18:00):</p>
                      <input value={workhours} onInput={e => setworkhours(e.target.value)} className='inputModal' type="text" />
                  </Col>
                  <Col lg={6} md={6} sm={12} xs={12}>
                      <p className='inputTitle'>Free time(13:00-14:00):</p>
                      <input value={freetime} onInput={e => setfreetime(e.target.value)} className='inputModal' type="text" />
                  </Col>
                  <div className="addMovie">
                      <Col lg={12} md={12} sm={12} xs={12}>
                          <p className='inputTitle'>Movie time:</p>
                          <textarea  name="" id="movie" cols="51.9" rows="5"></textarea>
                      </Col>
                  </div>

              </Row>
                </Col>
                <Col lg={6} md={12} sm={12} xs={12}>
                <Row className='inputSize' >
                <Col lg={2.5} md={3} sm={12} xs={12}>
                    <p className='inputTitle'>Is VIP?</p>
                    <input type="checkbox" onChange={e => setisVIP(e.target.checked)}/>
                </Col> 
                <Col lg={2.5} md={3} sm={12} xs={12}>
                    <p className='inputTitle'>Order in list:</p>
                    <input value={orderInList} onInput={e => setorderInList(e.target.value)} type="text" />
                </Col> 
                <Col lg={2.5} md={3} sm={12} xs={12}>
                    <p className='inputTitle'>Status:</p>
                    <select onChange={e=> setstatus(e.target.value)}  name="" id=""><option value="1">Active</option><option value="0">Passive</option></select>
                </Col> 
                <Col lg={2.5} md={3} sm={12} xs={12}>
                    <p className='inputTitle'>TmMuse Card:</p>
                    <input value={tmmusecard} onInput={e => settmmusecard(e.target.value)} type="text" />
                </Col> 
                <Col lg={2.5} md={3} sm={12} xs={12}>
                    <p className='inputTitle'>Own Card:</p>
                    <input value={owncard} onInput={e => setowncard(e.target.value)} type="text" />
                </Col>
                <Col lg={4} md={12} sm={12} xs={12}>
                    <p className='inputTitle'>Category:</p>
                    <select onChange={e=> setcategory(e.target.value)} name="" id="category" className="normalSize" ><option value="0">Select category</option><option value="3">Cafe and Restaurant</option></select>
                </Col>  
                <Col lg={5} md={12} sm={12} xs={12}>
                    <p className='inputTitle'>Tenant:</p>
                    <select name="" className="normalSize"><option value="">Select Tenant</option><option value="">Passive</option></select>
                </Col>
                {/* When select cafe and restaurant category starting here*/}

                <div id="cafeRestaurantContainer">
                    <Col lg={3} md={3} sm={12} xs={12}>
                        <p className='inputTitle'>Delivery:</p>
                        <input type="checkbox" onChange={e => setdelivery(e.target.checked)} />
                    </Col>
                    <Col lg={3} md={3} sm={12} xs={12}>
                        <p className='inputTitle'>Avarage check:</p>
                        <input value={avaragecheck} onInput={e => setavaragecheck(e.target.value)} type="text" />
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <p className='inputTitle'>Kitchen TM:</p>
                        <input value={kitchenTM} onInput={e => setkitchenTM(e.target.value)} id='kitchenTmInput' type="text" />
                    </Col> 
                </div>
                <div id="cafeRestaurantContainer">
                    <Col lg={3} md={3} sm={12} xs={12}>
                        <p className='inputTitle'>Cash:</p>
                        <input type="checkbox" onChange={e => setcash(e.target.checked)} />
                    </Col>
                    <Col lg={3} md={3} sm={12} xs={12}>
                        <p className='inputTitle'>Terminal:</p>
                        <input type="checkbox"  onChange={e => setterminal(e.target.checked)}/>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <p className='inputTitle'>Kitchen RU:</p>
                        <input value={kitchenRU} onInput={e => setkitchenRU(e.target.value)} id='kitchenTmInput' type="text" />
                    </Col> 
                </div>
                {/* select category ending here */}

                {/* Add phone number is starting here */}
                <div className="AddPhoneNumber">
                    <Col lg={4} md={12} sm={12} xs={12}>
                        <p className='inputTitle'>Phone number:</p>
                        <input type="text" className='normalSize' />
                    </Col>
                    <Col lg={4} md={12} sm={12} xs={12}>
                        <p className='inputTitle'>Phone number:</p>
                        <input type="text" className='normalSize' />
                    </Col>
                    <Col lg={4} md={12} sm={12} xs={12}>
                        <p className='addPhoneNumber'> +Add phone number:</p>
                    </Col>
                </div>
                {/* Add phone number is ending here */}
               
                <Col lg={6} md={6} sm={12} xs={12} className='fullSizeInput'>
                  <form method="post" enctype="multipart/form-data">
                    <p className='inputTitle'>Top slider(multiple):</p>
                    <input type="file" onChange={onFileChangeTopSlider} multiple/>
                  </form>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12} className='fullSizeInput'>
                    <p className='inputTitle'>Gallery image(multiple):</p>
                    <input type="file" />
                </Col>
                <Col lg={6} md={6} sm={12} xs={12} className='fullSizeInput'>
                    <p className='inputTitle'>VR small image:</p>
                    <input id='fileDownload' type="file" />
                </Col>
                <Col lg={6} md={6} sm={12} xs={12} className='fullSizeInput'>
                    <p className='inputTitle'>VR large image:</p>
                    <input id='fileDownload' type="file" />
                </Col>

                <Col lg={6} md={6} sm={12} xs={12} className='fullSizeInput'>
                    <p className='inputTitle'>Tags TM:</p>
                    <input type="text" />
                </Col>
                <Col lg={6} md={6} sm={12} xs={12} className='fullSizeInput'>
                    <p className='inputTitle'>Tags RU:</p>
                    <input type="text" />
                </Col>
                <Col lg={6} md={6} sm={6} xs={6}></Col>
                <Col id='RequiredPromotion' lg={4} md={4} sm={4} xs={4}><p className='inputTitle'>Required promotion:</p></Col>
                <Col lg={2} md={2} sm={2} xs={2}><input type="checkbox" onChange={e => setrequired_promotion(e.target.checked)}/></Col>
                <Col lg={9} md={9} sm={12} xs={12}></Col>
                <Col className='fullSizeInput' lg={3} md={3} sm={12} xs={12}><button onClick={addProfile}>Add</button></Col>

                       
                </Row>
                </Col>
            </Row>
            {/* </form> */}
        </Modal.Body>
      </Modal>


      <Modal show={loading}
                backdrop="static"
                keyboard={false} 
                centered>
                
                <Modal.Body>
                    <Player
                        autoplay
                        loop
                        src="images/ios_loading.json"
                        style={{ height: '50px', width: '50px' }}
                        >
                    </Player>
                </Modal.Body>
            
            </Modal>

        </div>
    )
}

export default ProfileModal
