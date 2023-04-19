import {useState}  from "react"
import {initializeApp} from 'firebase/app'
import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
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

export default function SignupForm() {
    const[ email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[user, setUser] = useState()

    const handleSignup = async (e) => {
        e.preventDefault()
        const results = await createUserWithEmailAndPassword(auth, email, password)
        .catch(alert)
        setUser(results.user) 
    }

const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    const results = await signInWithPopup(auth, provider)
    .catch(alert)
    setUser(results.user )
}

    if(user) {
        return <h2>Welcome User</h2>
    }

    return (
        <>
        <Form onSubmit={handleSignup}>
            <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                type="email"
                placeholder="Enter Email"
                 value={email} onChange={e => setEmail(e.target.value)} />
                <Form.Text>We'll never share your email.</Form.Text>
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
            <Button onClick={signInWithGoogle} variant="dark" size="lg"> Sign in with Google</Button>
        </>
    )
}