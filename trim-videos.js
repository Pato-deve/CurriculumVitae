const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('ffmpeg-static');
const fs = require('fs');
const path = require('path');

ffmpeg.setFfmpegPath(ffmpegPath);

const VIDEOS_DIR = path.join(__dirname, 'public', 'videos');
const MAX_DURATION = 12; // segundos

const videoExtensions = ['.mp4', '.webm', '.mov', '.ogg'];

const files = fs.readdirSync(VIDEOS_DIR)
  .filter(f => videoExtensions.includes(path.extname(f).toLowerCase()));

console.log(`Encontrados ${files.length} videos. Recortando a ${MAX_DURATION}s...\n`);

let processed = 0;

files.forEach((file) => {
  const inputPath = path.join(VIDEOS_DIR, file);
  const tmpPath = path.join(VIDEOS_DIR, `_tmp_${file}`);

  ffmpeg(inputPath)
    .setStartTime(0)
    .setDuration(MAX_DURATION)
    .outputOptions(['-c', 'copy']) // Sin re-encoding → instantáneo
    .output(tmpPath)
    .on('end', () => {
      fs.unlinkSync(inputPath);
      fs.renameSync(tmpPath, inputPath);
      processed++;
      console.log(`✓ ${file} → ${MAX_DURATION}s`);
      if (processed === files.length) {
        console.log(`\nListo. ${processed} videos recortados.`);
      }
    })
    .on('error', (err) => {
      console.error(`✗ ${file}: ${err.message}`);
      if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
      processed++;
    })
    .run();
});
