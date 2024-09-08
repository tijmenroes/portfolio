export function getImgUrl(name: string, ext = "png") {
  return new URL(`../assets/${name}.${ext}`, import.meta.url).href;
}

export function getVidUrl(name: string) {
  return new URL(`../assets/video/${name}.mp4`, import.meta.url).href;
}
