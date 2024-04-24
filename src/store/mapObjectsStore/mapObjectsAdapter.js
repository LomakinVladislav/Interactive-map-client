export const mapObjectsAdapter = {
  toClient: (data) => {
    return data.reduce((acc, item) => {
      if (!acc[item.object_id]) {
        acc[item.object_id] = {}
      }

      if (!acc[item.object_id][item.layer_id]) {
        acc[item.object_id][item.layer_id] = []
      }

      acc[item.object_id][item.layer_id].push([
        item.latitude,
        item.longitude
      ])

      return acc
    }, {})
  }
}