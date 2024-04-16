import React, { useState } from 'react';
import style from './Signup.module.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [step, setStep] = useState(1); // Track the current step of the signup process
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mbti: '',
    favorite: '',
    address: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleNext = (event) => {
    event.preventDefault();
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.password) {
        alert('이름, 이메일, 비밀번호를 입력하세요.');
      } else {
        setStep(step + 1); // Move to the next step
      }
    } else if (step === 2) {
      if (!formData.mbti || !formData.favorite || !formData.address) {
        alert('MBTI, Favorite, Address를 입력하세요.');
      } else {
        handleSubmit(event); // Proceed to signup if all fields are filled out
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if all fields are filled out
    if (!Object.values(formData).every(value => value !== '')) {
      alert('모든 값을 입력하세요.');
    } else {
      // 여기에서 회원가입 처리 로직을 추가하세요.
      console.log('회원가입 정보:', formData);
      // 회원가입이 완료되면 다음 페이지로 이동
      navigate('/map');
    }
  };

  const imgClick = () => {
    navigate('/');
  };

  const loginClick = () => {
    navigate('/login');
  };

  return (
    <div className={style.wrap}>
      <img className={style.logo} src="https://res.cloudinary.com/dnbf7czsn/image/upload/v1712585378/logo_on0pc8.png" onClick={imgClick} alt="logo"></img>
      <section className={style.wrap_Signup}>
        <h2 className={style.Signup}>SIGNUP</h2>
        {step === 1 && (
          <form onSubmit={handleNext}>
            <p>
              <input className={style.name} type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            </p>
            <p>
              <input className={style.email} type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            </p>
            <p>
              <input className={style.password} type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
            </p>
            <button className={style.button} type="submit">
              Next
            </button>
          </form>
        )}
        {step === 2 && (
          <form onSubmit={handleNext}>
            <p>
              <input className={style.mbti} type="text" name="mbti" placeholder="MBTI" value={formData.mbti} onChange={handleChange} />
            </p>
            <p>
              <input className={style.favorite} type="text" name="favorite" placeholder="Favorite" value={formData.favorite} onChange={handleChange} />
            </p>
            <p>
              <input className={style.address} type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
            </p>
            <button className={style.button} type="submit">
              Sign Up
            </button>
          </form>
        )}
        <p className={style.haveAccount} onClick={loginClick}>
          Already have an account? Login
        </p>
      </section>
    </div>
  );
};

export default Signup;
