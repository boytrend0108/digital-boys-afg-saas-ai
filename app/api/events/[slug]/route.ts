import { Event } from "@/database/event.model";
import { connectToDatabase } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

type RouteParams = {
  params: Promise<{ slug: string; }>
};

export async function GET(
  req: NextRequest,
  { params }: RouteParams
): Promise<NextResponse> {
  try {
    const { slug } = await params;

    if (!slug) {
      return NextResponse.json(
        { message: "Invalid slug parameter" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const decodedSlug = decodeURIComponent(slug);
    const event = await Event.findOne({ slug: decodedSlug });

    if (!event) {
      return NextResponse.json(
        { message: `Event with slug '${slug}' not found` },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Event retrieved successfully",
      event
    }, { status: 200 });

  } catch (error) {
    console.error("Error fetching event:", error);

    return NextResponse.json({
      message: "Failed to retrieve event",
      error: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 });
  }
}