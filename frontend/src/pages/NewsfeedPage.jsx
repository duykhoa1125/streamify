import React from "react";
import {
  NewspaperIcon,
  HeartIcon,
  MessageCircleIcon,
  ShareIcon,
} from "lucide-react";

const NewsfeedPage = () => {
  // Sample posts data
  const posts = [
    {
      id: 1,
      author: "John Doe",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      content:
        "Just finished an amazing video call session! The quality was incredible. 🎥✨",
      timestamp: "2 hours ago",
      likes: 12,
      comments: 3,
    },
    {
      id: 2,
      author: "Jane Smith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
      content:
        "Connected with so many great people today. Streamify is making communication so much easier! 💬",
      timestamp: "4 hours ago",
      likes: 8,
      comments: 5,
    },
    {
      id: 3,
      author: "Mike Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      content:
        "Loving the new features! The chat interface is so smooth and intuitive.",
      timestamp: "6 hours ago",
      likes: 15,
      comments: 7,
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex items-center gap-3 mb-6">
        <NewspaperIcon className="size-8 text-primary" />
        <h1 className="text-3xl font-bold">Newsfeed</h1>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-4">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src={post.avatar} alt={post.author} />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">{post.author}</h3>
                  <p className="text-sm text-base-content/60">
                    {post.timestamp}
                  </p>
                </div>
              </div>

              <p className="mb-4">{post.content}</p>

              <div className="flex items-center gap-6 text-base-content/60">
                <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
                  <HeartIcon className="size-5" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                  <MessageCircleIcon className="size-5" />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center gap-2 hover:text-green-500 transition-colors">
                  <ShareIcon className="size-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <NewspaperIcon className="size-16 text-base-content/30 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">No posts yet</h3>
          <p className="text-base-content/60">
            Be the first to share something!
          </p>
        </div>
      )}
    </div>
  );
};

export default NewsfeedPage;
