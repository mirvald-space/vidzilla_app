import { NextRequest, NextResponse } from "next/server";

import { IG_GraphQLResponseDto } from "@/features/api/_dto/instagram";

import { getInstagramPostGraphQL } from "./utils";

interface RouteContext {
  params: Promise<{
    shortcode: string;
  }>;
}

export async function GET(_: NextRequest, context: RouteContext) {
  const { shortcode } = await context.params;

  if (!shortcode) {
    return NextResponse.json(
      { error: "noShortcode", message: "shortcode is required" },
      { status: 400 }
    );
  }

  try {
    const response = await getInstagramPostGraphQL({
      shortcode,
    });

    const status = response.status;

    if (status === 200) {
      const { data } = (await response.json()) as IG_GraphQLResponseDto;
      if (!data.xdt_shortcode_media) {
        return NextResponse.json(
          { error: "notFound", message: "post not found" },
          { status: 404 }
        );
      }

      // Определяем тип медиа (видео или изображение)
      const mediaType = data.xdt_shortcode_media.is_video ? "video" : "image";
      
      // Для видео используем video_url, для изображений - display_url
      const mediaUrl = data.xdt_shortcode_media.is_video 
        ? data.xdt_shortcode_media.video_url 
        : data.xdt_shortcode_media.display_url;
      
      return NextResponse.json({ 
        data,
        mediaType,
        mediaUrl
      }, { status: 200 });
    }

    if (status === 404) {
      return NextResponse.json(
        { error: "notFound", message: "post not found" },
        { status: 404 }
      );
    }

    if (status === 429 || status === 401) {
      return NextResponse.json(
        {
          error: "tooManyRequests",
          message: "too many requests, try again later",
        },
        { status: 429 }
      );
    }

    throw new Error("Failed to fetch post data");
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: "serverError", message: error.message },
      { status: 500 }
    );
  }
}
