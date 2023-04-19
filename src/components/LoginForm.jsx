import {useState}  from "react"
import{initializeApp} from 'firebase/app'
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import Form  from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const firebaseConfig = {
    apiKey: "AIzaSyC5OZB5Nel9KtpVRsrzKNaCkYF00eFmV28",
    authDomain: "timber-login-aa2.firebaseapp.com",
    projectId: "timber-login-aa2",
    storageBucket: "timber-login-aa2.appspot.com",
    messagingSenderId: "313017916790",
    appId: "1:313017916790:web:6d75e5bca4340e15b32e57"
  }

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

export default function LoginForm() {
    const[ email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [ user, setUser] = useState()

    const handleLogin = async (e) => {
        e.preventDefault()
        const response = await signInWithEmailAndPassword(auth, email, password)
         .catch(err => console.error(err));
        setUser(response.user) 
    }

    if(user) { 
        return <h2>Welcome User!</h2>
    }

    return (
        <>
        <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                type="email"
                placeholder="Enter Email"
                value = {email} onChange={ e => setEmail(e.target.value)} />
                <Form.Text>We'll never share your email with anyone else</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                type="password"
                placeholder="Enter Password :)"
                value={password} onChange={e => setPassword(e.target.value)}></Form.Control>
            </Form.Group>
               
            <Form.Group className="mb-3">
                <Button
                variant="danger"
                size="lg"
                type="submit">Login</Button>
            </Form.Group>
            </Form>
        </>
    )
}