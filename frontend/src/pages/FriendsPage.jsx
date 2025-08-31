import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getUserFriends } from "../lib/api";
import { UsersIcon } from "lucide-react";
import NoFriendsFound from "../components/NoFriendsFound";
import { Link } from "react-router";
import FriendCard from "../components/FriendCard";
import useAuthUser from "../hooks/useAuthUser";
import ErrorBoundary from "../components/ErrorBoundary";

const FriendsPage = () => {
  const { authUser } = useAuthUser();
  const {
    data: friends = [],
    isLoading: loadingFriends,
    error,
  } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends,
    enabled: !!authUser, // Only run query if user is authenticated
  });

  if (!authUser) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="alert alert-warning">
          <span>Please log in to view your friends.</span>
        </div>
      </div>
    );
  }

  if (loadingFriends) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="alert alert-error">
          <span>Error loading friends: {error.message}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center gap-3 mb-6">
        <UsersIcon className="size-8 text-primary" />
        <h1 className="text-3xl font-bold">My Friends</h1>
      </div>

      {friends.length === 0 ? (
        <div className="space-y-4">
          <NoFriendsFound />
          {/* Demo data for testing */}
          <div className="card bg-base-200 p-4">
            <h3 className="font-semibold mb-2">Demo Friends (for testing)</h3>
            <p className="text-sm text-base-content/70 mb-3">
              This is demo data to show how the friends list would look with
              actual friends.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  _id: "demo1",
                  fullName: "John Doe",
                  profilePic:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
                  nativeLanguage: "English",
                  learningLanguage: "Spanish",
                },
                {
                  _id: "demo2",
                  fullName: "Maria Garcia",
                  profilePic:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
                  nativeLanguage: "Spanish",
                  learningLanguage: "English",
                },
                {
                  _id: "demo3",
                  fullName: "Pierre Dubois",
                  profilePic:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=Pierre",
                  nativeLanguage: "French",
                  learningLanguage: "English",
                },
              ].map((friend) => (
                <ErrorBoundary key={friend._id}>
                  <FriendCard user={friend} />
                </ErrorBoundary>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {friends.map((friend) => (
            <ErrorBoundary key={friend._id}>
              <FriendCard user={friend} />
            </ErrorBoundary>
          ))}
        </div>
      )}
    </div>
  );
};

export default FriendsPage;
