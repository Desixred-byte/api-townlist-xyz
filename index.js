const axios = require('axios');
module.exports = class VOID {
    constructor(token, client) {
        this['token'] = token;
        this['client'] = client;
    }

    serverCount(message) {
       axios.post("https://townlist.xyz/api/bots/stats", {}, {
        headers: {
          'serverCount': this.client.guilds.cache.size,
          'Content-Type': 'application/json',
          'Authorization': this.token
        },
         }).then(()=>console.log("Server count posted.")).catch(()=>null);
    }

    async search(id) {
      return axios.get(`https://townlist.xyz/api/bots/${id}`).then((res)=>res.data);
    }

    async hasVoted(id) {
        return axios.get(`https://townlist.xyz/api/bots/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': this.token
          }
        }).then((res)=>res.data.voted);
    }
}