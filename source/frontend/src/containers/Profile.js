import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { load_profile, update_profile } from '../actions/profile';

const Profile = ({ 
    update_profile, 
    load_profile, 
    isAuthenticated,
    first_name_global,
    last_name_global,
    gender_global
}) => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        gender: ''
    });

    const { first_name, last_name, gender } = formData;

    useEffect(() => {
        load_profile();
        setFormData({
            first_name: first_name_global,
            last_name: last_name_global,
            gender: gender_global
        });
    }, []);

    const onClick = e => {
        console.log('cos');
        load_profile();
        setFormData({
            first_name: first_name_global,
            last_name: last_name_global,
            gender: gender_global
        });
    };

    const onClick2 = e => {
        console.log('cos2');
        update_profile("imie", "nazwisko", "Male");
        setFormData({
            first_name: first_name_global,
            last_name: last_name_global,
            gender: gender_global
        });
    };

    if (!isAuthenticated) {
        return <Redirect to='/' />
    }

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        update_profile(first_name, last_name, gender);
    };

    return(
        <div className='container'>
            <div class='jumbotron mt-5'>
                <h1 class='display-4'>Profile Page</h1>
                <button onClick={onClick}>klik me get</button>
                <br/>
                <br/>
                <button onClick={onClick2}>klik me put</button>
                <hr class='my-4' />
                <p>Jakiś tam paragraf</p>
                <Link class='btn btn-primary btn-lg' to='/' role='button'>Home</Link>
            </div>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <label className='form-label' htmlFor='first_name'>First Name</label>
                    <input
                        className='form-control'
                        type='text'
                        name='first_name'
                        placeholder={`${first_name}`}
                        onChange={e => onChange(e)}
                        value={first_name}
                    />
                </div>
                <div className='form-group'>
                    <label className='form-label mt-3' htmlFor='last_name'>Last Name</label>
                    <input
                        className='form-control'
                        type='text'
                        name='last_name'
                        placeholder={`${last_name}`}
                        onChange={e => onChange(e)}
                        value={last_name}
                    />
                </div>
                <div className='form-group'>
                    <label className='form-label mt-3' htmlFor='gender'>Gender</label>
                    <input
                        className='form-control'
                        type='text'
                        name='gender'
                        placeholder={`${gender}`}
                        onChange={e => onChange(e)}
                        value={gender}
                    />
                </div>
                <button className='btn btn-primary mt-3' type='submit'>Update Profile</button>
            </form>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    first_name_global: state.profile.first_name,
    last_name_global: state.profile.last_name,
    gender_global: state.profile.gender,
});

export default connect(mapStateToProps, { load_profile, update_profile } )(Profile);