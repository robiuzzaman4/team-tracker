"use client"

import Button from "@/components/Button";
import Chip from "@/components/Chip";
import { useRouter } from "next/navigation";

const AddMember = () => {
    const router = useRouter();

    const handleAddNewMember = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const designation = e.target.designation.value;
        const photoURL = e.target.photoURL.value;

        const newMember = {
            name,
            designation,
            photoURL
        }

        try {
            const res = await fetch(`/api/members`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(newMember)
            })

            if (res.ok) {
                router.push("/"); 
            } else {
                throw new Error("Failed to create new Member!")
            }

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <section className="max-w-screen-md mx-auto px-4 grid gap-10">
            <Chip>Add New Member</Chip>

            <p className="text-xs text-neutral-800">Demo PhotoURL: https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1</p>

            {/* form */}
            <form 
            onSubmit={handleAddNewMember}
            className="w-full bg-white rounded-xl shadow-grid">
                <div className="p-4 flex flex-col gap-4">
                    <label className="grid gap-1 text-xs font-medium">
                        <p className="text-neutral-800">Name:</p>
                        <input 
                        type="text" 
                        placeholder="Name"
                        name="name"
                        required 
                        className="px-4 py-2 rounded-full border border-neutral-200 focus:border-blue-600 focus:outline-none shadow-grid"/>
                    </label>
                    <label className="grid gap-1 text-xs font-medium">
                        <p className="text-neutral-800">Designation:</p>
                        <input 
                        type="text"
                        placeholder="Designation"
                        name="designation" 
                        required
                        className="px-4 py-2 rounded-full border border-neutral-200 focus:border-blue-600 focus:outline-none shadow-grid"/>
                    </label>
                    <label className="grid gap-1 text-xs font-medium">
                        <p className="text-neutral-800">Photo URL:</p>
                        <input 
                        type="text"
                        placeholder="Photo URL"
                        name="photoURL" 
                        required
                        className="px-4 py-2 rounded-full border border-neutral-200 focus:border-blue-600 focus:outline-none shadow-grid"/>
                    </label>
                    <Button type="submit">Add Now</Button>
                </div>
            </form>
        </section>
    );
};

export default AddMember;