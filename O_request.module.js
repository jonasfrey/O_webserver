class O_request{
    constructor(
        s_ip_address,
        n_ts_ut_ms,
        s_url,
    ){
        this.n_id = null
        this.s_ip_address = s_ip_address 
        this.n_ts_ut_ms = n_ts_ut_ms 
        this.s_url = s_url,
        this.o_url = null
    }
}

export {O_request}