import { Button, Grid, TextField } from "@mui/material"
import SignUpHandler from "../Handler/SignUpHandler"

export const SignUp = () => {
    const { handleChange, handleSignUp } = SignUpHandler();
    return (
        <Grid container display={`flex`}>
            <form onSubmit={handleSignUp}>
                <Grid item><h2>SignUp</h2></Grid>
                <Grid item>
                    <TextField label="Username" name="username" onChange={handleChange} />
                </Grid>
                <Grid item>
                    <TextField label="Email" name="email" onChange={handleChange} />
                </Grid>
                <Grid item>
                    <TextField label="Password" name="password" onChange={handleChange} />
                </Grid>
                <Grid item>
                    <Button type="submit">SignUp</Button>
                </Grid>
            </form>
        </Grid>
    )
}