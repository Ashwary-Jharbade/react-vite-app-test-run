import { useRef, useEffect, useState } from "react";

const Otp = () => {
  const [otp, setOtp] = useState({
    one: "",
    two: "",
    thr: "",
    fou: "",
  });

  const inp1 = useRef(null);
  const inp2 = useRef(null);
  const inp3 = useRef(null);
  const inp4 = useRef(null);
  const nextbtn = useRef(null);

  useEffect(() => {
    const { one } = otp;
    if (!one) {
      return;
    }
    inp2.current.focus();
  }, [otp.one]);

  useEffect(() => {
    const { two } = otp;
    if (!two) {
      inp1.current.focus();
      return;
    }
    inp3.current.focus();
  }, [otp.two]);

  useEffect(() => {
    const { thr } = otp;
    if (!thr) {
      inp2.current.focus();
      return;
    }
    inp4.current.focus();
  }, [otp.thr]);

  useEffect(() => {
    const { fou } = otp;
    if (!fou) {
      inp3.current.focus();
      return;
    }
    nextbtn.current.focus();
  }, [otp.fou]);

  useEffect(() => {
    inp1.current.focus();
  }, []);

  const _validateOtpField = (value) => {
    if (!value) {
      return true;
    }
    const reg = /^[0-9]{1}$/;
    if (reg.test(value)) {
      return true;
    }
    return false;
  };

  const _onInputChangeHandler = (e) => {
    if (!e || !e?.target) {
      return;
    }
    const { name, value } = e.target;
    if (!_validateOtpField(value)) {
      return;
    }
    setOtp({
      ...otp,
      [name]: value,
    });
  };

  const { one, two, thr, fou } = otp;
  return (
    <>
      <div>OTP</div>
      <br />
      <div>
        <input
          onChange={_onInputChangeHandler}
          ref={inp1}
          value={one}
          name="one"
          type="text"
        />
        <input
          onChange={_onInputChangeHandler}
          ref={inp2}
          value={two}
          name="two"
          type="text"
        />
        <input
          onChange={_onInputChangeHandler}
          ref={inp3}
          value={thr}
          name="thr"
          type="text"
        />
        <input
          onChange={_onInputChangeHandler}
          ref={inp4}
          value={fou}
          name="fou"
          type="text"
        />
      </div>
      <br />
      <div>
        <button ref={nextbtn}>Next</button>
      </div>
    </>
  );
};

export default Otp;
