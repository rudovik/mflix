import { connectToDatabase } from '../../../util/mongodb'
import { ObjectID } from 'mongodb'

export default async (req, res) => {
  const { db } = await connectToDatabase()

  const { id } = req.query

  const movie = await db.collection('movies').findOne({ _id: ObjectID(id) })

  res.json(movie)
}
