import './PhotosBlockSelecting.scss';
import testPhoto1 from '../../images/testPhoto1.png';
import testPhoto2 from '../../images/testPhoto2.png';
import testPhoto3 from '../../images/testPhoto3.png';
import testPhoto4 from '../../images/testPhoto4.png';
import testPhoto5 from '../../images/testPhoto5.png';
import { useState } from 'react';

export function PhotosBlockSelecting() {
  const [currentImg, setCurrentImg] = useState(testPhoto1);

  const handleClick = (event: any) => {
    setCurrentImg(event.currentTarget.getAttribute('src'));
  }
  return (
    <div className="PhotosBlock">
      <div className="PhotosBlock__sidePanel">
        <img 
          src={testPhoto1} 
          className='PhotosBlock__sidePanel_photo'
          onClick={handleClick}
        />
        <img 
          src={testPhoto2} 
          className='PhotosBlock__sidePanel_photo'
          onClick={handleClick} 
        />
          <img 
            src={testPhoto3} 
            className='PhotosBlock__sidePanel_photo' 
            onClick={handleClick} 
          />
        <img 
          src={testPhoto4} 
          className='PhotosBlock__sidePanel_photo' 
          onClick={handleClick}  
        />
        <img 
          src={testPhoto5} 
          className='PhotosBlock__sidePanel_photo' 
          onClick={handleClick} 
        />
      </div>
      <div className="PhotosBlock__mainPhoto">
        <img src={currentImg} className="PhotosBlock__mainPhoto_photo"/>
      </div>
    </div>
  )
}