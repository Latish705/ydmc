/* eslint-disable react/prop-types */
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './BlogCard.css';
import { IconButton } from '@mui/material';
import { GoArrowRight } from "react-icons/go";

function Blogcard({ImageUrl,title,Content}) {

    const trimContent = (Content, maxLength = 150) => {
        if (Content.length <= maxLength) {
            return Content;
        }
        let trimmedContent = Content.substr(0, maxLength);
        return trimmedContent.substr(0, Math.min(trimmedContent.length, trimmedContent.lastIndexOf(" "))) + "...";
    };

  return (
    <>
        {/* Desktop */}
        <div className="BlogCardContainer">
            <div className="ImageContainer">
                <LazyLoadImage src={ImageUrl} alt='blogimg.png' className='CardImage' />
            </div>
            <div className="BlogDetailsContainer">
                <h3>{title}</h3>
                <p>{trimContent(Content)}</p>
            </div>
            <div className="ReadContainer">
                <IconButton style={{background: '#CDFF00'}}><GoArrowRight size={40} color='black' stroke='1px'/></IconButton>
            </div>
        </div>

        {/* MobileDisplay */}
        <div className="BlogCardContainerMobile">
            <div className="ImageContainerMobile">
                <LazyLoadImage src={ImageUrl} alt='blogimg.png' className='CardImageMobile' />
            </div>
            <div className="BlogDetailsContainerMobile">
                <h3>{title}</h3>
                <IconButton style={{background: '#CDFF00'}}><GoArrowRight size={40} color='black' stroke='1px'/></IconButton>
            </div>
        </div>
    </>
  )
}

export default Blogcard