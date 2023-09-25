// import * as sharp from 'sharp'
import sharp from 'sharp'

export class Raster {
  async rasterize(svg: string, width: number, height: number, output: string) {
    const buf = Buffer.from(svg)
    await sharp(buf).resize(width, height).toFormat('png').toFile(output)
    return output
  }
}
