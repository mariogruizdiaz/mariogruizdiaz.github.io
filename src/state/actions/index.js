
const consecuentActionsByAction = async (action) => ({
    success: (data) => ({
        type: `${action.type}_SUCCESS`,
        payload: data
    }),
    unsuccess: (data) => ({
        type: `${action.type}_UNSUCCESS`,
        payload: data
    }),
    fail: (data) => ({
        type: `${action.type}_FAIL`,
        payload: data
    })
});

const genericAction = (type, data) => ({
    type,
    payload: data
});

export {
    consecuentActionsByAction,
    genericAction,
};
