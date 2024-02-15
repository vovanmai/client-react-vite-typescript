import Http from "@/request/Http";

class Message extends Http {
  public prefix:string = 'api/channels';

  public async create (channelId: number, data: any) {
    try {
      return await this.post(`/${channelId}/messages`, data)
    } catch (e) {
      throw e
    }
  }

  public async list (channelId: number) {
    try {
      return await this.get(`/${channelId}/messages`)
    } catch (e) {
      throw e
    }
  }
}

export default new Message()