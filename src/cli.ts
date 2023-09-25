import fs from 'fs'
import { Raster } from './raster/Raster'

const _sample = `<svg>
  <rect x="0" y="0" width="200" height="200" rx="50" ry="50"/>
  <rect x="10" y="10" stroke="#00FF00" width="180" height="180" rx="20" ry="20"/>
  <rect x="20" y="20" fill="#ff0000" width="50" height="50" rx="20" ry="20"/>
</svg>`

const cmd = process.argv[2]

async function doRasterize(size = 512) {
  const inputFile = process.argv[3] || 'output/opensea/joker-11-anim.svg'
  const input = fs.readFileSync(inputFile, 'utf8')
  const rasta = new Raster()
  rasta.rasterize(input, size, size, `output/renders/${size}.png`)
}

async function main() {
  console.log('cmd', cmd)

  switch (cmd) {
    case 'rasta':
      await doRasterize()
      break

    default:
      console.log('unknown command')
  }
}

main().then(() => console.log('done'))
