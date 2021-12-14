import { Button, Grid, TextField } from "@mui/material"
import LoginHandler from "../Handler/LoginHandler"

export const Login = () => {
    const { hanldeChange, handleLogin, user } = LoginHandler();
    return (
        <div>
            <Grid container>
                <form onSubmit={handleLogin}>
                    <Grid item>
                        <h2>Login</h2>
                    </Grid>
                    <Grid item>
                        <TextField label={`Username`} name={`username`} onChange={hanldeChange} value={user.username} />
                    </Grid>
                    <Grid item>
                        <TextField label={`Password`} name={`password`} onChange={hanldeChange} value={user.password} />
                    </Grid>
                    <Grid item>
                        <Button type="submit">Login</Button>
                    </Grid>
                </form>
            </Grid>
        </div>
    )
}