import s from './MainPage.module.scss';
import LeftSide from '../../components/LeftSide/LeftSide';
import RightSide from '../../components/RightSide/RightSide';

const MainPage = () => {
  return (
    <div className={s.mainPage}>
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default MainPage;
