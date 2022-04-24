import getDate from '@jamxu/timestamp';

export default function reqStamp(req) {
    return(`[${getDate()}] [${req.method} ${req.url}] [${req.ip}]`);
}