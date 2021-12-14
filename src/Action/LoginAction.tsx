export const LoginAction = (user: any) => {
    return {
        type: 'SIGN_IN',
        user: user
    }
}