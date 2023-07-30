"use client"

import { useRouter } from 'next/navigation';
import Button from './Button';

const UpdateForm = ({ _id, name, designation, photoURL }) => {

    const router = useRouter();

    const handleUpdateMember = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const designation = e.target.designation.value;
        const photoURL = e.target.photoURL.value;

        const updatedMember = {
            newName: name,
            newDesignation: designation,
            newPhotoURL: photoURL
        }

        try {
            const res = await fetch(`http://localhost:3000/api/members/${_id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(updatedMember)
            })

            if (!res.ok) {
                throw new Error("Failed to Update Member!")
            }

            router.refresh();
            router.push("/");

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <form
            onSubmit={handleUpdateMember}
            className="w-full bg-white rounded-xl shadow-grid">
            <div className="p-4 flex flex-col gap-4">
                <label className="grid gap-1 text-xs font-medium">
                    <p className="text-neutral-800">Name:</p>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        defaultValue={name}
                        className="px-4 py-2 rounded-full border border-neutral-200 focus:border-blue-600 focus:outline-none shadow-grid" />
                </label>
                <label className="grid gap-1 text-xs font-medium">
                    <p className="text-neutral-800">Designation:</p>
                    <input
                        type="text"
                        placeholder="Designation"
                        name="designation"
                        defaultValue={designation}
                        className="px-4 py-2 rounded-full border border-neutral-200 focus:border-blue-600 focus:outline-none shadow-grid" />
                </label>
                <label className="grid gap-1 text-xs font-medium">
                    <p className="text-neutral-800">Photo URL:</p>
                    <input
                        type="text"
                        placeholder="Photo URL"
                        name="photoURL"
                        defaultValue={photoURL}
                        className="px-4 py-2 rounded-full border border-neutral-200 focus:border-blue-600 focus:outline-none shadow-grid" />
                </label>
                <Button type="submit">Update Now</Button>
            </div>
        </form>
    );
};

export default UpdateForm;