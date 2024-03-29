import React, { useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import s from './RightSide.module.scss';
import mainLogo from '../../assets/img/logo.svg';
import calendarIcon from '../../assets/img/calendarIcon.svg';
import googleIcon from '../../assets/img/googleIcon.svg';
import googlePlay from '../../assets/img/googlePlay.svg';
import appStore from '../../assets/img/appStore.svg';
import routes from '../../routes/routes';

const RightSide = () => {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const signUpSchema = Yup.object().shape({
    firstName: Yup.string().required('Required field'),
    lastName: Yup.string().required('Required field'),
    emailOrPhone: Yup.string().test(
      'emailOrPhone',
      'Must be a valid email or phone number',
      function (value) {
        const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        const phoneRegExp =
          /^((\+?[1-9]{1,4}[-]*)|(\(\d{2,3}\)[-]*)|(\d{2,4})[-]*)*?\d{3,4}[-]?\d{3,4}?$/;

        if (emailRegExp.test(value) || phoneRegExp.test(value)) {
          return true;
        } else {
          return false;
        }
      }
    ),
    dateOfBirth: Yup.date()
      .nullable()
      .max(new Date(), 'Birth date must be in the past')
      .required('Required'),
    password: Yup.string().min(6, 'Minimum 6 symbols').required('Required field'),
    passwordConfirm: Yup.string()
      .required('Required field')
      .oneOf([Yup.ref('password'), null], 'Confirm password'),
    checkbox2: Yup.boolean().oneOf([true], 'Required field'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      emailOrPhone: '',
      dateOfBirth: null,
      password: '',
      passwordConfirm: '',
      checkbox2: false,
    },
    validationSchema: signUpSchema,
    onSubmit: (values, { setSubmitting }) => {
      navigate(routes.success());
      setSubmitting(false);
    },
  });

  const { handleSubmit, handleChange, setFieldValue, values, touched, errors } = formik;

  const handleDateChange = (date) => {
    setFieldValue('dateOfBirth', date);
  };

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <img src={mainLogo} alt="logo" />
        </div>
        <div className={s.formContainer}>
          <h1 className={s.name}>Create account</h1>
          <span className={s.description}>For business, band or celebrity.</span>
          <form className={s.form} onSubmit={handleSubmit}>
            <div className={s.formRow}>
              <div className={s.formField}>
                <label htmlFor="firstName">First Name</label>
                <input
                  ref={inputRef}
                  type="text"
                  className={`${s.field} ${
                    touched.firstName && errors.firstName ? s.errorBorder : ''
                  }`}
                  name="firstName"
                  onChange={handleChange}
                  value={values.firstName}
                />
                {touched.firstName && errors.firstName && (
                  <div className={s.errorText}>{errors.firstName}</div>
                )}
              </div>
              <div className={s.formField}>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className={`${s.field} ${
                    touched.lastName && errors.lastName ? s.errorBorder : ''
                  }`}
                  name="lastName"
                  onChange={handleChange}
                  value={values.lastName}
                />
                {touched.lastName && errors.lastName && (
                  <div className={s.errorText}>{errors.lastName}</div>
                )}
              </div>
            </div>
            <div className={s.formRow}>
              <div className={s.formField}>
                <label htmlFor="emailOrPhone">Email or phone number</label>
                <input
                  type="text"
                  className={`${s.field} ${
                    touched.emailOrPhone && errors.emailOrPhone ? s.errorBorder : ''
                  }`}
                  name="emailOrPhone"
                  onChange={handleChange}
                  value={values.emailOrPhone}
                />
                {touched.emailOrPhone && errors.emailOrPhone && (
                  <div className={s.errorText}>{errors.emailOrPhone}</div>
                )}
              </div>
              <div className={s.formField}>
                <label htmlFor="dateOfBirth">Date of birth (MM/DD/YY)</label>
                <div className={s.datePickerContainer}>
                  <DatePicker
                    className={`${s.field} ${
                      touched.dateOfBirth && errors.dateOfBirth ? s.errorBorder : ''
                    }`}
                    selected={values.dateOfBirth}
                    onChange={handleDateChange}
                    dateFormat="MM/dd/yyyy"
                    showYearDropdown
                    showMonthDropdown
                    popperClassName="calendar-popper"
                  />
                  <img
                    src={calendarIcon}
                    alt="Calendar"
                    className={s.calendarIcon}
                    onClick={() => {}}
                  />
                </div>
                {touched.dateOfBirth && errors.dateOfBirth && (
                  <div className={s.errorText}>{errors.dateOfBirth}</div>
                )}
              </div>
            </div>
            <div className={s.formRow}>
              <div className={s.formField}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className={`${s.field} ${
                    touched.password && errors.password ? s.errorBorder : ''
                  }`}
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                />
                {touched.password && errors.password && (
                  <div className={s.errorText}>{errors.password}</div>
                )}
              </div>
              <div className={s.formField}>
                <label htmlFor="passwordConfirm">Confirm password</label>
                <input
                  type="password"
                  className={`${s.field} ${
                    touched.passwordConfirm && errors.passwordConfirm ? s.errorBorder : ''
                  }`}
                  name="passwordConfirm"
                  onChange={handleChange}
                  value={values.passwordConfirm}
                />
                {touched.passwordConfirm && errors.passwordConfirm && (
                  <div className={s.errorText}>{errors.passwordConfirm}</div>
                )}
              </div>
            </div>
            <div className={s.checkboxContainer}>
              <div className={s.checkboxRow}>
                <label className={s.checkboxRemember}>
                  <input
                    className={s.checkbox}
                    type="checkbox"
                    name="checkbox1"
                    onChange={handleChange}
                  />
                  Remember me
                </label>
                <div className={s.forgotPasswordLink}>
                  <a href="#">Forgot password?</a>
                </div>
              </div>
              <div className={s.checkboxRow}>
                <label>
                  <input
                    className={s.checkbox}
                    type="checkbox"
                    name="checkbox2"
                    checked={values.checkbox2}
                    onChange={(e) => setFieldValue('checkbox2', e.target.checked)}
                  />
                  I agree to all the <a href="#">Terms</a> and <a href="#">Privacy policy</a>
                </label>
                {touched.checkbox2 && errors.checkbox2 && (
                  <div className={s.errorText}>{errors.checkbox2}</div>
                )}
              </div>
            </div>
            <div className={s.formRow}>
              <button type="submit" className={s.buttonCreate}>
                Create account
              </button>
              <a href="#" className={s.buttonGoogle}>
                <div className={s.buttonGoogleText}>
                  <img src={googleIcon} className={s.googleIcon} alt="Google icon" />
                  <span>Sign-in with google</span>
                </div>
              </a>
            </div>
          </form>
          <div className={s.logIn}>
            Don’t have an account? <a href="#">Log In</a>
          </div>
          <div className={s.linkContainer}>
            <a href="#" className={s.googlePlayLink}>
              <img src={googlePlay} className={s.downloadImg} alt="Google Play link" />
            </a>
            <a href="#" className={s.appStore}>
              <img src={appStore} className={s.downloadImg} alt="App Store link" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
