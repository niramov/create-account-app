import s from './LeftSide.module.scss';
import mainPhoneImg from '../../assets/img/mainPhone.svg';
import minorPhoneImg from '../../assets/img/smallPhone.svg';

const LeftSide = () => (
  <div className={s.container}>
    <div className={s.heading}>Social media shared today, tomorrow or by location</div>
    <div className={s.ellipse}>
      <div className={s.ellipseContainer}>
        <img src={mainPhoneImg} alt="phone img" className={s.mainPhone} />
        <img src={minorPhoneImg} alt="phone img" className={s.minorLeftPhone} />
        <img src={minorPhoneImg} alt="phone img" className={s.minorRightPhone} />
      </div>
    </div>
  </div>
);

export default LeftSide;
