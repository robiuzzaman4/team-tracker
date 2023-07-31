"use client";

import Chip from "@/components/Chip";
import UpdateForm from "@/components/UpdateForm";
import { getSingleMember } from "@/utils/fetchingData";
import { useEffect, useState } from "react";

const UpdateMember = ({ params }) => {
    const { id } = params;

    // get single member data
    const [singleMember, setSingleMember] = useState([]);
    
    useEffect(() => {
        fetch(`/api/members/${id}`, {
            cache: 'no-cache'
        })
        .then((res) => res.json())
        .then((data) => setSingleMember(data));
    }, [id]);


    return (
        <section className="max-w-screen-md mx-auto px-4 grid gap-10">
            <Chip>Update Member</Chip>

            {/* form */}
            <UpdateForm {...singleMember} />
        </section>
    );
};

export default UpdateMember;