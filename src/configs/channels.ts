let channels: {
  id: number,
  name: string
}[] = []
for (let i = 1; i<= 250; i++) {
  channels.push({
    id: i,
    name: "Channel " + i
  })
}

export default channels