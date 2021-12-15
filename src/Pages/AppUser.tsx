import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react"
import AppRequest from "../Service/AppRequest"

export const AppUser = () => {
    const { request } = AppRequest();
    const [userList, setUserList] = useState<any>([]);
    const [editUser, setEditUser] = useState<any>({ username: "", email: "", password: "", image: "", skills: [], candidates: [] });
    const [addUser, setAddUser] = useState({ username: "", email: "", password: "", image: "" });
    const [dialog, setDialog] = useState<boolean>(false);
    const [dialogAdd, setDialogAdd] = useState<boolean>(false);
    const [addMore, setAddMore] = useState([{ fname: "", lname: "", gender: "" }])
    const getUserList = async () => {
        let userData: any = await request(`/users`);
        await setUserList(userData);
    }

    const getUSer = async (id: number) => {
        let user: any = await request(`/users/${id}`);
        await setAddMore(user.candidates);
        await setDialog(true);
        await setEditUser(user);
    }

    const handleAddMoreChange = (index: number, event: any) => {
        const { name, value } = event.target;
        const values: any = [...addMore];
        values[index][name] = value;
        setAddMore(values);
        setEditUser({ ...editUser, candidates: values });
    }

    const handleAddMore = () => {
        setAddMore([...addMore, { fname: "", lname: "", gender: "" }]);
    }
    const handleRemoveAddMore = (index: number) => {
        const values = [...addMore];
        values.splice(index, 1);
        setAddMore(values);
        setEditUser({ ...editUser, candidates: values });
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let file: any = event.target;
        setEditUser({ ...editUser, image: file.files[0].name })
    }

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        let options = Array.from(event.target.selectedOptions, (option: HTMLOptionElement) => option.value);
        setEditUser({ ...editUser, skills: options });
    }

    const handleEditUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(addMore);
        const { name, value } = event.target;
        setEditUser({ ...editUser, [name]: value });
    }

    const handleEditUSer = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await request(`/users/${editUser.id}`, 'PUT', editUser);
        await getUserList();
        await setDialog(false);
    }

    const handleDeleteUser = async (id: number) => {
        if (window.confirm(`Are you sure?`)) {
            await request(`/users/${id}`, 'DELETE');
            await getUserList();
            await setDialog(false);
        }
    }

    const handleAddUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setAddUser({ ...addUser, [name]: value });
    }

    const handleAddUser = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await request(`/users`, 'POST', addUser);
        await getUserList();
        await setDialogAdd(false);
    }

    useEffect(() => {
        getUserList();
    }, [])

    return (
        <div>
            <Button onClick={() => setDialogAdd(true)}>Add New USer</Button>
            <table>
                <thead>
                    <tr>
                        <th>Sr No.</th>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Skills</th>
                        <th>Candidates</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((user: any, index: number) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.id}</td>
                            <td>{user.image}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.skills}</td>
                            <td>{user.candidates.map((candidate: any, index: number) => (
                                <p key={index}>{candidate.fname} {candidate.lname}</p>
                            ))}</td>
                            <td>
                                <Button onClick={() => getUSer(user.id)}>Edit</Button>
                                <Button onClick={() => handleDeleteUser(user.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Dialog open={dialog}>
                <DialogTitle>Edit User</DialogTitle>
                <form onSubmit={handleEditUSer}>
                    <DialogContent>
                        <TextField name="username" onChange={handleEditUserChange} value={editUser.username} />
                        <TextField name="password" onChange={handleEditUserChange} value={editUser.password} />
                        <TextField name="email" onChange={handleEditUserChange} value={editUser.email} />
                        <select multiple={true} value={editUser.skills} name="skills" onChange={handleSelectChange}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                        <TextField type={`file`} name="image" onChange={handleFileChange} /><br />
                        <button type="button" onClick={handleAddMore}>Add More</button>
                        <Typography variant="h5" component={`div`}>Passengers</Typography>
                        {addMore.map((element: any, index: number) => (
                            <div key={index}>
                                <span>{index + 1}.) </span>
                                <input type="text" name="fname" value={element.fname} onChange={(e) => handleAddMoreChange(index, e)} />
                                <input type="text" name="lname" value={element?.lname} onChange={(e) => handleAddMoreChange(index, e)} />
                                <select name="gender" value={element?.gender} onChange={(e) => handleAddMoreChange(index, e)}>
                                    <option value=""></option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select><br />
                                {index > 0 && <button type="button" onClick={() => handleRemoveAddMore(index)}>Remove</button>}
                            </div>
                        ))}

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setDialog(false)}>Cancel</Button>
                        <Button type="submit">Save</Button>
                    </DialogActions>
                </form>
            </Dialog>
            <Dialog open={dialogAdd}>
                <DialogTitle>Edit User</DialogTitle>
                <form onSubmit={handleAddUser}>
                    <DialogContent>
                        <TextField label={`Username`} name="username" onChange={handleAddUserChange} />
                        <TextField label={`Password`} name="password" onChange={handleAddUserChange} />
                        <TextField label={`Email`} name="email" onChange={handleAddUserChange} />
                        <TextField type={`file`} name="image" />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setDialog(false)}>Cancel</Button>
                        <Button type="submit">Save</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div >
    )
}