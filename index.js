function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clamp (min, max, val) {
  if (min > max) {
    throw new Error('Min cannot be greater than max in clamp')
  }

  if (val > min && val < max) {
    return val
  }

  return val <= min ? min : max
}

function randoColor () {
  let num = Math.random()
  const colorProbs = new Map([
    ['#e02f09', 0.25],
    ['#f5f926', 0.25],
    ['#fcb00c', 0.25],
    ['#1309e0', 0.25]
  ])

  for (const [color, prob] of colorProbs) {
    num = num - prob

    if (num < 0) {
      return color
    }
  }
}

function generateDiv () {
  const height = getRandomInt(1, 10) * 10
  const width = getRandomInt(1, 10) * 10
  const right = clamp(0, 100 - width, getRandomInt(0, 10) * 10)
  const bottom = clamp(0, 100 - height, getRandomInt(0, 10) * 10)
  const div = document.createElement('div')
  let colorChoice = 'transparent'

  if (height < 50 && width < 50) {
    colorChoice = randoColor()
  }

  div.setAttribute('style', `background-color: ${colorChoice}; height: ${height}%; width: ${width}%; right: ${right}%; bottom: ${bottom}%;`)

  return div
}

function generate (sqCount = 15) {
  const mainWrapper = document.querySelector('#wrapper')

  for (let i = 0; i < sqCount; i++) {
    mainWrapper.appendChild(generateDiv())
  }
}

generate(23)
