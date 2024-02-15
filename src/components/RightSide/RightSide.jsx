import React, { useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import s from './RightSide.module.scss';
import mainLogo from '../../assets/img/logo.svg';
import routes from '../../routes/routes';

const RightSide = () => {
  // const inputRef = useRef(null);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  const signUpSchema = Yup.object().shape({
    firstName: Yup.string().required('Required field'),
    lastName: Yup.string().required('Required field'),
    emailOrPhone: Yup.string()
      .matches(/^[0-9]+$/, 'Must be a valid phone number or email')
      .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, 'Must be a valid email')
      .required('This field is required'),
    dateOfBirth: Yup.date()
      .nullable()
      .max(new Date(), 'Birth date must be in the past')
      .required('Required'),
    password: Yup.string().min(6, 'Minimum 6 symbols').required('Required field'),
    passwordConfirm: Yup.string()
      .required('Required field')
      .oneOf([Yup.ref('password'), null], 'Confirm password'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      emailOrPhone: '',
      dateOfBirth: '',
      password: '',
      passwordConfirm: '',
    },
    validationSchema: signUpSchema,
    onSubmit: (values, { setSubmitting }) => {
      // navigate(routes.success);
      setSubmitting(false);
    },
  });

  const { handleSubmit, handleChange, values, touched, errors, isSubmitting } = formik;

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <img src={mainLogo} alt="logo" className={s.logo} />
          <div className={s.formContainer}>
            <h1 className={s.name}>Create account</h1>
            <span className={s.description}>For business, band or celebrity.</span>
            <form className={s.form} onSubmit={handleSubmit}>
              <div className={s.formRow}>
                <div className={s.formField}>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    // ref={inputRef}
                    type="text"
                    className={s.firstName}
                    name="firstName"
                    onChange={handleChange}
                    value={values.firstName}
                  />
                  {touched.firstName && errors.firstName && <div>{errors.firstName}</div>}
                </div>
                <div className={s.formField}>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    className={s.lastName}
                    name="lastName"
                    onChange={handleChange}
                    value={values.lastName}
                  />
                  {touched.lastName && errors.lastName && <div>{errors.lastName}</div>}
                </div>
              </div>
              <div className={s.formRow}>
                <div className={s.formField}>
                  <label htmlFor="emailOrPhone">Email or phone number</label>
                  <input
                    type="text"
                    className={s.emailOrPhone}
                    name="emailOrPhone"
                    onChange={handleChange}
                    value={values.emailOrPhone}
                  />
                  {touched.emailOrPhone && errors.emailOrPhone && <div>{errors.emailOrPhone}</div>}
                </div>
                <div className={s.formField}>
                  <label htmlFor="dateOfBirth">Date of birth (MM/DD/YY)</label>
                  <input
                    type="text"
                    className={s.dateOfBirth}
                    name="dateOfBirth"
                    onChange={handleChange}
                    value={values.dateOfBirth}
                  />
                  {touched.dateOfBirth && errors.dateOfBirth && <div>{errors.dateOfBirth}</div>}
                </div>
              </div>
              <div className={s.formRow}>
                <div className={s.formField}>
                  <label htmlFor="password">Password</label>
                  <input
                    type="text"
                    className={s.password}
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                  />
                  {touched.password && errors.password && <div>{errors.password}</div>}
                </div>
                <div className={s.formField}>
                  <label htmlFor="confirmPassword">Confirm password</label>
                  <input
                    type="text"
                    className={s.confirmPassword}
                    name="confirmPassword"
                    onChange={handleChange}
                    value={values.confirmPassword}
                  />
                  {touched.confirmPassword && errors.confirmPassword && (
                    <div>{errors.confirmPasswordpassword}</div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
