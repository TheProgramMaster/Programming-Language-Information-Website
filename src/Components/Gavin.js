import { React } from 'react';
import { ReactDOM } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

function Gavin({name, university, degree}){
    return (
        <div className="bg-info-subtle">
            <h2>My name is {name}</h2>
            <p>I am a recent graduate of {university}.
                Recently earned a bachelor of science in {degree}.
                Excited to work with your organization!!!
            </p>
            <img src="https://media.licdn.com/dms/image/C4D03AQHRz935K7l2jg/profile-displayphoto-shrink_800_800/0/1639538396024?e=2147483647&v=beta&t=QnuDD2NCF7sIP2I7yDd6xifY2EQ_Cyx5xo4D-caWp78"
                 alt="Gavin Johnson"
                 height={100}
                 width={100} 
                 className="rounded" />
        </div>
    );
}

export default Gavin;