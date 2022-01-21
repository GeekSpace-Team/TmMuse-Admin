import React from 'react'
import './Sidebar.css'
import { Sidebar, SidebarItem } from "react-responsive-sidebar";
import Navbar from '../../navbar/Navbar';
import Index from '../index/Index';
import { Col, Row, Stack } from 'react-bootstrap';
import { FiGrid,FiChevronRight,FiImage,FiTrendingUp,FiPlayCircle,FiBriefcase,FiMail,FiUsers, FiUser } from "react-icons/fi";
import { SiGoogleads } from "react-icons/si" 
import { MdPostAdd, MdStyle} from "react-icons/md"
import { GrCertificate,GrGamepad} from "react-icons/gr"
import { ImPaste,ImNotification } from "react-icons/im"
import {HiOutlineHashtag} from "react-icons/hi"
import { TiTags,TiTabsOutline } from "react-icons/ti";
import { IoMdNotificationsOutline,IoPricetagOutline} from "react-icons/io"
import { NavLink, useLocation } from 'react-router-dom';
 
const GetCurrentRoute = () => {
    const location = useLocation();
    console.log(location.pathname);

    return location.pathname;
}

const SidebarDesign = () => {
    const activeItem='activeItem';
    const passiveItem='passiveItem';
    return (
       
            <Sidebar
                className='sideBarContainer'
                breakPoint="768"
                background="#FFFFFF"
                toggleIconColor="#7C057B"
                content={[

                    
                        <SidebarItem
                            hoverHighlight="#FFFFFF"
                            activeHightlight="#FFFFFF"
                            >
                            
                            <Stack direction='horizontal' className='toolbar' gap={2}>
                                <img src='images/logo.svg'/>
                                <Stack className='toolbarTitle'>
                                    <p>TmMuse</p>
                                    <p>admin panel</p>
                                </Stack>
                            </Stack>
                            <div className='line'></div>
                            <NavLink to="/dashboard" style={{ textDecoration: 'none' }} >
                                <Stack direction='horizontal' className={GetCurrentRoute()=='/dashboard'?activeItem:passiveItem} gap={3}>
                                    <FiTrendingUp/><label>Dashboard</label><FiChevronRight className='ms-auto'/>
                                </Stack>
                            </NavLink>

                            <NavLink to="/profile" style={{ textDecoration: 'none' }} >
                                <Stack direction='horizontal' className={GetCurrentRoute()=='/profile'?activeItem:passiveItem} gap={3}>
                                    <FiImage/><label>Profile</label><FiChevronRight className='ms-auto'/>
                                </Stack>
                            </NavLink>

                            <NavLink to="/category" style={{ textDecoration: 'none' }} >
                                <Stack direction='horizontal' className={GetCurrentRoute()=='/category'?activeItem:passiveItem} gap={3}>
                                    <FiGrid/><label>Category</label><FiChevronRight className='ms-auto'/>
                                </Stack>
                            </NavLink>


                            <NavLink to="/banner" style={{ textDecoration: 'none' }} >
                                <Stack direction='horizontal' className={GetCurrentRoute()=='/banner'?activeItem:passiveItem} gap={3}>
                                    <FiBriefcase/><label>Banner</label><FiChevronRight className='ms-auto'/>
                                </Stack>
                            </NavLink>

                            <NavLink to="/ads" style={{ textDecoration: 'none' }} >
                                <Stack direction='horizontal' className={GetCurrentRoute()=='/ads'?activeItem:passiveItem} gap={3}>
                                    <SiGoogleads/><label>Ads</label><FiChevronRight className='ms-auto'/>
                                </Stack>
                            </NavLink>

                            <NavLink to="/inbox" style={{ textDecoration: 'none' }} >
                                <Stack direction='horizontal' className={GetCurrentRoute()=='/inbox'?activeItem:passiveItem} gap={3}>
                                    <FiMail/><label>Inbox</label><FiChevronRight className='ms-auto'/>
                                </Stack>
                            </NavLink>

                            <NavLink to="/post" style={{ textDecoration: 'none' }} >
                                <Stack direction='horizontal' className={GetCurrentRoute()=='/post'?activeItem:passiveItem} gap={3}>
                                    <ImPaste/><label>Post</label><FiChevronRight className='ms-auto'/>
                                </Stack>
                            </NavLink>

                            <NavLink to="/sertificate" style={{ textDecoration: 'none' }} >
                                <Stack direction='horizontal' className={GetCurrentRoute()=='/sertificate'?activeItem:passiveItem} gap={3}>
                                    <GrCertificate/><label>Sertificate</label><FiChevronRight className='ms-auto'/>
                                </Stack>
                            </NavLink>

                            <NavLink to="/promoCode" style={{ textDecoration: 'none' }} >
                                <Stack direction='horizontal' className={GetCurrentRoute()=='/promoCode'?activeItem:passiveItem} gap={3}>
                                    <TiTags/><label>Promo Code</label><FiChevronRight className='ms-auto'/>
                                </Stack>
                            </NavLink>

                            <NavLink to="/users" style={{ textDecoration: 'none' }} >
                                <Stack direction='horizontal' className={GetCurrentRoute()=='/users'?activeItem:passiveItem} gap={3}>
                                    <FiUsers/><label>Users</label><FiChevronRight className='ms-auto'/>
                                </Stack>
                            </NavLink>

                            <NavLink to="/push" style={{ textDecoration: 'none' }} >
                                <Stack direction='horizontal' className={GetCurrentRoute()=='/push'?activeItem:passiveItem} gap={3}>
                                    <IoMdNotificationsOutline/><label>Push</label><FiChevronRight className='ms-auto'/>
                                </Stack>
                            </NavLink>

                            <NavLink to="/pop" style={{ textDecoration: 'none' }} >
                                <Stack direction='horizontal' className={GetCurrentRoute()=='/pop'?activeItem:passiveItem} gap={3}>
                                    <TiTabsOutline/><label>Pop-up</label><FiChevronRight className='ms-auto'/>
                                </Stack>
                            </NavLink>

                            <NavLink to="/constants" style={{ textDecoration: 'none' }} >
                                <Stack direction='horizontal' className={GetCurrentRoute()=='/constants'?activeItem:passiveItem} gap={3}>
                                    <ImNotification/><label>Constants</label><FiChevronRight className='ms-auto'/>
                                </Stack>
                            </NavLink>

                            <NavLink to="/interests" style={{ textDecoration: 'none' }} >
                                <Stack direction='horizontal' className={GetCurrentRoute()=='/interests'?activeItem:passiveItem} gap={3}>
                                    <GrGamepad/><label>Interests</label><FiChevronRight className='ms-auto'/>
                                </Stack>
                            </NavLink>

                            <NavLink to="/tags" style={{ textDecoration: 'none' }} >
                                <Stack direction='horizontal' className={GetCurrentRoute()=='/tags'?activeItem:passiveItem} gap={3}>
                                    <HiOutlineHashtag/><label>Tags</label><FiChevronRight className='ms-auto'/>
                                </Stack>
                            </NavLink>

                        </SidebarItem>

                        
                        

            
            ]}
            >
                <Navbar/>
                <Index/>
            </Sidebar>
       
    )
}

export default SidebarDesign
