export interface Toma {
     id?: number,
     name: string,
     session_id: number,
     conclusion_ia?: string,
     conclusion_expert?: string,
     created_at?: string,
     updated_at?:string,
     video_front?: string,
     video_middle?: string,
     video_back?: string,
     sensor_data_front?: string,
     sensor_data_back?: string,
}
