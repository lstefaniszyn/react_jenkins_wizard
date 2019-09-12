import React, { useState, useEffect } from 'react';

const StepFour = props => {
  const [statusArtifactUpload, setStatusArtifactUpload] = useState('');
  const [statusGitPush, setStatusGitPush] = useState('');

  const statusData = {
    inProgress: { text: 'IN PROGRESS', color: 'orange' },
    passed: { text: 'PASSED', color: 'green' },
    failed: { text: 'FAILED', color: 'red' },
    skipped: { text: 'SKIPPED', color: 'grey' },
    default: { text: '', color: 'black' }
  };

  const runStatusArtifactUpload = () => {
    setStatusArtifactUpload(statusData.inProgress.text);
  };

  const runStatusGitPush = () => {
    setStatusGitPush(statusData.inProgress.text);
  };

  const setColor = status => {
    // console.log('Check to status:', status);
    let data = Object.values(statusData).filter(
      item => item.text === status
    )[0];
    // console.log('Item:', data);
    // console.log('Status:', status, ' color: ', data.color);
    return data.color;

    // console.log('Set Color');
    // let color = 'black';
    // switch (item) {
    //   case 'In Progress':
    //     color = 'orange';
    //     break;
    //   case 'Passed':
    //     color = 'green';
    //     break;
    //   case 'Failed':
    //     color = 'red';
    //     break;
    //   case 'Skipped':
    //     color = 'grey';
    //     break;
    //   default:
    //     color = 'black';
    // }
    // return color;
  };

  useEffect(() => {
    runStatusArtifactUpload();
    runStatusGitPush();
  }, []);

  // !!!!! GOOD EXAMPLE OF  UseEffect - UseState !!!!!!!
  // import React, { useState, useEffect } from "react";

  // export default function User(props) {
  //   const [user, setUser] = useState(null);

  //   async function fetchUserData(id) {
  //     const response = await fetch("/" + id);
  //     setUser(await response.json());
  //   }

  //   useEffect(() => {
  //     fetchUserData(props.id);
  //   }, [props.id]);

  //   if (!user) {
  //     return "loading...";
  //   }

  //   return (
  //     <details>
  //       <summary>{user.name}</summary>
  //       <strong>{user.age}</strong> years old
  //       <br />
  //       lives in {user.address}
  //     </details>
  //   );
  // }

  return (
    <form>
      <div className="row">
        <div className="six columns">
          <label>Uploading artifact - </label>
          <div
            className="updateStatus"
            style={{ color: setColor(statusArtifactUpload) }}
          >
            {statusArtifactUpload}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <label>Push to Git - </label>
          <div
            className="updateStatus"
            style={{ color: setColor(statusArtifactUpload) }}
          >
            {statusGitPush}
          </div>
        </div>
      </div>
    </form>
  );
};

export { StepFour };

// export class StepFour extends React.Component {
//   constructor () {
//     super()
//     this.state = {
//       checked: ''
//     }
//     this.handleCheckedChanged = this.handleCheckedChanged.bind(this);
//   }

//   handleCheckedChanged (event) {
//     this.setState({checked: event.target.checked})
//   }

//   render () {
//     return (
//       <div>
//         <div className='row'>
//           <div className='ten columns terms'>
//             <span>By clicking "Accept" I agree that:</span>
//             <ul className='docs-terms'>
//               <li>
//                 I have read and accepted the <a href='http://google.com'>User Agreement</a>
//               </li>
//               <li>
//                 I have read and accepted the <a href='http://google.com'>Privacy Policy</a>
//               </li>
//               <li>I am at least 18 years old</li>
//             </ul>
//             <label>
//               <input
//                 type='checkbox'
//                 //   defaultChecked={this.state.checked}
//                 checked={this.state.checked}
//                 onChange={this.handleCheckedChanged}
//                 autoFocus
//               />
//               <span> Accept </span>{' '}
//             </label>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
