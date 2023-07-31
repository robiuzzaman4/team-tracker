import Chip from "@/components/Chip";
import MemberCard from "@/components/MemberCard";
import { getMembers } from "@/utils/fetchingData";

const Home = async () => {
  // const members = await getMembers();

  return (
    <section className="max-w-screen-md mx-auto px-4 grid gap-10">
      <Chip>All Team Members</Chip>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* {
          members.map((member) => <MemberCard
            key={member._id}
            {...member} />)
        } */}
      </div>
    </section>
  )
}

export default Home;
