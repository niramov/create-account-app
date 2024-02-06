import s from './LeftSide.module.scss';

const LeftSide = () => (
  <div className={s.container}>
    <div className={s.heading}>Social media shared today, tomorrow or by location</div>
    <div className={s.ellipse}>
      <div className={s.ellipseContainer}></div>
    </div>
  </div>
);

export default LeftSide;
