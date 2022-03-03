import React from 'react';
import Images from '../../constants/images'
import { SubHeading } from "../../components";
import './Header.css';


const Header = () => (
  <div className="app__header app__wrapper section__padding" id='home'>
    <div className="app__wrapper_info">
<SubHeading title='Chase The  New Flavour'/>
<h1 className="app__header-h1">The Key to Fine Dining</h1>
<p className="p__opensans" style={{margin: '2rem 0'}}>Sit tellus lobortis sed senectus vivamus molestie.
 Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
 <button type='button' className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
<img src={Images.welcome} alt="header" />
    </div>
  </div>
 );

export default Header;
// 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
// git remote set-url origin https://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@github.com/meryamun/figma-react-resaurant-app-2022.git
