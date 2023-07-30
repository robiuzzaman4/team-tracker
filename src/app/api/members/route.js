import connectDb from "@/utils/db";
import { NextResponse } from "next/server"
import Member from "@/models/Member";

export const GET = async (req, res) => {
    try {
        await connectDb();

        const members = await Member.find();
        const result = JSON.stringify(members);

        return new NextResponse(result, { status: 200 });

    } catch (error) {
        return new NextResponse("Database Error!", { status: 500 });
    }
}

export const POST = async (req) => {
    try {
        await connectDb();

        const { name, designation, photoURL } = await req.json();
        const result = await Member.create({ name, designation, photoURL });

        return new NextResponse("Post Method Working!", { status: 200 });

    } catch (error) {
        return new NextResponse("Database Error!", { status: 500 });
    }
}

export const DELETE = async (req) => {
    try {
        await connectDb();

        const id = req.nextUrl.searchParams.get("id");
        const deletedMember = await Member.findByIdAndDelete(id);
        const result = JSON.stringify(deletedMember);
        
        return new NextResponse(result, { status: 200 });

    } catch (error) {
        return new NextResponse("Database Error!", { status: 500 });
    }
}
