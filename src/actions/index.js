export const increment = (num) => {
    return {
        type: 'INCREMENT',
        payload: num
    }
}

export const decrement = (num) => {
    return {
        type: 'DECREMENT',
        payload: num
    }
}

export const reset = (num) => {
    return {
        type: 'RESET'
    }
}

export const signin = () => {
    return {
        type: 'SIGN_IN'
    }
}