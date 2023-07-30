import connectDb from "@/utils/db";
import { NextResponse } from "next/server"
import Member from "@/models/Member";

export const PUT = async (req, { params }) => {
    try {
        await connectDb();

        const { id } = params;
        const { newName: name, newDesignation: designation, newPhotoURL: photoURL } = await req.json();

        const updatedDoc = { name, designation, photoURL }

        const result = await Member.findByIdAndUpdate(id, updatedDoc);

        return new NextResponse(JSON.stringify(result), { status: 200 });


    } catch (error) {
        return new NextResponse("Database Error!", { status: 500 });
    }
}


export const GET = async (req, { params }) => {
    try {
        await connectDb();

        const { id } = params;
        const member = await Member.findById(id);
        return new NextResponse(JSON.stringify(member), { status: 200 });

    } catch (error) {
        return new NextResponse("Database Error!", { status: 500 });
    }
}
