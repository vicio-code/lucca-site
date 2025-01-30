import Links from "./components/Links";
import Profile from "./components/Profile";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="">
        <Profile />
        <Links />
      </div>
    </div>
  );
}
