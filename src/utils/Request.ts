import router from '../router/index'

type Callback = {
    succeed?: (res: any) => void;
    failed?: (res: any) => void;
    network_error?: (err: any) => void;
};

function login() {
    router.push('/login')
}

export const get = (url: string, callback: Callback, isJSON = true): Promise<any> => {
    //Loading.start();
    return fetch(url, {
        method: "GET",
        credentials: "include",
    }).then((res: Response): void | Promise<void> | Response => {
        //Loading.stop();
        switch (res.status) {
            case 200:
                if (isJSON && callback?.succeed) return res.json().then(callback.succeed);
                else if (callback?.succeed) return res.text().then(callback.succeed);
                break;

            case 400:
                if (callback?.failed) return res.text().then(callback.failed);

            case 401:
                login();
                break;

            default:
                console.log(res.status);
        }
        return res;
    }).catch(function (err) {
        console.log(err)
        if (callback?.network_error) callback.network_error(err);
        return Promise.reject();
    });
}

export const post = (url: string, data: RequestInit["body"], callback: Callback, ct = 'application/json', isJSON = true): Promise<any> => {
    //Loading.start();
    return fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
            'Content-Type': ct
        },
        body: typeof (data) == 'string' ? data : JSON.stringify(data)
    }).then((res: Response): void | Promise<void> | Response => {
        //Loading.stop();
        switch (res.status) {
            case 200:
                if (isJSON && callback?.succeed) return res.json().then(callback.succeed);
                else if (callback?.succeed) return res.text().then(callback.succeed);
                break;

            case 400:
                if (callback?.failed) return res.text().then(callback.failed);

            case 401:
                login();
                break;

            default:
                console.log(res.status);
        }
        return res;
    }).catch(function (err) {
        console.log(err)
        if (callback?.network_error) callback.network_error(err);
        return Promise.reject();
    });
}

export const put = (url: string, data: RequestInit["body"], callback: Callback, ct = 'application/json', isJSON = true) => {
    //Loading.start();
    return fetch(url, {
        method: "PUT",
        credentials: "include",
        headers: {
            'Content-Type': ct
        },
        body: typeof (data) == 'string' ? data : JSON.stringify(data)
    }).then((res: Response): void | Promise<void> | Response => {
        //Loading.stop();
        switch (res.status) {
            case 200:
                if (isJSON && callback?.succeed) return res.json().then(callback.succeed);
                else if (callback?.succeed) return res.text().then(callback.succeed);
                break;

            case 400:
                if (callback?.failed) return res.text().then(callback.failed);

            case 401:
                login();
                break;

            default:
                console.log(res.status);
        }
        return res;
    }).catch(function (err) {
        console.log(err)
        if (callback?.network_error) callback.network_error(err);
        return Promise.reject();
    });
}

export const eventStream = (url: string, method: string, data: RequestInit["body"], callback: Callback, ct = 'application/json') => {
    //Loading.start();
    return fetch(url, {
        method: method,
        credentials: "include",
        headers: {
            'Content-Type': ct
        },
        body: JSON.stringify(data)
    }).then((res: Response): void | Promise<void> | Response => {
        //Loading.stop();
        switch (res.status) {
            case 200:
                if (res.body) {
                    const reader = res.body.getReader();
                    const decoder = new TextDecoder('utf-8');

                    const processStreamResult = (result) => {
                        const chunk = decoder.decode(result.value, { stream: !result.done });

                        //console.log(chunk)
                        const lines = chunk.split('\n')
                        //console.log(lines)
                        lines.forEach(line => {
                            if (line.trim().length > 0) {
                                let data = line.split('data: ')
                                if (data.length == 2) {
                                    if (data[1] != '[DONE]' && callback?.succeed) callback.succeed(data[1])
                                }
                            }
                        })

                        if (!result.done) {
                            return reader.read().then(processStreamResult);
                        }
                    }

                    return reader.read().then(processStreamResult);
                }
                break;

            case 400:
                if (callback?.failed) return res.text().then(callback.failed);

            case 401:
                login();
                break;

            default:
                console.log(res.status);
        }
        return res;
    }).catch(function (err) {
        console.log(err)
        if (callback?.network_error) callback.network_error(err);
        return Promise.reject();
    });
}