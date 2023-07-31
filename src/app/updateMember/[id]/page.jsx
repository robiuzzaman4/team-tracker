import Chip from "@/components/Chip";
import UpdateForm from "@/components/UpdateForm";
import { getSingleMember } from "@/utils/fetchingData";

const UpdateMember = ({ params }) => {
    const { id } = params;

    // get single member data


    return (
        <section className="max-w-screen-md mx-auto px-4 grid gap-10">
            <Chip>Update Member</Chip>

            {/* form */}
            {/* <UpdateForm {...singleMember} /> */}
        </section>
    );
};

export default UpdateMember;