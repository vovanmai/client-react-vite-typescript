let channels: {
  id: number,
  name: string
}[] = []
for (let i = 1; i<= 50; i++) {
  channels.push({
    id: i,
    name: "Channel " + i
  })
}

export default channels