import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';

const UserTable = () => {
    const [userTable, setUserTable] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/user-data')
            .then(res => res.json())
            .then(data => setUserTable(data))
    }, []);

    if(!userTable){
        return <Spinner></Spinner>
    }
    return (
        <>
            <Table className='text-center' striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>

                    {userTable?.map((singleUser, index) => {
                        return (
                            <tr>
                                <td>{index+1}</td>
                                <td>{singleUser?.name}</td>
                                <td>{singleUser?.email}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>
        </>
    );
};

export default UserTable;