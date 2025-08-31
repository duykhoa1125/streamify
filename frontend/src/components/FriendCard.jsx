import { Link } from "react-router";
import { LANGUAGE_TO_FLAG } from "../constants";
import { getLanguageFlag } from "../util/language";

const FriendCard = ({ friend }) => {
  // Defensive programming - handle missing or malformed data
  if (!friend || !friend._id) {
    console.warn("FriendCard: Invalid friend data", friend);
    return null;
  }

  const profilePic =
    friend.profilePic ||
    "https://api.dicebear.com/7.x/avataaars/svg?seed=default";
  const fullName = friend.fullName || "Unknown User";
  const nativeLanguage = friend.nativeLanguage || "Unknown";
  const learningLanguage = friend.learningLanguage || "Unknown";

  return (
    <div className="card bg-base-200 hover:shadow-md transition-shadow">
      <div className="card-body p-4">
        {/* USER INFO */}
        <div className="flex items-center gap-3 mb-3">
          <div className="avatar size-12">
            <img
              src={profilePic}
              alt={fullName}
              onError={(e) => {
                e.target.src =
                  "https://api.dicebear.com/7.x/avataaars/svg?seed=default";
              }}
            />
          </div>
          <h3 className="font-semibold truncate">{fullName}</h3>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className="badge badge-secondary text-xs">
            {getLanguageFlag(nativeLanguage)}
            Native: {nativeLanguage}
          </span>
          <span className="badge badge-outline text-xs">
            {getLanguageFlag(learningLanguage)}
            Learning: {learningLanguage}
          </span>
        </div>

        <Link to={`/chat/${friend._id}`} className="btn btn-outline w-full">
          Message
        </Link>
      </div>
    </div>
  );
};
export default FriendCard;
