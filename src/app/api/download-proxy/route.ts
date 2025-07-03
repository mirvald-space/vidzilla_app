// app/api/download-proxy/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const fileUrl = searchParams.get("url");
  const mediaType = searchParams.get("mediaType") || "video"; // По умолчанию видео
  const defaultFilename = mediaType === "video" ? "gram-grabberz-video.mp4" : "gram-grabberz-image.jpg";
  const filename = searchParams.get("filename") || defaultFilename;

  if (!fileUrl) {
    return NextResponse.json(
      { error: "missingUrl", message: "url is required" },
      { status: 400 }
    );
  }

  try {
    // Validate the URL slightly (optional but recommended)
    if (!fileUrl.startsWith("https://")) {
      return NextResponse.json(
        { error: "Invalid URL format" },
        { status: 400 }
      );
    }

    // Fetch the media from the external URL
    const mediaResponse = await fetch(fileUrl);

    if (!mediaResponse.ok) {
      throw new Error(`Failed to fetch media: ${mediaResponse.statusText}`);
    }

    // Get the media data as a ReadableStream
    const mediaStream = mediaResponse.body;

    if (!mediaStream) {
      throw new Error("Media stream is not available");
    }

    // Set headers to force download
    const headers = new Headers();
    headers.set("Content-Disposition", `attachment; filename="${filename}"`);
    
    // Определяем Content-Type на основе типа медиа
    const contentType = mediaType === "video" 
      ? (mediaResponse.headers.get("Content-Type") || "video/mp4") 
      : (mediaResponse.headers.get("Content-Type") || "image/jpeg");
    
    headers.set("Content-Type", contentType);
    
    // Optionally set Content-Length if available
    if (mediaResponse.headers.get("Content-Length")) {
      headers.set(
        "Content-Length",
        mediaResponse.headers.get("Content-Length")!
      );
    }

    // Return the stream response
    return new NextResponse(mediaStream, {
      status: 200,
      headers: headers,
    });
  } catch (error: any) {
    console.error("Download proxy error:", error);
    return NextResponse.json(
      { error: "serverError", message: error.message },
      { status: 500 }
    );
  }
}
