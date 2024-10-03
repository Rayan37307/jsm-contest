import { NextResponse } from "next/server";
import City from "@/models/cities";

export async function POST(req: Request, res: Response) {
    await dbConnect();
    const { name  } = await req.json();
    const city = await City.create({ name });
    return NextResponse.json(city);
}


