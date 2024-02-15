import Http from "@/request/Http";

class Channel extends Http {
  public prefix:string = 'api/channels';

  public async list () {
    try {
      return await this.get('')
    } catch (e) {
      throw e
    }
  }
}

export default new Channel()