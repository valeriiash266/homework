import React from 'react';
import Spoiler from './components/Spoiler';
import RangeInput from './components/RangeInput';
import LoginForm from './components/LoginForm';
import PasswordConfirm from './components/PasswordConfirm.jsx';
import Carousel from './components/Carousel';
import Pagination from './components/Pagination';

const App = () => {

    const images = [
        "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-1.jpg",
        "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-2.jpg",
        "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-3.jpg",
        "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-4.jpg",
        "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-5.jpg"
    ];

    return (
        <div>

            <Spoiler header={<h1>Заголовок</h1>} open>
                Контент 1
                <p>
                    Lorem ipsum dolor.
                </p>
            </Spoiler>

            <Spoiler>
                <h2>Контент 2</h2>
                <p>
                    Lorem ipsum dolor.
                </p>
            </Spoiler>


            <RangeInput min={2} max={10} />


            <LoginForm onLogin={(credentials) => console.log(credentials)} />


            <PasswordConfirm min={2} />

            <Carousel images={images} />


            <Pagination max={10} render={(props) => <div>Page {props.page}</div>} />
        </div>
    );
};

export default App;
