import Http from "@/request/Http";

class Upload extends Http {
  public prefix:string = 'api/upload-file';

  public async uploadFile (data: any) {
    try {
      return await this.post('', data, {}, {'Content-Type': 'multipart/form-data'})
    } catch (e) {
      return e
    }
  }
}

export default new Upload()