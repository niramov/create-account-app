import s from './RightSide.module.scss';
import mainLogo from '../../assets/img/logo.svg';

const RightSide = () => (
  <div className={s.container}>
    <div className={s.wrapper}>
      <div className={s.logo}>
        <img src={mainLogo} alt="logo" className={s.logo} />
        <div className={s.formContainer}>
          <h1 className={s.name}>Create account</h1>
          <span className={s.description}>For business, band or celebrity.</span>
        </div>
      </div>
    </div>
  </div>
);

export default RightSide;
