import axios from 'axios';


export const get_all_courses = () => async dispatch => {
    //if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        }; 

        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/course/course/`, config);

            dispatch({
                type: 'ok zaladowanie kursow',
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: 'zaladowanie kursow nie wyszlo'
            });
        }
    // } else {
    //     dispatch({
    //         type: USER_LOADED_FAIL
    //     });
    // }
};

export const create_course = () => async dispatch => {
    console.log(421);
}
