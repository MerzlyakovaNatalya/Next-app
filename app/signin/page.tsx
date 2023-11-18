import SignInForm from '../../components/signin_form'
import styles from './page.module.scss'

const SignIn = async () => {
    return (
        <div className={styles.signin}>
            <h1 className={styles.signin_title}>Вход на сайт</h1>
            <SignInForm/>
        </div>
    )
}

export default SignIn