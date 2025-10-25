import { Event } from "@/database/event.model";
import { connectToDatabase } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    const formData = await req.formData();

    let event;

    try {
      event = Object.fromEntries(formData.entries());
    } catch (e) {
      return NextResponse.json({ message: "Invalid form data" }, { status: 400 });
    }

    const createdEvent = await Event.create(event);

    return NextResponse.json({
      message: "Event created successfully",
      event: createdEvent
    }, { status: 201 });

  } catch (e) {
    console.error("Error parsing request body:", e);

    return NextResponse.json({
      message: "Event creation failed",
      error: e instanceof Error ? e.message : "Unknown error"
    }, { status: 500 });
  }

} 