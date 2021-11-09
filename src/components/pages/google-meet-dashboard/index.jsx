import "./index.css";
import MeetCard from "../../organisms/meet-card";

const data = [
  {
    imgLink:
      "https://images.unsplash.com/photo-1485795959911-ea5ebf41b6ae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyJTIwbW92aWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    userName: "Ashwary",
    mute: true,
  },
  {
    imgLink:
      "https://images.unsplash.com/photo-1485795959911-ea5ebf41b6ae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyJTIwbW92aWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    userName: "Bash",
    mute: true,
  },
  {
    imgLink:
      "https://images.unsplash.com/photo-1485795959911-ea5ebf41b6ae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyJTIwbW92aWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    userName: "Cash",
    mute: false,
  },
  {
    imgLink:
      "https://images.unsplash.com/photo-1485795959911-ea5ebf41b6ae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyJTIwbW92aWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    userName: "Ashwary",
    mute: true,
  },
  {
    imgLink:
      "https://images.unsplash.com/photo-1485795959911-ea5ebf41b6ae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyJTIwbW92aWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    userName: "Bash",
    mute: true,
  },
  {
    imgLink:
      "https://images.unsplash.com/photo-1485795959911-ea5ebf41b6ae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyJTIwbW92aWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    userName: "Cash",
    mute: false,
  },
  {
    imgLink:
      "https://images.unsplash.com/photo-1485795959911-ea5ebf41b6ae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyJTIwbW92aWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    userName: "Cash",
    mute: false,
  },
];

const GoogleMeetDashboard = () => {
  return (
    <>
      <div className="dashboardBG">
        <div className="rightMountedContainer">
          {data.map((item, index) => (
            <MeetCard
              key={index}
              imgLink={item.imgLink}
              userName={item.userName}
              mute={item.mute}
            ></MeetCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default GoogleMeetDashboard;
