import "./index.css";
import Avatar from "../../atoms/avatar";
import MicButton from "../../atoms/button";
import { SpeakButton } from "../../atoms/button";
import { PinButton } from "../../atoms/button";

const MeetCard = ({ imgLink, mute, userName }) => {
  return (
    <>
      <div className="meetupContainer">
        <Avatar imgLink={imgLink}></Avatar>
        <div className="topRightBtn">
          {mute ? <MicButton></MicButton> : <SpeakButton></SpeakButton>}
        </div>
        <div className="centerBtn">
          <PinButton></PinButton>
        </div>
        <div className="bottomLeftText">{userName}</div>
      </div>
    </>
  );
};

export default MeetCard;
