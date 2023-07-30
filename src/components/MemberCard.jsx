import Image from "next/image";
import ActionButtons from "./ActionButtons";

const MemberCard = ({_id, name, designation, photoURL}) => {
    return (
        <div className="bg-white p-4 rounded-xl shadow-grid flex flex-col gap-4">
            <div className="flex items-start justify-between gap-2">
                <Image
                    src={photoURL}
                    alt="Member Image"
                    height={100}
                    width={100}
                    className="w-20 h-20 object-cover rounded-full" />
                <ActionButtons id={_id}/>
            </div>
            <div className="flex flex-col">
                <h3 className="font-medium">{name}</h3>
                <p className="text-sm text-neutral-600">{designation}</p>
            </div>
        </div>
    );
};

export default MemberCard;