import React from 'react'
import { useLocation } from 'react-router-dom';
import Ads from '../ads/Ads';
import Banner from '../banner/Banner';
import Category from '../category/Category';
import Dashboard from '../dashboard/Dashboard';
import Inbox from '../inbox/Inbox';
import Movie from '../movie/Movie';
import Post from '../post/Post';
import Profile from '../profile/Profile';
import Sertificate from '../sertificate/Sertificate';
import PromoCode from '../promoCode/PromoCode';
import Users from '../users/Users';
import Push from '../push/Push';
import Pop from '../pop/Pop';
import Constants from '../constants/Constants';
import Interests from '../interests/Interests';
import Tags from '../tags/Tags';





const GetCurrentRoute = () => {
    const location = useLocation();
    console.log(location.pathname);

    return location.pathname;
}

const Index = () => {
    let page = <Dashboard />
    if (GetCurrentRoute() == '/') {
        page = <Dashboard />
    }
    if (GetCurrentRoute() == '/profile') {
        page = <Profile />
    }
    if (GetCurrentRoute() == '/category') {
        page = <Category />
    }

    if (GetCurrentRoute() == '/banner') {
        page = <Banner />
    }
    if (GetCurrentRoute() == '/ads') {
        page = <Ads />
    }
    if (GetCurrentRoute() == '/inbox') {
        page = <Inbox/>
    }
    if (GetCurrentRoute() == '/post') {
        page = <Post />
    }
    if (GetCurrentRoute() == '/sertificate') {
        page = <Sertificate/>
    }
    if (GetCurrentRoute() == '/promoCode') {
        page = <PromoCode/>
    }
    if (GetCurrentRoute() == '/users') {
        page = <Users/>
    }
    if (GetCurrentRoute() == '/push') {
        page = <Push/>
    }
    if (GetCurrentRoute() == '/pop') {
        page = <Pop/>
    }
    if (GetCurrentRoute() == '/constants') {
        page = <Constants/>
    }
    if (GetCurrentRoute() == '/interests') {
        page = <Interests/>
    }
    if (GetCurrentRoute() == '/tags') {
        page = <Tags/>
    }
    return (
        <div>
            {page}
        </div>
    )
}

export default Index
