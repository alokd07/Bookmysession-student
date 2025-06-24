import { useState, useEffect, useContext } from "react";
import { database } from "../firebase";
import { ref, onValue } from "firebase/database";
import moment from "moment";
import PropTypes from "prop-types";
import { UserContext } from "@/pages/_app";

const Notifications = ({setTotalNotifications}) => {
  const [notification, setnotification] = useState([]);
  const [loading, setLoading] = useState(false);
  const { data } = useContext(UserContext);

  useEffect(() => {
    setLoading(true);
    const dbRef = ref(database, `notifications/${data.uid}`);

    const unsubscribe = onValue(
      dbRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const notificationArray = Object.values(snapshot.val());
          setnotification(notificationArray);
          setLoading(false);
        } else {
          setnotification([]);
          setLoading(false);
        }
      },
      (error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [data.uid]);

  const formatDate = (timestamp) => {
    return moment(timestamp).fromNow();
  };

  useEffect(() => {
    setTotalNotifications(notification.length);
  }, [notification, setTotalNotifications]);

  if (loading) {
    return <div className="px-3 py-2">Please Wait...</div>;
  }

  return (
    <div className={`${notification.length > 0 ? "h-[20rem] overflow-y-scroll overflow-x-hidden" : "h-auto"}`}>
      {notification.length > 0 ? (
        <div>
          {notification.map((session, index) => (
            <div key={index} className="px-3 py-2">
              <div className="w-full bg-white rounded flex items-center">
                <div
                  tabIndex="0"
                  aria-label="group icon"
                  role="img"
                  className="focus:outline-none w-8 h-8 border rounded-full border-gray-200 flex flex-shrink-0 items-center justify-center"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.33325 14.6667C1.33325 13.2522 1.89516 11.8956 2.89535 10.8954C3.89554 9.89523 5.2521 9.33333 6.66659 9.33333C8.08107 9.33333 9.43763 9.89523 10.4378 10.8954C11.438 11.8956 11.9999 13.2522 11.9999 14.6667H1.33325ZM6.66659 8.66666C4.45659 8.66666 2.66659 6.87666 2.66659 4.66666C2.66659 2.45666 4.45659 0.666664 6.66659 0.666664C8.87659 0.666664 10.6666 2.45666 10.6666 4.66666C10.6666 6.87666 8.87659 8.66666 6.66659 8.66666ZM11.5753 10.1553C12.595 10.4174 13.5061 10.9946 14.1788 11.8046C14.8515 12.6145 15.2515 13.6161 15.3219 14.6667H13.3333C13.3333 12.9267 12.6666 11.3427 11.5753 10.1553ZM10.2266 8.638C10.7852 8.13831 11.232 7.52622 11.5376 6.84183C11.8432 6.15743 12.0008 5.41619 11.9999 4.66666C12.0013 3.75564 11.7683 2.85958 11.3233 2.06466C12.0783 2.21639 12.7576 2.62491 13.2456 3.2208C13.7335 3.81668 14.0001 4.56315 13.9999 5.33333C14.0001 5.80831 13.8987 6.27784 13.7027 6.71045C13.5066 7.14306 13.2203 7.52876 12.863 7.84169C12.5056 8.15463 12.0856 8.38757 11.6309 8.52491C11.1762 8.66224 10.6974 8.7008 10.2266 8.638Z"
                      fill="#047857"
                    />
                  </svg>
                </div>
                <div className="pl-3">
                  <p
                    tabIndex="0"
                    className="focus:outline-none text-[14px] lowercase leading-none"
                  >
                    <span className="text-indigo-700 capitalize">
                      {session.type}
                    </span>{" "}
                    by{" "}
                    <span className="text-indigo-700 capitalize">{session.name}</span>
                  </p>
                  <p
                    tabIndex="0"
                    className="focus:outline-none lowercase text-[11px] leading-3 pt-1 text-gray-500"
                  >
                    {formatDate(session.timestamp)}
                  </p>
                </div>
              </div>
              {notification.length - 1 !== index && (
                <div className="my-1 h-1 border-b border-gray-200" />
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="mx-auto justify-center w-32 py-2">
          <img
            src="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            alt="empty"
          />
          <p className="px-3 py-2">No notifications</p>
        </div>
      )}
    </div>
  );
};

export default Notifications;

Notifications.propTypes = {
  setTotalNotifications: PropTypes.func.isRequired,
};