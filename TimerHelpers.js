// ref: https://qiita.com/ssmxgo/items/b99725cadfe30e5c45c4
const unixTime2ymd = (intTime) => {
    const d = new Date( intTime );

    const year  = d.getFullYear();
    const month = d.getMonth() + 1;
    const day  = d.getDate();
    const hour = ( '0' + d.getHours() ).slice(-2);
    const min  = ( '0' + d.getMinutes() ).slice(-2);
    const sec  = ( '0' + d.getSeconds() ).slice(-2);

    return( year + '/' + month + '/' + day + ' ' + hour + ':' + min + ':' + sec );
}

export { unixTime2ymd };
