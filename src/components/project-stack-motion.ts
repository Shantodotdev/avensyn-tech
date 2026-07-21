export type ProjectStackDepth = {
  scale: number
  translateY: number
  translateZ: number
  rotateX: number
  opacity: number
}

const FLAT_DEPTH: ProjectStackDepth = {
  scale: 1,
  translateY: 0,
  translateZ: 0,
  rotateX: 0,
  opacity: 1,
}

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(Math.max(value, minimum), maximum)
}

export function getProjectStackDepth(
  index: number,
  total: number,
  progress: number,
): ProjectStackDepth {
  const availableLayers = Math.max(total - index - 1, 0)

  if (availableLayers === 0) return FLAT_DEPTH

  const normalizedProgress = clamp(progress, 0, 1)
  const arrivingLayers = normalizedProgress * total - (index + 0.7)
  const depthLayers = clamp(arrivingLayers, 0, Math.min(availableLayers, 3))

  if (depthLayers === 0) return FLAT_DEPTH

  return {
    scale: 1 - depthLayers * 0.018,
    translateY: depthLayers * -30,
    translateZ: depthLayers * -42,
    rotateX: depthLayers * -0.75,
    opacity: 1 - depthLayers * 0.045,
  }
}
