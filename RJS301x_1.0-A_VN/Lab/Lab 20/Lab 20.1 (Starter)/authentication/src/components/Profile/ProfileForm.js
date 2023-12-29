import { useState, useContext } from 'react';
import useHttp from '../../hook/use-http';
import classes from './ProfileForm.module.css';
import TokenContext from '../../context-provider/use-context';
import { UPDATE_PROFILE_API } from '../../config/RestApi';
import { API_KEY } from '../../config/Variable';
import LoadingSpinner from '../Loading/LoadingSpinner';

const ProfileForm = () => {

  const { sendRequest: sendRequestChangePassword,
    isLoading: isLoadingChangePassword, } = useHttp();
  const { token } = useContext(TokenContext)
  const [password, setPassword] = useState("");

  //update
  // fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCxMdQSzIE7CJRFpOHwIHBfPJdvD29bD5Y', {
  //   method: "POST",
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }, body: JSON.stringify({
  //     "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImNmM2I1YWRhM2NhMzkxNTQ4ZDM1OTJiMzU5MjkyM2UzNjAxMmI5MTQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYXV0aGVuLWRlbW8tdHVuZ3B0IiwiYXVkIjoiYXV0aGVuLWRlbW8tdHVuZ3B0IiwiYXV0aF90aW1lIjoxNjkxODEyMjM0LCJ1c2VyX2lkIjoieHdDQmUwSG52ek5PUWxkdXhwYnRQU2NnTlpNMiIsInN1YiI6Inh3Q0JlMEhudnpOT1FsZHV4cGJ0UFNjZ05aTTIiLCJpYXQiOjE2OTE4MTIyMzQsImV4cCI6MTY5MTgxNTgzNCwiZW1haWwiOiJ0dW5nQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInR1bmdAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.ainzSba6EP5Ad4Q0zBQCGXu2KQY6LShLIW2tJD5wzQKG4XjUpea_LHbBubRctEUh7IPb2S2BZ6vtaUsK4svDiwn7lP-VNi8QYuICpdVBbgl86dpiYvxTe8UbqBN01lgAzMKz5AtUDMFZqNh6zErtgruxlW6iY-bvFxN8z-G9eT4Zc2w9YdQ31iinDMNdpetMKm9J1W6M81-EKYD1pgy_eDfXTvwJnAXSRIfYUG8GO7MZEcrnRFxqmy9aldlWYqM0Rs8WLt4Y_nC61rheSrSHmXovbY3FXNyR-xqLeypFmfXbzMFvBFFOw1AmCIH3qxo5p-H-oqN-ZR21o-CvTkxTqw",
  //     "displayName": "TungPT",
  //     "photoUrl": "https://genk.mediacdn.vn/2013/1-ef732.jpg",
  //     "returnSecureToken": true
  //   })
  // }).then((response) => {
  //   return response.json()
  // }).then((data) => {
  //   console.log(data)
  // })

  const submitForm = (e) => {
    e.preventDefault();
    sendRequestChangePassword({
      link: UPDATE_PROFILE_API + API_KEY,
      method: "POST",
      headers: {
        "Content-type": "Application/json"
      },
      body: { "idToken": token, "password": password, "returnSecureToken": true }
    }, null, () => {
      alert('update succesfully');
      setPassword("")
    })

  }

  return (
    <>
      <form className={classes.form} onSubmit={submitForm}>
        <div className={classes.control}>
          <label htmlFor='new-password'>New Password</label>
          <input type='password' id='new-password' value={password} onChange={(e) => {
            setPassword(e.target.value.trim())
          }} required />
        </div>
        <div className={classes.action}>
          <button>Change Password</button>
        </div>
      </form>
      {isLoadingChangePassword ? <LoadingSpinner /> : <></>}
    </>
  );
}

export default ProfileForm;
