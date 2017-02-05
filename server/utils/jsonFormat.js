exports = module.exports = {
    formatResponseText: (status, data) => {
        let retData = {
            success: true,
            message: "",
            data: null
        };
        if (status !== 200 && status !== 302 && status !== 304) {
            retData.success = false;
            switch (typeof data) {
                case 'string':
                    retData.message = data;
                    break;
                case 'object':
                    if (data instanceof Error) {
                        retData.message = data.message;
                    } else {
                        retData.message = 'Error happened';
                    };
                    break;
                default:
                    retData.message = 'Error';
                    break;
            }
        } else {
            retData.data = data;
        }
        return retData;
    }
}