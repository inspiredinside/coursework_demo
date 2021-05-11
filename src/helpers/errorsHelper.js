export default (state, { message }) => ({
    ...state,
    error: message,
});
