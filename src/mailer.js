const Mailer = () => {
    return (
        <div>
            <h1>form </h1>
            <form>
                <label>name</label>
                <input type= "text" name="name"/>

                <label>email</label>
                <input type="email" name="user_email" />

                <label>message</label>
                <textarea name='message' rows='4' />
                <input type='submit' value='send' />
            </form>
        </div>
    )
}

export default Mailer;