import { Event } from "@/database/event.model";
import { connectToDatabase } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from 'cloudinary';

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

    let tags = JSON.parse(formData.get('tags') as string);
    let agenda = JSON.parse(formData.get('agenda') as string);

    const file = formData.get("image") as File;

    if (!file) {
      return NextResponse.json({ message: "Image file is required" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { resource_type: 'image', folder: 'AFG-Crawlers' },
        (error, result) => {
          if (error) return reject(error);

          resolve(result);
        }).end(buffer);
    });

    event.image = (uploadResult as { secure_url: string }).secure_url;
    const createdEvent = await Event.create({
      ...event,
      tags: tags,
      agenda: agenda,
    });

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

export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();

    const events = await Event.find().sort({ createdAt: -1 })

    return NextResponse.json({
      message: "Events retrieved successfully",
      events
    }, { status: 200 });

  } catch (e) {
    console.error("Error retrieving events:", e);

    return NextResponse.json({
      message: "Event retrieval failed",
      error: e instanceof Error ? e.message : "Unknown error"
    }, { status: 500 });
  }

}