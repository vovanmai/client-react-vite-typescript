import Http from "@/request/Http";

class Message extends Http {
  public prefix:string = 'api/messages';

  public async create (data: any) {
    try {
      return await this.post('', data)
    } catch (e) {
      return e
    }
  }

  public async list () {
    try {
      return await this.get('')
    } catch (e) {
      return e
    }
  }
}

export default new Message()