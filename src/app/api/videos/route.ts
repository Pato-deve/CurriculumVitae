import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Escanea public/videos/ y devuelve rutas relativas de todos los archivos de video
export async function GET() {
  const videosDir = path.join(process.cwd(), 'public', 'videos');

  try {
    const files = fs.readdirSync(videosDir);
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov'];
    const videos = files
      .filter((f) => videoExtensions.includes(path.extname(f).toLowerCase()))
      .map((f) => `/videos/${f}`);

    return NextResponse.json(videos);
  } catch {
    return NextResponse.json([]);
  }
}
