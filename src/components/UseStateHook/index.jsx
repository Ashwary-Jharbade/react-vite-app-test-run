import { useState } from "react";

const BasicForm = () => {
  const [formResult, setFormResult] = useState({
    name: "",
    jobTitle: "",
    email: "",
    phone: "",
    isIndian: false,
    isJS: false,
  });

  const onInputFieldChange = (e) => {
    if (!e && e?.type === "onchnage" && e?.target) {
      return;
    }
    const { value, type, name } = e.target;
    let newValue = value;
    if (type === "checkbox") {
      newValue = !formResult[name];
    }
    const newState = {
      ...formResult,
      [name]: newValue,
    };
    setFormResult(newState);
  };

  return (
    <>
      <div>
        <label>Name</label>
        <div>
          <input
            type="text"
            onChange={onInputFieldChange}
            name="name"
            value={formResult.name}
          />
        </div>
      </div>
      <div>
        <label>Job Title</label>
        <div>
          <input
            type="text"
            onChange={onInputFieldChange}
            name="jobTitle"
            value={formResult.jobTitle}
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <input
            type="text"
            onChange={onInputFieldChange}
            name="email"
            value={formResult.email}
          />
        </div>
      </div>
      <div>
        <label>Phone</label>
        <div>
          <input
            type="text"
            onChange={onInputFieldChange}
            name="phone"
            value={formResult.phone}
          />
        </div>
      </div>
      <div>
        <label>Are you resident of India ?</label>
        <div>
          <input
            type="checkbox"
            onChange={onInputFieldChange}
            name="isIndian"
            value={formResult.isIndian}
          />
        </div>
      </div>
      <div>
        <label>Do you know JS ?</label>
        <div>
          <input
            type="checkbox"
            onChange={onInputFieldChange}
            name="isJS"
            value={formResult.isJS}
          />
        </div>
      </div>
    </>
  );
};

export default BasicForm;
