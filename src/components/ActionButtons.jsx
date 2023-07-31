"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

const ActionButtons = ({ id }) => {
    const router = useRouter();
    
    const handleDelete = async () => {
        const confirmed = confirm("Are you sure want to delete?");
        if (confirmed) {
            const res = await fetch(`https://team-tracker-alpha.vercel.app/api/members?id=${id}`, {
                cache: 'no-cache',
                method: "DELETE"
            })
            if (res.ok) {
                router.refresh();
            }
        }
    }
    return (
        <div className="flex items-center justify-center gap-1">
            {/* delete button */}
            <button onClick={handleDelete} className="h-6 w-6 rounded-full flex items-center justify-center shadow-grid border border-neutral-200 hover:text-red-600 transition">
                <i className="ri-spam-3-line"></i>
            </button>
            {/* update button */}
            <Link href={`/updateMember/${id}`}>
                <button className="h-6 w-6 rounded-full flex items-center justify-center shadow-grid border border-neutral-200 hover:text-blue-600 transition">
                    <i className="ri-pencil-fill"></i>
                </button>
            </Link>
        </div>
    );
};

export default ActionButtons;