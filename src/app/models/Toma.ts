export class Toma {

  constructor(
    public id: number,
    public name: string,
    public session_id: number,
    public conclusion_ia: string,
    public conclusion_expert: string,
    public created_at: string,
    public updated_at:string,
    public video_front: string,
    public video_middle: string,
    public video_back: string,
    public sensor_data_front: string,
    public sensor_data_back: string,
  ) {

  }
}
