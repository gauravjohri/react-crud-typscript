const initialState = { user: (typeof localStorage.getItem('user') !== null) ? JSON.parse(localStorage.getItem('user') as any || '{}') : {} };
type intitalState = typeof initialState;
export const LoginReducer = (state: intitalState = initialState, action: any) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                ...state,
                user: action.user
            }
            break;

        default:
            return state;
            break;
    }
}