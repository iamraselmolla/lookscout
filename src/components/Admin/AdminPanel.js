import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import UserTable from '../UserTable';

const AdminPanel = () => {
    const [loading, setLoading] = useState(false);
    const [logoData, setLogoData] = useState();
    const [reload, setReload] = useState(false)

    useEffect(() => {
        fetch("https://lookscout-server.vercel.app/logo")
        .then(res => res.json())
        .then(data => {
            setLogoData(data[data.length -1])
           
        })
        .catch(err => console.log(err.message))
    },[reload])

    const uploadLogo = (e) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData();
        const logoImage = e.target.logo_image.files[0];
        formData.append('image', logoImage)
        fetch(`https://api.imgbb.com/1/upload?key=b7e976b0f0fd7f675ace55968db6324d`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.data?.display_url)
                const logoURL = data.data?.display_url;
                const uploadedTime = new Date().getTime();
                const logoData = {logoURL, uploadedTime}
                fetch("https://lookscout-server.vercel.app/logo", {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(logoData)
                })
                .then(res => res.json())
                .then(data => {
                    setReload(!reload)
                    toast.success("Logo uploaded successfully")
                    e.target.reset()
                })
                .catch(err => console.log(err.message))
                setLoading(false)
            })
            .catch(err => {
                console.log(err.message)
                return setLoading(false)
            })

    }
    console.log(logoData && logoData)
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="site-logo">
                            Site Logo
                        </h2>
                        <small className='mb-2'>Last updated at: { logoData?.uploadedTime ? new Date(logoData?.uploadedTime).toLocaleString("en-IN") : "Didn't upload any logo yet"}</small> <br />
                        <img className='logo_image mt-3' src={logoData?.logoURL} alt="" />
                        <Form className='mt-4' onSubmit={uploadLogo}>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Upload your logo here</Form.Label>
                                <Form.Control name="logo_image" type="file" />
                            </Form.Group>
                            {!loading &&
                                <button className={`btn btn-primary outline-0 border-0 px-5 py-2 w-100 fw-bolder text-white rounded`}>
                                    Upload Logo
                                </button>}
                            {loading && <button className={`btn w-100 btn-primary`} type="button" disabled>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                Uploaing Logo...
                            </button>}
                        </Form>
                    </div>
                    <div className="col-md-6">
                        <UserTable></UserTable>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminPanel;