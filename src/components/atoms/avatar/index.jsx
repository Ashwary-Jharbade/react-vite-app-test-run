import "./index.css";

const Avatar = ({ imgLink }) => {
  return (
    <>
      <div className="cardAvatar">
        <img src={imgLink} alt="avatar" />
      </div>
    </>
  );
};

export default Avatar;
