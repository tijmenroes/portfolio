export function getImgUrl(name: string) {
  return new URL(`../assets/${name}.png`, import.meta.url).href;
}

export function getVidUrl(name: string) {
  return new URL(`../assets/video/${name}.mp4`, import.meta.url).href;
}
