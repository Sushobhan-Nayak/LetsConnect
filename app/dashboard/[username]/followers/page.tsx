import FollowersModel from "@/components/FollowersModel";
import { fetchProfile } from "@/lib/data";

async function FollowersPage({
  params: { username },
}: {
  params: {
    username: string;
  };
}) {
  const profile = await fetchProfile(username);
  const followers = profile?.followedBy;

  return <FollowersModel followers={followers} username={username} />;
}

export default FollowersPage;
