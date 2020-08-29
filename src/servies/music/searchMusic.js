import findAllMusic from '../../DAO/findAllMusic';

export default async (req, res) => {
  try{
    const query = req.query.music
    const musicList = await findAllMusic(query)
    
    if (musicList.length === 0) {
      return res.status(200).send({message: '검색하신 곡이 없습니다.'})
    }

    return res.status(200).send(musicList);
  }catch (err) {
    console.error(err.message)
    return res.status(400).send({message: "ERROR"})
  }

}